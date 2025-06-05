import { NextRequest, NextResponse } from "next/server";
import IORedis from "ioredis";
import { getTopTracks } from "@/app/api/data/spotify/utils";

export async function GET(request: NextRequest) {
  console.log("Spotify data API request received");

  // Check API key
  const apiKey = request.headers.get("api_key");
  if (apiKey !== process.env.API_KEY) {
    console.error("Invalid API key provided");
    return NextResponse.json(
      { success: false, message: "Invalid API Key" },
      { status: 403 }
    );
  }

  const redis = new IORedis(process.env.REDIS_URL as string);

  try {
    const [accessToken, refreshToken] = await redis.mget(
      "spotify:access_token",
      "spotify:refresh_token"
    );

    let token: string;

    if (!accessToken && refreshToken) {
      console.log("Access token expired, refreshing with refresh token");
      // Access token expired, create new access token
      const response = await fetch(
        "https://accounts.spotify.com/api/token?" +
          new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshToken,
          }).toString(),
        {
          method: "POST",
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(
                process.env.SPOTIFY_CLIENT_ID +
                  ":" +
                  process.env.SPOTIFY_CLIENT_SECRET
              ).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const data = await response.json();

      const { access_token, refresh_token, expires_in } = data;

      await redis.set("spotify:access_token", access_token, "EX", expires_in);
      token = access_token;

      if (refresh_token) {
        await redis.set("spotify:refresh_token", refresh_token);
      }
    } else if (accessToken) {
      console.log("Using existing access token");
      // When access token is valid
      token = accessToken;
    } else {
      console.error("No access token or refresh token found");
      // No access or refresh token present in redis
      throw new Error("No access token/refresh token found");
    }

    console.log("Fetching top tracks");
    const { topTracks = [] } = await getTopTracks(token);

    const data = {
      success: true,
      topTracks: topTracks || [],
    };
    await redis.quit();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Spotify API error:", error);
    await redis.quit();

    return NextResponse.json(
      { success: false, message: "Some error occurred, check logs." },
      { status: 500 }
    );
  }
}

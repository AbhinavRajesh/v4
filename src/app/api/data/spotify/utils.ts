/* eslint-disable @typescript-eslint/no-explicit-any */
import { TopTracks } from "@/components/About/Spotify/utils";
import { stringify } from "querystring";

const getTopTracks = async (
  accessToken: string
): Promise<{ topTracks: TopTracks[] }> => {
  const endpoint = "https://api.spotify.com/v1/me/top/tracks?";
  try {
    const response = await fetch(
      endpoint + stringify({ time_range: "short_term", limit: "12" }),
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    const tracks = data?.items;
    const topTracks: TopTracks[] = tracks?.map((track: any) => {
      const artists = track?.artists?.map((artist: any) => ({
        name: artist?.name,
      }));
      return {
        artists,
        name: track?.name,
        url: track?.external_urls?.spotify,
        imageUrl: track?.album?.images?.[0]?.url ?? "",
        explicit: track?.explicit ?? false,
      } as TopTracks;
    });
    return {
      topTracks: topTracks || [],
    };
  } catch (error: any) {
    console.log("ERROR getTopTracks >> ", error);
    return {
      topTracks: [],
    };
  }
};

export { getTopTracks };

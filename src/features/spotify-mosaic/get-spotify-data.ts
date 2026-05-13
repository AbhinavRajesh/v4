import type { TopTracks } from "@/app/api/spotify/utils";

export type { TopTracks };

const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.abhinavrajesh.com";

type SpotifyData = { topTracks: TopTracks[] };

export const getSpotifyData = async (): Promise<SpotifyData> => {
  try {
    const response = await fetch(`${APP_URL}/api/spotify`, {
      headers: { api_key: process.env.API_KEY as string },
      next: { revalidate: 60 * 60 * 12 },
    });
    const data = await response.json();
    return { topTracks: data?.topTracks ?? [] };
  } catch (error) {
    console.error("Failed to fetch Spotify data:", error);
    return { topTracks: [] };
  }
};

export const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.abhinavrajesh.com";

type SpotifyData = {
  topTracks: TopTracks[];
};

export type TopTracks = {
  name: string;
  url: string;
  imageUrl: string;
  artists: { name: string }[];
  explicit?: boolean;
};

export const getSpotifyData = async (): Promise<SpotifyData> => {
  try {
    const response = await fetch(`${APP_URL}/api/data/spotify`, {
      headers: {
        api_key: process.env.API_KEY as string,
      },
      next: {
        // 12 hours
        revalidate: 60 * 60 * 12,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { topTracks: [] };
  }
};

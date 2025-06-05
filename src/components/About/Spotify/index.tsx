import { getSpotifyData } from "@/components/About/Spotify/utils";
import SpotifyCard from "@/components/About/Spotify/Card";

const Spotify = async () => {
  const { topTracks = [] } = await getSpotifyData();

  return (
    <div className="flex flex-col gap-4 font-sans">
      <h3 className="text-heading text-foreground font-bold font-mono">
        Spotify
      </h3>
      <p className="text-body text-foreground">
        Music&apos;s a big part of my day—whether I&apos;m coding, writing, or
        just chilling. This is a live snapshot of what I&apos;ve been listening
        to over the past few months.
      </p>
      <div className="flex flex-col pt-4">
        {topTracks?.map((track) => (
          <SpotifyCard key={track.name} track={track} />
        ))}
      </div>
    </div>
  );
};

export default Spotify;

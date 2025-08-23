import { getSpotifyData } from "@/components/About/Spotify/utils";
import SpotifyCard from "@/components/About/Spotify/Card";
import BorderWrapper from "@/components/common/BorderWrapper";

const Spotify = async () => {
  const { topTracks = [] } = await getSpotifyData();

  return (
    <div className="flex flex-col font-sans">
      <BorderWrapper padding="px-4" borderY="border-t">
        <h3 className="text-heading text-foreground font-bold font-mono">
          Spotify
        </h3>
      </BorderWrapper>
      <BorderWrapper>
        <p className="text-body text-foreground">
          Music&apos;s a big part of my day—whether I&apos;m coding, writing, or
          just chilling. This is a live snapshot of what I&apos;ve been
          listening to over the past few months.
        </p>
      </BorderWrapper>
      <BorderWrapper padding="" borderY="border-b">
        <div className="flex flex-col">
          {topTracks?.map((track, index) => (
            <SpotifyCard
              key={track.name}
              track={track}
              hasBorder={index !== topTracks.length - 1}
            />
          ))}
        </div>
      </BorderWrapper>
    </div>
  );
};

export default Spotify;

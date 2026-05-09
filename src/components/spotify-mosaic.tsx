import Image from "next/image";
import { getSpotifyData, type TopTracks } from "@/lib/spotify";

const dedupeByAlbum = (tracks: TopTracks[]): TopTracks[] => {
  const seen = new Set<string>();
  const out: TopTracks[] = [];
  for (const track of tracks) {
    if (!track.imageUrl || seen.has(track.imageUrl)) continue;
    seen.add(track.imageUrl);
    out.push(track);
  }
  return out;
};

const SpotifyMosaic = async () => {
  const { topTracks } = await getSpotifyData();
  const tiles = dedupeByAlbum(topTracks);

  console.log({ topTracks, tiles });

  if (tiles.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
        Recently on repeat
      </h2>
      <div className="grid grid-cols-3 gap-1 sm:grid-cols-4">
        {tiles.map((track) => (
          <a
            key={track.url}
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            aria-label={`${track.name} — ${track.artists.map((a) => a.name).join(", ")}`}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={track.imageUrl}
                alt=""
                fill
                sizes="(max-width: 640px) 33vw, 160px"
                className="object-cover grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-full bg-background/95 px-2 py-1.5 font-mono text-[10px] leading-tight text-foreground transition-transform duration-200 group-hover:translate-y-0 sm:block">
                <div className="truncate font-medium">{track.name}</div>
                <div className="truncate text-muted">
                  {track.artists.map((a) => a.name).join(", ")}
                </div>
              </div>
            </div>
            <div className="mt-1.5 font-mono text-[10px] leading-tight sm:hidden">
              <div className="truncate text-foreground">{track.name}</div>
              <div className="truncate text-muted">
                {track.artists.map((a) => a.name).join(", ")}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SpotifyMosaic;

import Image from "next/image";
import { TopTracks } from "./utils";
import Link from "next/link";

const ExplicitIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="inline -mt-[3px] text-gray-300"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path>
  </svg>
);

const SpotifyCard = ({ track }: { track: TopTracks }) => {
  return (
    <Link
      href={track.url}
      target="_blank"
      className="flex flex-row gap-2 border-t border-secondary/20 py-2 hover:bg-secondary/10 transition-all duration-150 ease-in-out cursor-pointer"
    >
      <Image
        src={track.imageUrl}
        alt={track.name}
        width={40}
        height={40}
        className="rounded-xs h-10 w-10"
      />
      <div className="flex flex-col">
        <div className="text-sm font-medium">
          {track.explicit && <ExplicitIcon />} {track.name}
        </div>
        <div className="text-xs text-gray-500">
          {track.artists.map((artist) => artist.name).join(", ")}
        </div>
      </div>
    </Link>
  );
};

export default SpotifyCard;

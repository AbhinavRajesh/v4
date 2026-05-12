import AccentLink from "@/components/ui/accent-link";

type Props = {
  title: string;
  tagline?: string;
  github_repo?: string;
  live_url?: string;
};

const displayUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const ProjectHeader = ({ title, tagline, github_repo, live_url }: Props) => (
  <>
    <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
    {tagline && <p className="text-sm text-muted">{tagline}</p>}
    {(github_repo || live_url) && (
      <p className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs">
        {github_repo && (
          <AccentLink href={`https://github.com/${github_repo}`}>
            github.com/{github_repo}
          </AccentLink>
        )}
        {live_url && (
          <AccentLink href={live_url}>{displayUrl(live_url)}</AccentLink>
        )}
      </p>
    )}
  </>
);

export default ProjectHeader;

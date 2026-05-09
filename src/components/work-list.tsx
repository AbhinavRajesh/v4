import { ChevronDown } from "lucide-react";
import AccentLink from "@/components/accent-link";

export type WorkEntry = {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  tags?: string[];
  summary: React.ReactNode;
  bullets?: React.ReactNode[];
  stack?: string[];
};

const WorkItem = ({
  entry,
  defaultOpen,
}: {
  entry: WorkEntry;
  defaultOpen?: boolean;
}) => {
  return (
    <li className="border-b border-subtle last:border-b-0">
      <details open={defaultOpen} name="experience" className="group">
        <summary className="grid cursor-pointer list-none select-none grid-cols-[1fr_auto] items-baseline gap-x-3 gap-y-1 py-3 [&::-webkit-details-marker]:hidden sm:grid-cols-[auto_1fr_auto]">
          <span className="flex min-w-0 items-baseline gap-2">
            <ChevronDown className="h-3 w-3 shrink-0 self-center text-muted transition-transform duration-[280ms] ease-out -rotate-90 group-open:rotate-0" />
            {entry.companyUrl ? (
              <AccentLink
                href={entry.companyUrl}
                className="font-medium text-foreground no-underline hover:underline"
              >
                {entry.company}
              </AccentLink>
            ) : (
              <span className="font-medium text-foreground">
                {entry.company}
              </span>
            )}
          </span>
          <span className="justify-self-end font-mono text-xs text-muted sm:order-last">
            {entry.period}
          </span>
          <div className="col-span-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 pl-5 sm:col-span-1 sm:pl-0">
            <span className="text-sm text-muted">{entry.role}</span>
            {entry.tags?.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-subtle px-1.5 py-px font-mono text-[10px] uppercase tracking-wider text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </summary>

        <div className="space-y-3 pb-5 pl-5 text-sm leading-6 text-muted">
          <p>{entry.summary}</p>
          {entry.bullets && entry.bullets.length > 0 && (
            <ul className="list-disc space-y-1.5 pl-5 marker:text-subtle">
              {entry.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {entry.stack && entry.stack.length > 0 && (
            <div className="flex flex-wrap gap-x-1.5 gap-y-1 pt-1 font-mono text-[11px] text-muted">
              {entry.stack.map((s, i, arr) => (
                <span key={s}>
                  {s}
                  {i < arr.length - 1 && (
                    <span className="ml-1.5 text-subtle">·</span>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>
      </details>
    </li>
  );
};

const WorkList = ({ entries }: { entries: WorkEntry[] }) => {
  return (
    <ul className="border-t border-subtle">
      {entries.map((entry, i) => (
        <WorkItem
          key={`${entry.company}-${entry.period}`}
          entry={entry}
          defaultOpen={i === 1}
        />
      ))}
    </ul>
  );
};

export default WorkList;

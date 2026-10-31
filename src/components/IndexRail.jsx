import { SECTION_LIST } from "../data/content";
import { useScrollProgress } from "../hooks/useSectionTracking";

/**
 * The channel selector: a fixed left instrument rail with tick marks,
 * the active section index and a scroll-driven progress column.
 */
export default function IndexRail({ active }) {
  const progress = useScrollProgress();
  const current = SECTION_LIST.find((l) => l.id === active) || SECTION_LIST[0];

  return (
    <aside
      aria-hidden="true"
      className="fixed top-0 left-0  z-30 hidden h-screen w-18 flex-col items-center justify-between border-r py-6 lg:flex"
      style={{ borderColor: "var(--line)", background: "var(--surface-2)" }}
    >
      {/* tick ladder */}
      <div className="flex flex-col items-center gap-3 pt-24">
        {SECTION_LIST.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            tabIndex={-1}
            className="group flex h-4 w-full items-center justify-center"
            title={link.label}
          >
            <span
              className="block h-px transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:w-8"
              style={{
                width: link.id === active ? "26px" : "12px",
                background: link.id === active ? "var(--accent)" : "var(--line-strong)",
              }}
            />
          </a>
        ))}
      </div>

      {/* rotated channel name */}
      <div className="flex flex-1 items-center justify-center">
        <span
          className="microcaps whitespace-nowrap"
          style={{
            writingMode: "vertical-rl",
            color: "var(--muted)",
            transform: "rotate(180deg)",
          }}
        >
          {current.label}
        </span>
      </div>

      {/* readout */}
      <div className="flex w-full flex-col items-center gap-3">
        <div className="relative h-24 w-px" style={{ background: "var(--line)" }}>
          <div
            className="absolute top-0 left-0 w-px"
            style={{
              height: `${progress * 100}%`,
              background: "linear-gradient(180deg, var(--accent), var(--accent-2))",
            }}
          />
        </div>
        <span className="microcaps tnum text-[13px]" style={{ color: "var(--accent)" }}>
          {current.index}
        </span>
      </div>
    </aside>
  );
}

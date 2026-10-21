// ─────────────────────────────────────────────────────────────────────────
// GRAPHICS — Function-style clinical clarity in the NewStartMD cool palette.
// Guide §7: white/mist grounds, 1px hairlines, ONE accent per chart, mono
// numerals, no 3D, no drop-shadowed charts. Gold appears only as the
// "optimal/target" marker. These render SAMPLE data only — every usage must
// carry a "Sample data" label and the "Individual results vary" footnote
// (guide §7.3 + §10). Not a medical claim.
// ─────────────────────────────────────────────────────────────────────────

type Status = "in" | "monitor" | "out";

const STATUS: Record<Status, { label: string; cls: string; dot: string }> = {
  in: { label: "In range", cls: "text-success-600", dot: "bg-success-600" },
  monitor: { label: "Monitor", cls: "text-warning-600", dot: "bg-warning-600" },
  out: { label: "Out of range", cls: "text-danger-600", dot: "bg-danger-600" },
};

function pct(value: number, min: number, max: number) {
  return Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
}

/**
 * BiomarkerRangeBar — a single segmented range with a value marker and an
 * outlined "optimal" zone (gold bracket). Guide §7.2.
 */
export function BiomarkerRangeBar({
  name,
  unit,
  value,
  min,
  max,
  optimalMin,
  optimalMax,
  status = "in",
}: {
  name: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  optimalMin: number;
  optimalMax: number;
  status?: Status;
}) {
  const left = pct(value, min, max);
  const optLeft = pct(optimalMin, min, max);
  const optWidth = pct(optimalMax, min, max) - optLeft;
  const s = STATUS[status];

  return (
    <div className="rounded-md border border-line-200 bg-white p-5 shadow-xs">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <span className="text-base font-semibold text-navy-950">{name}</span>
          <span className="ml-2 text-xs text-slate-500">{unit}</span>
        </div>
        <span className="font-mono text-2xl font-medium tabular-nums text-navy-950">{value}</span>
      </div>

      {/* Optimal bracket (gold) */}
      <div className="relative mt-5 h-5">
        <div
          className="absolute -top-0.5 h-2 border-x border-t border-gold-500"
          style={{ left: `${optLeft}%`, width: `${optWidth}%` }}
          aria-hidden
        />
        <span
          className="absolute -top-5 -translate-x-1/2 font-mono text-[0.6rem] uppercase tracking-wide text-gold-700"
          style={{ left: `${optLeft + optWidth / 2}%` }}
        >
          Optimal
        </span>
        {/* Track */}
        <div className="absolute top-2 h-2 w-full overflow-hidden rounded-full bg-sky-100">
          <div
            className="absolute inset-y-0 rounded-full"
            style={{
              left: `${optLeft}%`,
              width: `${optWidth}%`,
              backgroundImage: "linear-gradient(90deg,#1F4FD1 0%,#3D86FF 100%)",
            }}
          />
        </div>
        {/* Marker */}
        <div
          className="absolute top-2 h-2 w-2 -translate-x-1/2 rounded-full border-2 border-navy-950 bg-white shadow-xs"
          style={{ left: `${left}%` }}
          aria-hidden
        />
      </div>

      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium">
        <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden />
        <span className={s.cls}>{s.label}</span>
      </div>
    </div>
  );
}

/**
 * ProgressRing — a single value ring with a royal→electric stroke and a small
 * gold dot at the leading cap (the "sunrise" motif). Guide §7.4. Sample data
 * only on marketing pages.
 */
export function ProgressRing({
  value,
  label,
  size = 120,
}: {
  value: number; // 0–100
  label: string;
  size?: number;
}) {
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const dash = (pct / 100) * c;
  const cx = size / 2;
  // Leading-cap dot position (top origin, clockwise).
  const angle = (pct / 100) * 2 * Math.PI - Math.PI / 2;
  const dotX = cx + r * Math.cos(angle);
  const dotY = cx + r * Math.sin(angle);
  const gid = `ring-${label.replace(/\W/g, "")}`;

  return (
    <div className="flex flex-col items-center text-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${label}: ${pct}%`}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1F4FD1" />
            <stop offset="100%" stopColor="#3D86FF" />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cx} r={r} fill="none" stroke="#DCE3ED" strokeWidth={stroke} />
        <circle
          cx={cx}
          cy={cx}
          r={r}
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
          transform={`rotate(-90 ${cx} ${cx})`}
        />
        <circle cx={dotX} cy={dotY} r={stroke / 2.2} fill="#C9A43F" />
        <text x={cx} y={cx} textAnchor="middle" dominantBaseline="central" className="fill-navy-950 font-mono" style={{ fontSize: size * 0.22, fontWeight: 500 }}>
          {pct}%
        </text>
      </svg>
      <span className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">{label}</span>
    </div>
  );
}

/**
 * TrendSparkline — a tiny multi-point trend with an optimal band, drawn as an
 * inline SVG. Guide §7.3 (marketing hand-rolled SVG variant). Sample data only.
 */
export function TrendSparkline({
  points,
  label,
  unit,
}: {
  points: number[];
  label: string;
  unit: string;
}) {
  const w = 280;
  const h = 72;
  const pad = 8;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const step = (w - pad * 2) / (points.length - 1);
  const coords = points.map((p, i) => {
    const x = pad + i * step;
    const y = pad + (1 - (p - min) / span) * (h - pad * 2);
    return [x, y] as const;
  });
  const path = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const last = coords[coords.length - 1];

  return (
    <div className="rounded-md border border-line-200 bg-white p-5 shadow-xs">
      <div className="flex items-baseline justify-between">
        <span className="text-base font-semibold text-navy-950">{label}</span>
        <span className="font-mono text-sm tabular-nums text-slate-500">
          {points[points.length - 1]} {unit}
        </span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full" role="img" aria-label={`${label} trend (sample data)`}>
        <line x1={pad} y1={h / 2} x2={w - pad} y2={h / 2} stroke="#DCE3ED" strokeWidth="1" />
        <path d={path} fill="none" stroke="#3D86FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {coords.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#fff" stroke="#3D86FF" strokeWidth="1.5" />
        ))}
        <circle cx={last[0]} cy={last[1]} r="4" fill="#0A1A33" />
      </svg>
    </div>
  );
}

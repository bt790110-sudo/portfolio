/**
 * A quiet network topology graphic: nodes and edges, echoing the
 * networking/cybersecurity side of the subject's work. Positions are
 * fixed (not random) so server and client render identically.
 */
const nodes = [
  { x: 40, y: 60 }, { x: 160, y: 30 }, { x: 260, y: 90 },
  { x: 90, y: 160 }, { x: 220, y: 190 }, { x: 320, y: 150 },
  { x: 150, y: 250 }, { x: 300, y: 260 },
];

const edges = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5],
  [3, 4], [4, 5], [3, 6], [4, 7], [5, 7], [6, 7],
];

export default function NetworkGraphic({ className = "" }) {
  return (
    <svg
      viewBox="0 0 360 300"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g className="animate-drift" opacity="0.7">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={i % 3 === 0 ? 5 : 3.5}
            fill="currentColor"
            opacity={i % 3 === 0 ? 0.9 : 0.5}
          />
        ))}
      </g>
    </svg>
  );
}

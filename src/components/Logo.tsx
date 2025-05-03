export default function Logo() {
  return (
    <svg
      width="160"
      height="32"
      viewBox="0 0 160 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > 
      {/* Text */}
      <text
        x="0"
        y="21"
        fontSize="18"
        fontWeight="bold"
        fill="#1F2937"
        fontFamily="Arial, sans-serif"
      >
        Care
        <tspan fill="#3B82F6">Match</tspan>
        <tspan fill="#3B82F6" x="94">
          AI
        </tspan>
      </text>
    </svg>
  );
}

export default function Arrow({ direction = "diagonal" }) {
  return (
    <svg
      className="arrow-icon"
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d={
          direction === "down"
            ? "M10 3v14m-5-5 5 5 5-5"
            : direction === "horizontal"
              ? "M2 10h16M6 6l-4 4 4 4m8-8 4 4-4 4"
              : "M4 16 16 4M5 4h11v11"
        }
      />
    </svg>
  );
}

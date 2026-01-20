export default function Badge({ text, color = "blue" }) {
  const colors = {
    blue: "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white",
    green: "bg-gradient-to-r from-green-500 to-green-600 text-white",
    red: "bg-gradient-to-r from-red-500 to-red-600 text-white",
    gray: "bg-gray-500 text-white",
  };

  return (
    <span
      className={`
        px-3 py-1.5
        rounded-lg
        text-xs md:text-sm
        font-semibold
        shadow-sm
        ${colors[color]}
        transition-all
        whitespace-nowrap
      `}
    >
      {text}
    </span>
  );
}

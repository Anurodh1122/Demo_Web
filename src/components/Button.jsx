export default function Button({ children, variant = "primary", onClick }) {
  const base = "px-6 py-3 rounded-md font-semibold transition-all duration-200";
  const styles = {
    primary: "bg-indigo-600 text-white hover:bg-blue-700 shadow-lg",
    secondary: "bg-white text-blue-600 hover:bg-gray-100 shadow-md border border-blue-500",
  };


  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

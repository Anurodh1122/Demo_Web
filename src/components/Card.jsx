export default function Card({ title, description, icon, children, className, style }) {
  return (
    <div className={`relative bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: style?.backgroundColor || "#1e293b", // fallback color
      }}
    >
      {icon && <div className="mb-4 text-3xl">{icon}</div>}
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {description && <p className="text-slate-300 mb-4">{description}</p>}
      {children}
    </div>
  );
}

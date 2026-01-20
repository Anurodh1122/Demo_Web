import { useState, useEffect, useRef } from "react";

function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [started]);

   useEffect(() => {
    if (!started) return;

    let current = 0;
    const steps = 50; // number of increments to reach target
    const increment = Math.ceil(target / steps);
    const intervalTime = Math.max(Math.floor(duration / steps), 10);

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [started, target, duration]);

  return <span ref={ref} className="text-3xl md:text-4xl font-bold">{count}{suffix}</span>;
}

export default function StatsCard() {
  const stats = [
    { label: "Students Supported", value: 130, suffix: "k+" },
    { label: "Partner Universities", value: 150, suffix: "+" },
    { label: "Successful Applications", value: 243, suffix: "k+" },
    { label: "Years of Experience", value: 12, suffix: "+" },
    { label: "Active Agents & Affiliates", value: 55, suffix: "+" },
  ];

  return (
    <section className="py-20 bg-slate-700 flex justify-center px-6 w-full">
      <div className="bg-slate-800 text-white rounded-2xl shadow-xl p-10 w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Our Impact</h2>
          <p className="text-xl text-slate-300 mt-2">Connecting Students, Universities & Partners</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((s, idx) => (
            <div key={idx}>
              <Counter target={s.value} suffix={s.suffix} />
              <p className="mt-2 text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

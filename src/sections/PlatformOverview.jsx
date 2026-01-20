import { useEffect } from "react";
import Card from "../components/Card";

export default function PlatformOverview() {
  useEffect(() => {
    // Animate cards as they enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".platform-card").forEach((card) => observer.observe(card));
  }, []);

  return (
    <section id="platform" className="py-20 bg-slate-800 text-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-12">Platform Overview</h2>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 mb-16">
        <Card
          className="platform-card"
          icon={<img src="/icons/corporate.svg" className="w-12 h-12" />}
          title="Corporate Website"
          description="High-performance corporate site design."
        />
        <Card
          className="platform-card"
          icon={<img src="/icons/campus.svg" className="w-12 h-12" />}
          title="TSM Campus"
          description="Education & mobility sub-portal."
        />
        <Card
          className="platform-card"
          icon={<img src="/icons/partner.svg" className="w-12 h-12" />}
          title="Partner Ecosystem"
          description="Agents, affiliates, and partners."
        />
      </div>
    </section>
  );
}

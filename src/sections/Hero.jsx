import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SCROLL_LENGTH = 600;
  const t = Math.min(scrollY / SCROLL_LENGTH, 1);

  const PHASE1_SCROLL = 120; // px
  const PHASE2_SCROLL = 200; // px
  const PHASE3_SCROLL = 800; // px

  const phase1Progress = Math.min(scrollY / PHASE1_SCROLL, 1);
  const phase2Progress = scrollY < PHASE1_SCROLL ? 0 : Math.min((scrollY - PHASE1_SCROLL) / PHASE2_SCROLL, 1);
  const phase3Progress = scrollY < PHASE1_SCROLL + PHASE2_SCROLL
    ? 0
    : Math.min((scrollY - PHASE1_SCROLL - PHASE2_SCROLL) / PHASE3_SCROLL, 1);


  const steps = [
    { title: "Register", desc: "Create your profile and verify identity", img: "/register.jpg" },
    { title: "Choose Program", desc: "Select internship or mobility track", img: "/choose.jpg" },
    { title: "Submit Documents", desc: "Upload and validate documents", img: "/submit.jpg" },
    { title: "Track & Confirm", desc: "Monitor progress and confirmations", img: "/track.jpg" },
  ];

  // --- Preload step images ---
  useEffect(() => {
    steps.forEach(step => {
      const img = new Image();
      img.src = step.img;
    });
  }, []);

  const activeStep = Math.min(
    steps.length - 1,
    Math.floor(phase3Progress * steps.length)
  );

  // Box width grows from 40vw → 90vw
  const boxWidth = `${40 + phase2Progress * 50}vw`;

  return (
    <section
      ref={heroRef}
      className="relative h-[260vh] bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="sticky top-0 h-screen relative">
        {/* Hero text */}
        <div
          style={{
            position: "absolute",
            left: "2rem",
            top: "50%",
            transform: `translate(-${phase1Progress * 600}px, -50%)`,
            opacity: 1 - phase1Progress,
            transition: "all 0.3s ease",
            width: "50%",
          }}
        >
          <h1 className="text-6xl font-extrabold mb-6">Talent Squad Europe</h1>
          <p className="text-xl text-slate-300 max-w-lg">
            Workforce, Mobility & Education Platforms for Students, Universities, and Employers
          </p>
        </div>

        {/* Right box */}
        <div
          style={{
            position: "absolute",
            right: "48px", // distance from right edge
            top: "50%",
            transform: "translateY(-50%)",
            width: boxWidth,
            transformOrigin: "right",
            transition: "width 0.6s ease,opacity 0.6s ease",
          }}
        >
          {/* Summary view */}
          {phase2Progress < 1 && (
            <div style={{ opacity: 1 - phase2Progress, transition: "opacity 0.3s" }}>
              <div className="bg-slate-800 rounded-2xl p-10">
                <h2 className="text-2xl font-bold mb-6 text-textDark">
                  Complete the process — easy and fast
                </h2>
                <ul className="space-y-4 text-lg text-textSubtle">
                  {steps.map((s, i) => (
                    <li key={i}>{i + 1}. {s.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Step by step detailed view */}
          {phase3Progress > 0 && (
            <div className="relative h-[600px]">
              {steps.map((step, i) => {
                const visible = i === activeStep;
                return (
                  <div
                    key={i}
                    className="absolute inset-0 flex items-center transition-all duration-500"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: `translateY(${visible ? 0 : 40}px)`,
                      pointerEvents: visible ? "auto" : "none",
                    }}
                  >
                    {/* Text on the left */}
                      <div className="flex-1 max-w-2xl px-8">
                        <h3 className="text-4xl font-bold mb-4">{step.title}</h3>
                        <p className="text-xl text-slate-300">{step.desc}</p>
                      </div>

                      {/* Image on the right */}
                      <img
                        src={step.img}
                        alt={step.title}
                        className="rounded-2xl h-full flex-1 object-cover max-w-lg"
                      />
                  
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

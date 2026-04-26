import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { STEPS } from "@/lib/data";

export default function HowItWorksSection() {
  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#100800" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #E8A020 0, #E8A020 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-3"
          style={{ color: "#E8A020" }}
        >
          ✦ How It Works
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          From fridge to fork
          <br />
          <span style={{ color: "#E8A020" }}>in 3 steps.</span>
        </h2>
        <p className="text-stone-500 font-light text-base mb-16 max-w-md">
          No recipe books. No wasted trips to the store. Just cook what you
          already have.
        </p>

        <div className="relative">
          {/* Vertical connecting line */}
          <div
            className="absolute left-[2.35rem] top-8 bottom-8 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, #C41E3A, #E8A020, #C41E3A)",
            }}
          />

          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <div key={i} className="relative flex gap-8 group">
                <div
                  className="w-[4.75rem] h-[4.75rem] rounded-2xl flex flex-col items-center justify-center shrink-0 relative z-10 border-2 transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: i === 0 ? "#C41E3A" : "#1A0A00",
                    borderColor: i === 0 ? "#C41E3A" : "#3D2010",
                  }}
                >
                  <span className="text-xl">{s.icon}</span>
                  <span
                    className="text-[10px] font-bold mt-0.5"
                    style={{
                      color: i === 0 ? "rgba(255,255,255,0.7)" : "#5A3A20",
                    }}
                  >
                    {s.num}
                  </span>
                </div>

                <div
                  className="flex-1 rounded-2xl p-6 border transition-all duration-300 group-hover:border-opacity-60"
                  style={{ backgroundColor: "#1A0A00", borderColor: "#2D1500" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {s.title}
                      </h3>
                      <p className="text-stone-400 text-sm leading-relaxed font-light mb-3">
                        {s.desc}
                      </p>
                      <p className="text-stone-500 text-xs leading-relaxed italic">
                        {s.detail}
                      </p>
                    </div>
                    <div
                      className="shrink-0 flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-xl whitespace-nowrap self-start"
                      style={{
                        backgroundColor: "rgba(232,160,32,0.12)",
                        color: "#E8A020",
                      }}
                    >
                      <Check className="w-3.5 h-3.5" />
                      {s.proof}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/dashboard">
            <button
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "#C41E3A", color: "white" }}
            >
              Try it now — it's free <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

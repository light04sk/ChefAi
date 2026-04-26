import { Lightbulb, Lock, RefreshCw } from "lucide-react";
import { P, Pill, ProGate } from "./recipe-ui";

export function ChefsTipsCard({ tips, isPro }) {
  if (!tips || tips.length === 0) return null;
  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        backgroundColor: P.dark,
        border: `1px solid ${P.dark2}`,
        boxShadow: "0 2px 12px rgba(192,57,43,0.1)",
      }}
    >
      <div
        className="px-7 pt-7 pb-5 flex items-center gap-3"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: "rgba(192,57,43,0.2)",
            border: "1px solid rgba(192,57,43,0.3)",
          }}
        >
          <Lightbulb className="w-5 h-5" style={{ color: P.orange }} />
        </div>
        <h2 className="text-lg font-black" style={{ color: "#fff" }}>
          Chef&apos;s Secrets
        </h2>
        {!isPro && (
          <span className="ml-auto">
            <Pill>
              <Lock className="w-3 h-3" /> Pro
            </Pill>
          </span>
        )}
      </div>

      <div className="p-7">
        <ProGate isPro={isPro} label="Chef's tips are a Pro feature">
          <ul className="space-y-4">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black"
                  style={{ background: P.grad, color: "#fff" }}
                >
                  {i + 1}
                </div>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "#c9a87c" }}
                >
                  {tip}
                </p>
              </li>
            ))}
          </ul>
        </ProGate>
      </div>
    </div>
  );
}

export function SmartSwapsCard({ substitutions, isPro }) {
  if (!substitutions || substitutions.length === 0) return null;
  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        backgroundColor: P.white,
        border: `1px solid ${P.border}`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="px-7 pt-7 pb-5 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${P.border}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: P.cream }}
          >
            <RefreshCw className="w-5 h-5" style={{ color: P.crimson }} />
          </div>
          <div>
            <h2 className="text-lg font-black" style={{ color: P.dark }}>
              Smart Swaps
            </h2>
            <p className="text-xs font-light" style={{ color: P.brown }}>
              Missing something? Try these instead.
            </p>
          </div>
        </div>
        {!isPro && (
          <Pill>
            <Lock className="w-3 h-3" /> Pro
          </Pill>
        )}
      </div>

      <div className="p-7">
        <ProGate isPro={isPro} label="Ingredient swaps are a Pro feature">
          <div className="space-y-5">
            {substitutions.map((sub, i) => (
              <div
                key={i}
                className="pb-5 last:pb-0"
                style={{
                  borderBottom:
                    i < substitutions.length - 1
                      ? `1px solid ${P.border}`
                      : "none",
                }}
              >
                <p className="text-sm font-bold mb-3" style={{ color: P.dark }}>
                  Instead of{" "}
                  <span style={{ color: P.crimson }}>{sub.original}</span>:
                </p>
                <div className="flex flex-wrap gap-2">
                  {sub.alternatives.map((alt, j) => (
                    <span
                      key={j}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: P.bg,
                        color: P.brown,
                        border: `1px solid ${P.border}`,
                      }}
                    >
                      {alt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ProGate>
      </div>
    </div>
  );
}

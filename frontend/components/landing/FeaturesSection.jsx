import { Camera, Search } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "#C41E3A" }}
          >
            ✦ Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
            Your smart kitchen, sorted.
          </h2>
          <p className="text-stone-500 text-lg font-light max-w-lg">
            Built for home cooks who want to eat well without overcomplicating
            things.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {/* Hero feature — Scan Your Pantry */}
          <div
            className="md:col-span-3 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden group cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #1A0A00 0%, #2D1500 100%)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 blur-2xl pointer-events-none"
              style={{ background: "#E8A020" }}
            />
            <div>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
                style={{
                  backgroundColor: "rgba(196,30,58,0.25)",
                  color: "#F5C27A",
                }}
              >
                📸 10 scans/mo free
              </span>
              <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                Scan Your Pantry
                <br />
                <span style={{ color: "#E8A020" }}>in seconds.</span>
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed max-w-sm font-light">
                Point your camera at your fridge or ingredients. AI identifies
                everything instantly — no typing, no guessing. It just works.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(232,160,32,0.2)" }}
              >
                <Camera className="w-4 h-4" style={{ color: "#E8A020" }} />
              </div>
              <span className="text-stone-400 text-xs">
                Powered by vision AI
              </span>
            </div>
            <span className="absolute bottom-4 right-8 text-[120px] font-black opacity-5 text-white leading-none select-none">
              1
            </span>
          </div>

          {/* Right stack */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {/* AI Meal Suggestions */}
            <div
              className="rounded-3xl p-6 flex flex-col justify-between flex-1 relative overflow-hidden group cursor-pointer border"
              style={{ backgroundColor: "#FAF8F3", borderColor: "#F0E8D8" }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl">🍳</span>
                  <span
                    className="text-xs font-mono px-2 py-1 rounded-md"
                    style={{ backgroundColor: "#FFF5E6", color: "#9A5A1A" }}
                  >
                    5 meals/mo free
                  </span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-red-800 transition-colors">
                  AI Meal Suggestions
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed font-light">
                  Gourmet ideas built around what you already have. Zero waste,
                  maximum flavour.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#C41E3A" }}
                />
                <span className="text-xs text-stone-400">Live AI matching</span>
              </div>
            </div>

            {/* Digital Cookbook */}
            <div
              className="rounded-3xl p-6 flex flex-col justify-between flex-1 relative overflow-hidden group cursor-pointer border"
              style={{
                background: "linear-gradient(135deg, #FFF5E6, #FAF0D7)",
                borderColor: "#F5C27A",
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl">📖</span>
                  <span
                    className="text-xs font-mono px-2 py-1 rounded-md bg-white/70"
                    style={{ color: "#9A5A1A" }}
                  >
                    3 saves/mo free
                  </span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Digital Cookbook
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  Save favourites, export as PDF, share with family. Your
                  library, always at hand.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom full-width — Search Any Dish */}
          <div
            className="md:col-span-5 rounded-3xl p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden border"
            style={{
              background: "linear-gradient(90deg, #FAF8F3, #FFF5E6)",
              borderColor: "#F0E8D8",
            }}
          >
            <div className="flex items-start gap-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#C41E3A" }}
              >
                <Search className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-stone-900">
                    Search Any Dish
                  </h3>
                  <span
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: "#C41E3A", color: "white" }}
                  >
                    Unlimited
                  </span>
                </div>
                <p className="text-stone-500 text-sm font-light max-w-xl">
                  Find any recipe by cuisine, cook time, or dietary needs.
                  Filter until you land on exactly what you want. Always free,
                  always fast.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {["Indian", "Vegan", "Quick"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border bg-white text-stone-600 border-stone-200"
                >
                  {tag}
                </span>
              ))}
              <span className="text-stone-400 text-xs">+ more filters</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

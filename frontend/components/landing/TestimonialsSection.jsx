import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 px-4 border-t border-stone-100"
      style={{ backgroundColor: "#FAF8F3" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "#C41E3A" }}
          >
            ✦ Loved by Cooks
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
            Real cooks. Real meals.
          </h2>
          <p className="text-stone-500 font-light text-lg max-w-md">
            Join thousands of home cooks who've stopped wasting food and started
            cooking better.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:shadow-md hover:border-amber-300 transition-all duration-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-5 font-light italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs bg-gradient-to-br from-red-700 to-amber-400">
                  {t.initials}
                </div>
                <div>
                  <p className="text-stone-900 font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-stone-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

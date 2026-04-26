import Link from "next/link";
import { CUISINES } from "@/lib/data";

export default function CuisinesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-3"
          style={{ color: "#C41E3A" }}
        >
          ✦ World Cuisines
        </p>
        <h2 className="text-4xl font-bold text-stone-900 mb-3">
          Explore by origin
        </h2>
        <p className="text-stone-500 font-light mb-10 max-w-md">
          Curated recipes from 35+ countries. Find your next favourite dish.
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
          {CUISINES.map((c, i) => (
            <Link
              href={`/recipes/cuisine/${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={i}
            >
              <div className="bg-white border border-stone-200 rounded-xl p-3 text-center transition-all duration-150 cursor-pointer group hover:shadow-md hover:border-red-700 hover:bg-orange-50">
                <span className="text-2xl block mb-1.5">{c.flag}</span>
                <span className="text-xs font-medium text-stone-600 group-hover:text-red-800 transition-colors">
                  {c.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

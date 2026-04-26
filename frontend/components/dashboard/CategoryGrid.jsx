import Link from "next/link";
import { getCategoryEmoji } from "@/lib/data";

export default function CategoryGrid({ categories }) {
  return (
    <section className="mb-24">
      <div className="mb-10">
        <p
          className="text-xs uppercase tracking-widest mb-2 font-semibold"
          style={{ color: "#e67e22" }}
        >
          ✦ Categories
        </p>
        <h2
          className="text-3xl md:text-4xl font-black mb-2"
          style={{ color: "#1a0a00" }}
        >
          Browse by category
        </h2>
        <p className="font-light max-w-md" style={{ color: "#7a5c44" }}>
          Start with what you&apos;re craving — quick bites, comfort food, or
          something new.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {categories.map((category) => (
          <Link
            key={category.strCategory}
            href={`/recipes/category/${category.strCategory.toLowerCase()}`}
          >
            <div
              className="group rounded-2xl p-4 text-center transition-all duration-200 cursor-pointer hover:-translate-y-1"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ede0d4",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div className="text-2xl mb-2 transition-transform duration-200 group-hover:scale-110">
                {getCategoryEmoji(category.strCategory)}
              </div>
              <h3
                className="text-xs font-bold group-hover:text-orange-600 transition-colors"
                style={{ color: "#3d1f0d" }}
              >
                {category.strCategory}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

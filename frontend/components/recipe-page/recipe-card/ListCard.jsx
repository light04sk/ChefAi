import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ChefHat } from "lucide-react";

export default function ListCard({ data }) {
  const totalTime = parseInt(data.prepTime || 0) + parseInt(data.cookTime || 0);

  return (
    <Link href={data.href}>
      <div
        className="group flex rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ede0d4",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        }}
      >
        <div className="relative w-36 sm:w-48 flex-shrink-0 overflow-hidden">
          {data.showImage ? (
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="192px"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #c0392b, #e67e22)",
              }}
            >
              <ChefHat
                className="w-10 h-10"
                style={{ color: "rgba(255,255,255,0.3)" }}
              />
            </div>
          )}
        </div>

        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {data.cuisine && (
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full capitalize"
                  style={{
                    backgroundColor: "#fff3e0",
                    color: "#c0392b",
                    border: "1px solid #f5c6a0",
                  }}
                >
                  {data.cuisine}
                </span>
              )}
              {data.category && (
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full capitalize"
                  style={{
                    backgroundColor: "#faf7f2",
                    color: "#7a5c44",
                    border: "1px solid #ede0d4",
                  }}
                >
                  {data.category}
                </span>
              )}
            </div>
            <h3
              className="font-black text-base sm:text-lg leading-snug mb-1 group-hover:text-orange-600 transition-colors line-clamp-2"
              style={{ color: "#1a0a00" }}
            >
              {data.title}
            </h3>
            {data.description && (
              <p
                className="text-xs sm:text-sm font-light line-clamp-2 leading-relaxed"
                style={{ color: "#7a5c44" }}
              >
                {data.description}
              </p>
            )}
          </div>
          {(totalTime > 0 || data.servings) && (
            <div
              className="flex gap-3 mt-3 text-xs"
              style={{ color: "#c9a87c" }}
            >
              {totalTime > 0 && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {totalTime} mins
                </span>
              )}
              {data.servings && (
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {data.servings} servings
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

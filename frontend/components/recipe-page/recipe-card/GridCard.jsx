import Link from "next/link";
import Image from "next/image";
import { ChefHat, ArrowRight } from "lucide-react";

export default function GridCard({ data }) {
  return (
    <Link href={data.href}>
      <div
        className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ede0d4",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        }}
      >
        <div className="relative aspect-square overflow-hidden">
          {data.showImage ? (
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #c0392b, #e67e22)",
              }}
            >
              <ChefHat
                className="w-12 h-12"
                style={{ color: "rgba(255,255,255,0.3)" }}
              />
            </div>
          )}
          <div
            className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(26,10,0,0.75) 0%, transparent 60%)",
            }}
          >
            <div className="p-3 flex items-center gap-1.5">
              <span className="text-xs font-bold" style={{ color: "#f5c6a0" }}>
                View recipe
              </span>
              <ArrowRight className="w-3 h-3" style={{ color: "#f5c6a0" }} />
            </div>
          </div>
        </div>
        <div className="p-3.5">
          <h3
            className="text-sm font-bold leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors"
            style={{ color: "#1a0a00" }}
          >
            {data.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

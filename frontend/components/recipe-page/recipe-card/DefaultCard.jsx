import Link from "next/link";
import Image from "next/image";

export default function DefaultCard({ data }) {
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
        {data.showImage && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        )}
        <div className="p-4">
          <h3
            className="font-black text-base group-hover:text-orange-600 transition-colors"
            style={{ color: "#1a0a00" }}
          >
            {data.title}
          </h3>
          {data.description && (
            <p
              className="text-sm font-light mt-1 line-clamp-2"
              style={{ color: "#7a5c44" }}
            >
              {data.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

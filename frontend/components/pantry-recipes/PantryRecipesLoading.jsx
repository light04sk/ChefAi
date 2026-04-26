import { Loader2 } from "lucide-react";

export default function PantryRecipesLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-28">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
        style={{ backgroundColor: "#fff3e0", border: "1px solid #f5c6a0" }}
      >
        <Loader2
          className="w-8 h-8 animate-spin"
          style={{ color: "#c0392b" }}
        />
      </div>
      <h2 className="text-xl font-black mb-2" style={{ color: "#1a0a00" }}>
        Analysing your pantry…
      </h2>
      <p className="text-sm font-light" style={{ color: "#7a5c44" }}>
        Our AI chef is matching recipes to your ingredients
      </p>
      <div
        className="mt-6 w-48 h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: "#ede0d4" }}
      >
        <div
          className="h-full rounded-full animate-pulse"
          style={{
            background: "linear-gradient(135deg, #c0392b, #e67e22)",
            width: "65%",
          }}
        />
      </div>
    </div>
  );
}

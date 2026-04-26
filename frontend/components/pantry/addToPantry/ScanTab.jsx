"use client";

import { Camera, X, Check, Loader2, ScanLine } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";

export default function ScanTab({
  selectedImage,
  scanning,
  saving,
  scannedIngredients,
  setScannedIngredients,
  setSelectedImage,
  handleImageSelect,
  handleScan,
  handleSaveScanned,
  removeIngredient,
}) {
  if (scannedIngredients.length > 0) {
    return (
      <div className="space-y-4">
        {/* Found header + rescan */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-black text-base" style={{ color: "#1a0a00" }}>
              {scannedIngredients.length} ingredients found
            </h3>
            <p className="text-xs font-light" style={{ color: "#7a5c44" }}>
              Remove any that look off
            </p>
          </div>
          <button
            onClick={() => {
              setScannedIngredients([]);
              setSelectedImage(null);
            }}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors hover:bg-orange-50"
            style={{
              color: "#c0392b",
              border: "1px solid #f5c6a0",
              backgroundColor: "#fff3e0",
            }}
          >
            <Camera className="w-3 h-3" />
            Rescan
          </button>
        </div>

        {/* Ingredient list */}
        <div
          className="ingredients-scroll space-y-2.5 overflow-y-auto"
          style={{
            maxHeight: "clamp(160px, 38vh, 300px)",
            paddingRight: "8px",
            marginRight: "-4px",
            scrollbarWidth: "thin",
            scrollbarColor: "#ede0d4 transparent",
          }}
        >
          {scannedIngredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{ backgroundColor: "#fff", border: "1px solid #ede0d4" }}
            >
              <div className="flex-1 min-w-0">
                <div
                  className="font-bold text-sm truncate"
                  style={{ color: "#1a0a00" }}
                >
                  {ingredient.name}
                </div>
                <div
                  className="text-xs font-light"
                  style={{ color: "#7a5c44" }}
                >
                  {ingredient.quantity}
                </div>
              </div>

              {ingredient.confidence && (
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: "#f0fdf4",
                    color: "#16a34a",
                    border: "1px solid #bbf7d0",
                  }}
                >
                  {Math.round(ingredient.confidence * 100)}%
                </span>
              )}

              <button
                onClick={() => removeIngredient(index)}
                className="p-1.5 rounded-lg transition-colors hover:bg-red-50 flex-shrink-0"
                style={{ color: "#7a5c44" }}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Save button */}
        <button
          onClick={handleSaveScanned}
          disabled={saving || scannedIngredients.length === 0}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{
            background: "linear-gradient(135deg, #2d6a4f, #40916c)",
            color: "#fff",
            boxShadow: "0 4px 16px rgba(45,106,79,0.3)",
          }}
        >
          {saving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Saving to pantry…
            </>
          ) : (
            <>
              <Check className="w-4 h-4" /> Save {scannedIngredients.length}{" "}
              items to Pantry
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ImageUploader onImageSelect={handleImageSelect} loading={scanning} />

      {selectedImage && !scanning && (
        <button
          onClick={handleScan}
          disabled={scanning}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #c0392b, #e67e22)",
            color: "#fff",
            boxShadow: "0 4px 16px rgba(192,57,43,0.35)",
          }}
        >
          <ScanLine className="w-4 h-4" />
          Scan with AI
        </button>
      )}

      {scanning && (
        <div className="flex items-center justify-center gap-3 py-4">
          <Loader2
            className="w-5 h-5 animate-spin"
            style={{ color: "#c0392b" }}
          />
          <span className="text-sm font-semibold" style={{ color: "#7a5c44" }}>
            Analysing your image…
          </span>
        </div>
      )}
    </div>
  );
}

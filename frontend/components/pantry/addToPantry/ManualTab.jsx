"use client";

import { Plus, Loader2 } from "lucide-react";

export default function ManualTab({
  manualItem,
  setManualItem,
  adding,
  handleAddManual,
}) {
  return (
    <form onSubmit={handleAddManual} className="space-y-4">
      <div>
        <label
          className="block text-sm font-bold mb-2"
          style={{ color: "#3d1f0d" }}
        >
          Ingredient name
        </label>
        <input
          type="text"
          value={manualItem.name}
          onChange={(e) =>
            setManualItem({ ...manualItem, name: e.target.value })
          }
          placeholder="e.g. Chicken thighs"
          className="w-full px-4 py-3 text-sm rounded-xl focus:outline-none transition-colors"
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ede0d4",
            color: "#1a0a00",
          }}
          disabled={adding}
        />
      </div>

      <div>
        <label
          className="block text-sm font-bold mb-2"
          style={{ color: "#3d1f0d" }}
        >
          Quantity
        </label>
        <input
          type="text"
          value={manualItem.quantity}
          onChange={(e) =>
            setManualItem({ ...manualItem, quantity: e.target.value })
          }
          placeholder="e.g. 500g, 3 pieces, 2 cups"
          className="w-full px-4 py-3 text-sm rounded-xl focus:outline-none transition-colors"
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ede0d4",
            color: "#1a0a00",
          }}
          disabled={adding}
        />
      </div>

      <button
        type="submit"
        disabled={adding}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{
          background: "linear-gradient(135deg, #c0392b, #e67e22)",
          color: "#fff",
          boxShadow: "0 4px 16px rgba(192,57,43,0.35)",
        }}
      >
        {adding ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Adding…
          </>
        ) : (
          <>
            <Plus className="w-4 h-4" /> Add to Pantry
          </>
        )}
      </button>
    </form>
  );
}

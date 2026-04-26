import { Edit2, Trash2, Check, X, Loader2 } from "lucide-react";

export default function PantryIngredientCard({
  item,
  editingId,
  editValues,
  updating,
  deleting,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onEditChange,
}) {
  const isEditing = editingId === item.documentId;

  return (
    <div
      className="group rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ede0d4",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            value={editValues.name}
            onChange={(e) =>
              onEditChange({ ...editValues, name: e.target.value })
            }
            className="w-full px-3 py-2 text-sm rounded-lg focus:outline-none"
            style={{
              backgroundColor: "#faf7f2",
              border: "1px solid #ede0d4",
              color: "#1a0a00",
            }}
            placeholder="Ingredient name"
          />
          <input
            type="text"
            value={editValues.quantity}
            onChange={(e) =>
              onEditChange({ ...editValues, quantity: e.target.value })
            }
            className="w-full px-3 py-2 text-sm rounded-lg focus:outline-none"
            style={{
              backgroundColor: "#faf7f2",
              border: "1px solid #ede0d4",
              color: "#1a0a00",
            }}
            placeholder="Quantity"
          />
          <div className="flex gap-2">
            <button
              onClick={onSave}
              disabled={updating}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                color: "#fff",
              }}
            >
              {updating ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Check className="w-4 h-4" />
              )}
              Save
            </button>
            <button
              onClick={onCancel}
              disabled={updating}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-stone-100"
              style={{
                backgroundColor: "#faf7f2",
                border: "1px solid #ede0d4",
                color: "#7a5c44",
              }}
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3
                className="font-bold text-base mb-0.5"
                style={{ color: "#1a0a00" }}
              >
                {item.name}
              </h3>
              <p className="text-sm font-light" style={{ color: "#7a5c44" }}>
                {item.quantity}
              </p>
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onEdit(item)}
                className="p-1.5 rounded-lg transition-colors hover:bg-orange-50"
                style={{ color: "#7a5c44" }}
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onDelete(item.documentId)}
                disabled={deleting}
                className="p-1.5 rounded-lg transition-colors hover:bg-red-50"
                style={{ color: "#7a5c44" }}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <p className="text-xs" style={{ color: "#c9a87c" }}>
            Added{" "}
            {new Date(item.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      )}
    </div>
  );
}

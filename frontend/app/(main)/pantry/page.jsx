"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import {
  getPantryItems,
  deletePantryItem,
  updatePantryItem,
} from "@/actions/pantry.actions";
import { toast } from "sonner";
import AddToPantryModal from "@/components/AddToPantryModal";
import PantryHeader from "@/components/pantry/PantryHeader";
import PantryFindRecipesBanner from "@/components/pantry/PantryFindRecipesBanner";
import PantryIngredientCard from "@/components/pantry/PantryIngredientCard";
import PantryEmptyState from "@/components/pantry/PantryEmptyState";

export default function PantryPage() {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ name: "", quantity: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    loading: loadingItems,
    data: itemsData,
    fn: fetchItems,
  } = useFetch(getPantryItems);
  const {
    loading: deleting,
    data: deleteData,
    fn: deleteItem,
  } = useFetch(deletePantryItem);
  const {
    loading: updating,
    data: updateData,
    fn: updateItem,
  } = useFetch(updatePantryItem);

  useEffect(() => {
    fetchItems();
  }, []);
  useEffect(() => {
    if (itemsData?.success) setItems(itemsData.items);
  }, [itemsData]);
  useEffect(() => {
    if (deleteData?.success && !deleting) {
      toast.success("Ingredient removed");
      fetchItems();
    }
  }, [deleteData]);
  useEffect(() => {
    if (updateData?.success) {
      toast.success("Ingredient updated");
      setEditingId(null);
      fetchItems();
    }
  }, [updateData]);

  const handleDelete = async (itemId) => {
    const formData = new FormData();
    formData.append("itemId", itemId);
    await deleteItem(formData);
  };

  const saveEdit = async () => {
    const formData = new FormData();
    formData.append("itemId", editingId);
    formData.append("name", editValues.name);
    formData.append("quantity", editValues.quantity);
    await updateItem(formData);
  };

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{ backgroundColor: "#faf7f2" }}
    >
      <div className="max-w-6xl mx-auto">
        <PantryHeader
          scansLimit={itemsData?.scansLimit}
          onAddClick={() => setIsModalOpen(true)}
        />

        <div
          className="h-px mb-10"
          style={{
            background: "linear-gradient(to right, #c0392b, transparent)",
          }}
        />

        {items.length > 0 && (
          <PantryFindRecipesBanner itemCount={items.length} />
        )}

        {loadingItems && (
          <div className="flex flex-col items-center justify-center py-28">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
              style={{
                backgroundColor: "#fff3e0",
                border: "1px solid #f5c6a0",
              }}
            >
              <Loader2
                className="w-8 h-8 animate-spin"
                style={{ color: "#c0392b" }}
              />
            </div>
            <p className="font-semibold" style={{ color: "#7a5c44" }}>
              Loading your ingredients…
            </p>
          </div>
        )}

        {!loadingItems && items.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-7">
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-1 font-semibold"
                  style={{ color: "#e67e22" }}
                >
                  ✦ Stocked up
                </p>
                <h2
                  className="text-2xl md:text-3xl font-black"
                  style={{ color: "#1a0a00" }}
                >
                  Your Ingredients
                </h2>
              </div>
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "#fff3e0",
                  color: "#c0392b",
                  border: "1px solid #f5c6a0",
                }}
              >
                {items.length} {items.length === 1 ? "item" : "items"}
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <PantryIngredientCard
                  key={item.documentId}
                  item={item}
                  editingId={editingId}
                  editValues={editValues}
                  updating={updating}
                  deleting={deleting}
                  onEdit={(i) => {
                    setEditingId(i.documentId);
                    setEditValues({ name: i.name, quantity: i.quantity });
                  }}
                  onSave={saveEdit}
                  onCancel={() => {
                    setEditingId(null);
                    setEditValues({ name: "", quantity: "" });
                  }}
                  onDelete={handleDelete}
                  onEditChange={setEditValues}
                />
              ))}
            </div>
          </div>
        )}

        {!loadingItems && items.length === 0 && (
          <PantryEmptyState onAddClick={() => setIsModalOpen(true)} />
        )}
      </div>

      <AddToPantryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => fetchItems()}
      />
    </div>
  );
}

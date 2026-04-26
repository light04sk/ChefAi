import { useState, useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import {
  scanPantryImage,
  saveToPantry,
  addPantryItemManually,
} from "@/actions/pantry.actions";
import { toast } from "sonner";

export function usePantryModal({ onClose, onSuccess }) {
  const [activeTab, setActiveTab] = useState("scan");
  const [selectedImage, setSelectedImage] = useState(null);
  const [scannedIngredients, setScannedIngredients] = useState([]);
  const [manualItem, setManualItem] = useState({ name: "", quantity: "" });

  const {
    loading: scanning,
    data: scanData,
    fn: scanImage,
  } = useFetch(scanPantryImage);
  const {
    loading: saving,
    data: saveData,
    fn: saveScannedItems,
  } = useFetch(saveToPantry);
  const {
    loading: adding,
    data: addData,
    fn: addManualItem,
  } = useFetch(addPantryItemManually);

  const handleClose = () => {
    setActiveTab("scan");
    setSelectedImage(null);
    setScannedIngredients([]);
    setManualItem({ name: "", quantity: "" });
    onClose();
  };

  const handleImageSelect = (file) => {
    setSelectedImage(file);
    setScannedIngredients([]);
  };

  const handleScan = async () => {
    if (!selectedImage) return;
    const formData = new FormData();
    formData.append("image", selectedImage);
    await scanImage(formData);
  };

  const handleSaveScanned = async () => {
    if (scannedIngredients.length === 0) {
      toast.error("Nothing to save");
      return;
    }
    const formData = new FormData();
    formData.append("ingredients", JSON.stringify(scannedIngredients));
    await saveScannedItems(formData);
  };

  const handleAddManual = async (e) => {
    e.preventDefault();
    if (!manualItem.name.trim() || !manualItem.quantity.trim()) {
      toast.error("Please fill in both fields");
      return;
    }
    const formData = new FormData();
    formData.append("name", manualItem.name);
    formData.append("quantity", manualItem.quantity);
    await addManualItem(formData);
  };

  const removeIngredient = (index) => {
    setScannedIngredients(scannedIngredients.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (scanData?.success && scanData?.ingredients) {
      setScannedIngredients(scanData.ingredients);
      toast.success(`Detected ${scanData.ingredients.length} ingredients!`);
    }
  }, [scanData]);

  useEffect(() => {
    if (saveData?.success) {
      toast.success(saveData.message);
      handleClose();
      if (onSuccess) onSuccess();
    }
  }, [saveData]);

  useEffect(() => {
    if (addData?.success) {
      toast.success("Ingredient added!");
      setManualItem({ name: "", quantity: "" });
      handleClose();
      if (onSuccess) onSuccess();
    }
  }, [addData]);

  return {
    activeTab,
    setActiveTab,
    selectedImage,
    setSelectedImage,
    scannedIngredients,
    setScannedIngredients,
    manualItem,
    setManualItem,
    scanning,
    saving,
    adding,
    handleClose,
    handleImageSelect,
    handleScan,
    handleSaveScanned,
    handleAddManual,
    removeIngredient,
  };
}

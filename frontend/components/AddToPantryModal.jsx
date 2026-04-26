"use client";

import { Camera, PenLine, ScanLine } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePantryModal } from "@/components/pantry/addToPantry/usePantryModal";
import ScanTab from "@/components/pantry/addToPantry/ScanTab";
import ManualTab from "@/components/pantry/addToPantry/ManualTab";

export default function AddToPantryModal({ isOpen, onClose, onSuccess }) {
  const {
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
  } = usePantryModal({ onClose, onSuccess });

  return (
    <>
      <style>{`
        [data-radix-dialog-content]::-webkit-scrollbar { display: none; }
        [data-radix-dialog-content] { -ms-overflow-style: none; scrollbar-width: none; }
        .ingredients-scroll::-webkit-scrollbar { width: 4px; }
        .ingredients-scroll::-webkit-scrollbar-track { background: transparent; }
        .ingredients-scroll::-webkit-scrollbar-thumb { background-color: #ede0d4; border-radius: 999px; }
        .ingredients-scroll::-webkit-scrollbar-thumb:hover { background-color: #c9a87c; }
        @media (max-width: 640px) {
          [data-radix-dialog-overlay] { align-items: flex-end !important; }
          [data-radix-dialog-content] {
            position: fixed !important;
            left: 16px !important;
            right: 16px !important;
            bottom: 16px !important;
            top: auto !important;
            transform: none !important;
            width: auto !important;
            max-width: none !important;
            margin: 0 !important;
            border-radius: 1.5rem !important;
            max-height: 92dvh !important;
          }
        }
      `}</style>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent
          className="p-0 gap-0 rounded-3xl border-0 flex flex-col overflow-hidden"
          style={{
            backgroundColor: "#faf7f2",
            maxHeight: "min(88vh, 720px)",
            width: "calc(100vw - 32px)",
            maxWidth: "480px",
          }}
        >
          <DialogTitle className="sr-only">Stock Your Pantry</DialogTitle>
          {/* Header */}
          <div
            className="px-5 sm:px-7 pt-6 pb-5 flex-shrink-0"
            style={{
              borderBottom: "1px solid #ede0d4",
              backgroundColor: "#fff",
              borderRadius: "1.5rem 1.5rem 0 0",
            }}
          >
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{
                backgroundColor: "#fff3e0",
                color: "#c0392b",
                border: "1px solid #f5c6a0",
              }}
            >
              <ScanLine className="w-3 h-3" />
              AI-powered
            </span>
            <h2
              className="text-xl sm:text-2xl font-black tracking-tight"
              style={{ color: "#1a0a00" }}
            >
              Stock Your Pantry
            </h2>
            <p className="text-sm font-light mt-1" style={{ color: "#7a5c44" }}>
              Scan a photo or type it in — your call.
            </p>
          </div>

          {/* Scrollable body */}
          <div
            className="flex-1 overflow-y-auto px-5 sm:px-7 py-5 sm:py-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList
                className="grid w-full grid-cols-2 rounded-xl p-1 h-auto mb-5 sm:mb-6"
                style={{ backgroundColor: "#ede0d4" }}
              >
                <TabsTrigger
                  value="scan"
                  className="rounded-lg py-2.5 text-sm font-bold gap-2 data-[state=active]:shadow-sm"
                  style={{
                    color: activeTab === "scan" ? "#1a0a00" : "#7a5c44",
                  }}
                >
                  <Camera className="w-4 h-4" /> AI Scan
                </TabsTrigger>
                <TabsTrigger
                  value="manual"
                  className="rounded-lg py-2.5 text-sm font-bold gap-2 data-[state=active]:shadow-sm"
                  style={{
                    color: activeTab === "manual" ? "#1a0a00" : "#7a5c44",
                  }}
                >
                  <PenLine className="w-4 h-4" /> Add Manually
                </TabsTrigger>
              </TabsList>

              <TabsContent value="scan" className="space-y-4 mt-0">
                <ScanTab
                  selectedImage={selectedImage}
                  scanning={scanning}
                  saving={saving}
                  scannedIngredients={scannedIngredients}
                  setScannedIngredients={setScannedIngredients}
                  setSelectedImage={setSelectedImage}
                  handleImageSelect={handleImageSelect}
                  handleScan={handleScan}
                  handleSaveScanned={handleSaveScanned}
                  removeIngredient={removeIngredient}
                />
              </TabsContent>

              <TabsContent value="manual" className="mt-0">
                <ManualTab
                  manualItem={manualItem}
                  setManualItem={setManualItem}
                  adding={adding}
                  handleAddManual={handleAddManual}
                />
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

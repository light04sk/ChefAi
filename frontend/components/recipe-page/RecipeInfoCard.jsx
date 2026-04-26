import {
  Bookmark,
  BookmarkCheck,
  Clock,
  Download,
  Flame,
  Loader2,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { RecipePDF } from "@/components/RecipePDF";
import { P, Pill } from "./recipe-ui";

export default function RecipeInfoCard({
  recipe,
  isSaved,
  saving,
  removing,
  onToggleSave,
}) {
  const totalTime =
    parseInt(recipe.prepTime || 0) + parseInt(recipe.cookTime || 0);

  return (
    <>
      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 pt-12 pb-5">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
          style={{ color: P.brown }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>

      {/* Hero image */}
      {recipe.imageUrl && (
        <div className="max-w-5xl mx-auto px-4 mb-0">
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{ height: 340 }}
          >
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(26,10,0,0.5))",
              }}
            />
          </div>
        </div>
      )}

      {/* Dark info card */}
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="rounded-3xl px-6 sm:px-8 py-7 mb-8"
          style={{
            backgroundColor: P.dark,
            border: `1px solid ${P.dark2}`,
            boxShadow: "0 8px 40px rgba(192,57,43,0.15)",
            marginTop: recipe.imageUrl ? "-2.5rem" : "0",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Pill>{recipe.cuisine}</Pill>
            <Pill
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                color: P.brownLight,
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {recipe.category}
            </Pill>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-black leading-tight tracking-tight mb-3"
            style={{ color: "#fff" }}
          >
            {recipe.title}
          </h1>
          <p
            className="text-sm md:text-base font-light mb-6 max-w-2xl"
            style={{ color: "#a87d5e" }}
          >
            {recipe.description}
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { icon: Clock, label: `${totalTime} mins total` },
              { icon: Users, label: `${recipe.servings} servings` },
              ...(recipe.nutrition?.calories
                ? [
                    {
                      icon: Flame,
                      label: `${recipe.nutrition.calories} cal/serving`,
                    },
                  ]
                : []),
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: P.brownLight,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Icon
                  className="w-3.5 h-3.5 flex-shrink-0"
                  style={{ color: P.orange }}
                />
                <span className="whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onToggleSave}
              disabled={saving || removing}
              className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition-opacity hover:opacity-90 disabled:opacity-60"
              style={
                isSaved
                  ? {
                      background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                      color: "#fff",
                      boxShadow: "0 4px 16px rgba(45,106,79,0.35)",
                    }
                  : {
                      background: P.grad,
                      color: "#fff",
                      boxShadow: "0 4px 16px rgba(192,57,43,0.35)",
                    }
              }
            >
              {saving || removing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isSaved ? (
                <BookmarkCheck className="w-4 h-4" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
              <span>
                {saving
                  ? "Saving…"
                  : removing
                    ? "Removing…"
                    : isSaved
                      ? "Saved to Collection"
                      : "Save Recipe"}
              </span>
            </button>

            <PDFDownloadLink
              document={<RecipePDF recipe={recipe} />}
              fileName={`${recipe.title.replace(/\s+/g, "-").toLowerCase()}.pdf`}
            >
              {({ loading }) => (
                <button
                  disabled={loading}
                  className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition-colors disabled:opacity-60"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Download className="w-4 h-4" />
                  <span>{loading ? "Preparing…" : "Download PDF"}</span>
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </>
  );
}

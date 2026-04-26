import { ChefHat, Flame, Lock } from "lucide-react";
import { P, Pill, ProGate } from "./recipe-ui";

function IngredientsCard({ ingredients }) {
  const grouped = ingredients.reduce((acc, ing) => {
    const cat = ing.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(ing);
    return acc;
  }, {});

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        backgroundColor: P.white,
        border: `1px solid ${P.border}`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="px-6 pt-6 pb-4 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${P.border}` }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: P.cream }}
        >
          <ChefHat className="w-5 h-5" style={{ color: P.crimson }} />
        </div>
        <h2 className="text-lg font-black" style={{ color: P.dark }}>
          Ingredients
        </h2>
      </div>

      <div className="px-6 py-5 space-y-5">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: P.brownLight }}
            >
              {category}
            </p>
            <ul className="space-y-2.5">
              {items.map((ingredient, i) => (
                <li
                  key={i}
                  className="flex items-start justify-between gap-3 pb-2.5"
                  style={{ borderBottom: `1px solid ${P.border}` }}
                >
                  <span
                    className="text-sm font-light flex-1"
                    style={{ color: "#3d1f0d" }}
                  >
                    {ingredient.item}
                  </span>
                  <span
                    className="text-sm font-bold whitespace-nowrap flex-shrink-0"
                    style={{ color: P.crimson }}
                  >
                    {ingredient.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function NutritionCard({ nutrition, isPro }) {
  if (!nutrition) return null;
  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        backgroundColor: P.white,
        border: `1px solid ${P.border}`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="px-6 pt-6 pb-4 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${P.border}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: P.cream }}
          >
            <Flame className="w-5 h-5" style={{ color: P.crimson }} />
          </div>
          <h2 className="text-lg font-black" style={{ color: P.dark }}>
            Nutrition
          </h2>
        </div>
        {!isPro && (
          <Pill>
            <Lock className="w-3 h-3" /> Pro
          </Pill>
        )}
      </div>

      <div className="p-5">
        <ProGate isPro={isPro} label="Nutrition info is a Pro feature">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Calories", value: nutrition.calories, accent: true },
              { label: "Protein", value: nutrition.protein },
              { label: "Carbs", value: nutrition.carbs },
              { label: "Fat", value: nutrition.fat },
            ].map(({ label, value, accent }) => (
              <div
                key={label}
                className="rounded-2xl p-4 text-center"
                style={{
                  backgroundColor: accent ? P.cream : P.bg,
                  border: `1px solid ${accent ? P.creamBorder : P.border}`,
                }}
              >
                <div
                  className="text-xl font-black break-all"
                  style={{ color: accent ? P.crimson : P.dark }}
                >
                  {value}
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-wide mt-0.5"
                  style={{ color: P.brownLight }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </ProGate>
      </div>
    </div>
  );
}

export default function RecipeLeftColumn({ recipe, isPro }) {
  return (
    <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
      <IngredientsCard ingredients={recipe.ingredients} />
      <NutritionCard nutrition={recipe.nutrition} isPro={isPro} />
    </div>
  );
}

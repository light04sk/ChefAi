import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  UtensilsCrossed,
} from "lucide-react";
import { P } from "./recipe-ui";

function StepNumber({ step, isActive, isDone }) {
  if (isDone)
    return (
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, #2d6a4f, #40916c)",
          color: "#fff",
        }}
      >
        <CheckCircle2 className="w-4 h-4" />
      </div>
    );
  return (
    <div
      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-black"
      style={
        isActive
          ? {
              background: P.grad,
              color: "#fff",
              boxShadow: "0 4px 12px rgba(192,57,43,0.3)",
            }
          : {
              backgroundColor: P.bg,
              color: P.brownLight,
              border: `1px solid ${P.border}`,
            }
      }
    >
      {step}
    </div>
  );
}

export default function RecipeInstructions({ instructions }) {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        backgroundColor: P.white,
        border: `1px solid ${P.border}`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header */}
      <div
        className="px-7 pt-7 pb-5 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${P.border}` }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: P.cream }}
        >
          <UtensilsCrossed className="w-5 h-5" style={{ color: P.crimson }} />
        </div>
        <h2 className="text-lg font-black" style={{ color: P.dark }}>
          How to Cook
        </h2>
        <span
          className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: P.bg,
            color: P.brown,
            border: `1px solid ${P.border}`,
          }}
        >
          {instructions.length} steps
        </span>
      </div>

      {/* Steps */}
      <div className="px-7 py-6 space-y-2">
        {instructions.map((step, index) => {
          const isActive = activeStep === step.step;
          const isDone = activeStep !== null && step.step < activeStep;
          return (
            <div key={step.step}>
              <button
                className="w-full flex items-center gap-4 py-4 text-left group transition-all"
                onClick={() => setActiveStep(isActive ? null : step.step)}
              >
                <StepNumber
                  step={step.step}
                  isActive={isActive}
                  isDone={isDone}
                />
                <h3
                  className="font-black text-base flex-1 group-hover:text-orange-600 transition-colors text-left"
                  style={{ color: isActive ? P.crimson : P.dark }}
                >
                  {step.title}
                </h3>
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: isActive ? P.cream : "transparent",
                  }}
                >
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform"
                    style={{
                      color: P.brown,
                      transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
              </button>

              {isActive && (
                <div className="pb-5" style={{ paddingLeft: "3.25rem" }}>
                  <p
                    className="text-sm font-light leading-relaxed mb-4"
                    style={{ color: "#5c3a1e" }}
                  >
                    {step.instruction}
                  </p>
                  {step.tip && (
                    <div
                      className="flex items-start gap-3 p-4 rounded-2xl"
                      style={{
                        backgroundColor: P.cream,
                        border: `1px solid ${P.creamBorder}`,
                      }}
                    >
                      <Lightbulb
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: P.crimson }}
                      />
                      <p
                        className="text-sm font-light"
                        style={{ color: "#5c3a1e" }}
                      >
                        <span
                          className="font-bold"
                          style={{ color: P.crimson }}
                        >
                          Pro Tip:{" "}
                        </span>
                        {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {index < instructions.length - 1 && (
                <div className="h-px" style={{ backgroundColor: P.border }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Completion banner */}
      <div
        className="mx-7 mb-7 p-5 rounded-2xl flex items-start gap-3"
        style={{
          background: "linear-gradient(135deg, #2d6a4f18, #40916c18)",
          border: "1px solid #40916c40",
        }}
      >
        <CheckCircle2
          className="w-5 h-5 flex-shrink-0 mt-0.5"
          style={{ color: "#40916c" }}
        />
        <div>
          <p className="font-black text-sm" style={{ color: "#1a3d2e" }}>
            That&apos;s everything — time to plate up!
          </p>
          <p className="text-xs font-light mt-0.5" style={{ color: "#2d6a4f" }}>
            Enjoy your meal. Don&apos;t forget to save it if you loved it.
          </p>
        </div>
      </div>
    </div>
  );
}

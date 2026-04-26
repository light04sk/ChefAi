import { ArrowRight, Check, Zap, Clock, Users, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-24 px-4 relative overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E8A020 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C41E3A 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <Badge
            className="mb-6 border font-semibold text-xs tracking-widest uppercase rounded-full px-3 py-1.5"
            style={{
              backgroundColor: "#FFF5E6",
              color: "#C41E3A",
              borderColor: "#F5C27A",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full mr-2 inline-block animate-pulse"
              style={{ backgroundColor: "#C41E3A" }}
            />
            AI Pantry Scanning is live
          </Badge>

          <h1 className="text-5xl md:text-[3.75rem] font-bold leading-[1.06] tracking-tight mb-5 text-stone-900">
            Cook what you{" "}
            <span
              className="italic underline decoration-wavy underline-offset-4"
              style={{ color: "#C41E3A", textDecorationColor: "#E8A020" }}
            >
              already
            </span>{" "}
            have at home.
          </h1>

          <p className="text-stone-500 text-lg leading-relaxed mb-8 max-w-md font-light">
            Tell us what's in your fridge and we'll find real recipes that
            match. No more wasted groceries, no more "what's for dinner?"
          </p>

          <div className="flex flex-wrap gap-3 items-center mb-6">
            <Link href="/dashboard">
              <Button
                className="text-white px-6 h-11 text-sm font-semibold rounded-xl gap-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#C41E3A" }}
              >
                Start for Free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/recipes">
              <Button
                variant="outline"
                className="px-6 h-11 text-sm font-semibold rounded-xl border-stone-200 text-stone-700 hover:bg-stone-100"
              >
                Browse Recipes
              </Button>
            </Link>
          </div>

          <p className="text-xs text-stone-400 flex gap-4 flex-wrap">
            {["Free forever", "No credit card", "1M+ recipes"].map((t) => (
              <span key={t} className="flex items-center gap-1">
                <Check className="w-3 h-3" style={{ color: "#C41E3A" }} /> {t}
              </span>
            ))}
          </p>
        </div>

        {/* Right — Recipe card mockup */}
        <div className="relative hidden md:block">
          <div className="absolute -top-3 right-4 z-10">
            <span
              className="text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
              style={{ backgroundColor: "#C41E3A" }}
            >
              ✦ 94% match
            </span>
          </div>

          <div className="absolute -top-6 -left-6 z-10 bg-white border border-stone-200 rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
            <Zap className="w-4 h-4" style={{ color: "#E8A020" }} />
            <span className="text-stone-800 font-bold text-xs">
              Recipe ready in 2s
            </span>
          </div>

          <Card className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="relative h-52 w-full">
              <Image
                src="/pasta-dish.png"
                alt="Pasta dish"
                fill
                className="object-cover"
                priority
              />
            </div>
            <CardContent className="p-5">
              <div className="flex gap-2 mb-3">
                <Badge
                  className="text-xs rounded-full font-medium border"
                  style={{
                    backgroundColor: "#FFF5E6",
                    color: "#C41E3A",
                    borderColor: "#F5C27A",
                  }}
                >
                  Italian
                </Badge>
                <Badge className="bg-stone-100 text-stone-600 border-stone-200 text-xs rounded-full font-medium">
                  30 mins
                </Badge>
              </div>
              <h3 className="font-bold text-lg text-stone-900 mb-2">
                Spaghetti Aglio e Olio
              </h3>
              <div className="flex gap-4 text-xs text-stone-400 font-medium mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 30 mins
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> 2 servings
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="w-3 h-3" /> 380 cal
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Spaghetti", "Garlic", "Olive Oil", "Chilli", "+2 more"].map(
                  (ing) => (
                    <span
                      key={ing}
                      className="text-xs bg-stone-50 border border-stone-100 text-stone-500 rounded-lg px-2.5 py-1 font-medium"
                    >
                      {ing}
                    </span>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <div className="absolute -bottom-4 left-4 bg-white border border-stone-200 rounded-full px-4 py-2 text-xs font-medium text-stone-700 shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Found from your 4 pantry items
          </div>
        </div>
      </div>
    </section>
  );
}

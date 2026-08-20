"use client";

import { useState } from "react";

type SleepStyle = "Soft" | "Balanced" | "Firm";
type Temperature = "Cool" | "Neutral" | "Warm";

const configs = {
  Soft: {
    blocks: 10,
    price: 179,
    description: "Cloud-like comfort for a softer sleep experience.",
  },
  Balanced: {
    blocks: 12,
    price: 199,
    description: "The perfect balance of comfort and support.",
  },
  Firm: {
    blocks: 14,
    price: 219,
    description: "Stronger support for a firmer night's sleep.",
  },
};

export default function DreamConfigurator() {
  const [sleepStyle, setSleepStyle] =
    useState<SleepStyle>("Balanced");

  const [temperature, setTemperature] =
    useState<Temperature>("Neutral");

  const config = configs[sleepStyle];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-md">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[32px] bg-[#f7f4ee] shadow-2xl">

        <div className="grid md:grid-cols-2">

          {/* LEFT */}
          <div className="p-8 md:p-10">

            <div className="mb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#ff4b32]">
                DREAM™ CONFIGURATOR
              </p>

              <h2 className="text-4xl font-black tracking-tight text-[#111111]">
                Build your dream.
              </h2>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Choose how you want your perfect night's sleep to feel.
              </p>
            </div>

            {/* SLEEP STYLE */}
            <div className="mb-8">
              <p className="mb-3 text-sm font-bold text-[#111111]">
                Choose your sleep style
              </p>

              <div className="grid grid-cols-3 gap-2">
                {(["Soft", "Balanced", "Firm"] as SleepStyle[]).map(
                  (style) => (
                    <button
                      key={style}
                      onClick={() => setSleepStyle(style)}
                      className={`rounded-2xl border px-3 py-4 text-sm font-semibold transition-all ${
                        sleepStyle === style
                          ? "border-[#111111] bg-[#111111] text-white shadow-lg"
                          : "border-black/10 bg-white text-[#111111] hover:border-black/30"
                      }`}
                    >
                      {style}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* TEMPERATURE */}
            <div className="mb-8">
              <p className="mb-3 text-sm font-bold text-[#111111]">
                Temperature
              </p>

              <div className="grid grid-cols-3 gap-2">
                {(["Cool", "Neutral", "Warm"] as Temperature[]).map(
                  (temp) => (
                    <button
                      key={temp}
                      onClick={() => setTemperature(temp)}
                      className={`rounded-2xl border px-3 py-4 text-sm font-semibold transition-all ${
                        temperature === temp
                          ? "border-[#7c5cff] bg-[#7c5cff] text-white shadow-lg"
                          : "border-black/10 bg-white text-[#111111] hover:border-black/30"
                      }`}
                    >
                      {temp}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm leading-6 text-neutral-500">
                {config.description}
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex min-h-[500px] flex-col justify-between overflow-hidden bg-[#151a38] p-8 text-white md:p-10">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8b5cf6]/30 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
                YOUR CONFIGURATION
              </p>

              <h3 className="mt-3 text-3xl font-black">
                DREAM CLASSIC
              </h3>
            </div>

            {/* BLOCKS */}
            <div className="relative my-10 flex flex-1 items-center justify-center">
              <div className="relative w-[260px]">

                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="absolute left-1/2 h-16 w-56 -translate-x-1/2 rounded-xl border border-white/10 shadow-xl"
                    style={{
                      bottom: `${index * 48}px`,
                      background:
                        index === 3
                          ? "#ffffff"
                          : index === 2
                          ? "#a66dd1"
                          : index === 1
                          ? "#e9e7ec"
                          : "#202744",
                    }}
                  />
                ))}

                <div className="h-[210px]" />

              </div>
            </div>

            {/* SUMMARY */}
            <div className="relative">

              <div className="mb-6 flex items-end justify-between">
                <div>
                  <p className="text-sm text-white/50">
                    Your build
                  </p>

                  <p className="mt-1 text-lg font-bold">
                    {config.blocks} blocks
                  </p>

                  <p className="text-sm text-white/50">
                    {temperature} temperature
                  </p>
                </div>

                <p className="text-3xl font-black">
                  ${config.price}
                </p>
              </div>

              <button className="w-full rounded-full bg-white py-4 text-sm font-bold text-[#111111] transition-transform hover:scale-[1.02]">
                ADD TO DREAM
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Menu,
  X,
  Moon,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    name: "DREAM MINI",
    price: "$129",
    description: "For lighter sleepers and smaller spaces.",
    blocks: "8 comfort blocks",
  },
  {
    name: "DREAM CLASSIC",
    price: "$199",
    description: "Our perfectly balanced everyday system.",
    blocks: "12 comfort blocks",
    featured: true,
  },
  {
    name: "DREAM MAX",
    price: "$299",
    description: "Maximum comfort for serious sleepers.",
    blocks: "18 comfort blocks",
  },
];

const benefits = [
  {
    icon: Moon,
    title: "Sleep your way",
    text: "Create a sleep setup that feels uniquely yours.",
  },
  {
    icon: Sparkles,
    title: "Modular comfort",
    text: "Rearrange your comfort system whenever you want.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    text: "Premium materials designed for years of better nights.",
  },
  {
    icon: Zap,
    title: "Five-minute setup",
    text: "From box to bedtime faster than you expect.",
  },
];

const faqs = [
  {
    question: "What exactly is DREAM?",
    answer:
      "DREAM is a fictional premium sleep system inspired by modular building. It lets you configure your sleep environment around your comfort preferences.",
  },
  {
    question: "Is this an actual LEGO product?",
    answer:
      "No. DREAM is a creative reimagining concept created specifically for this landing-page assignment.",
  },
  {
    question: "Can I change the configuration?",
    answer:
      "Absolutely. The entire concept is built around modular comfort, so your setup can evolve with you.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard delivery takes 3–5 business days in our fictional product experience.",
  },
  {
    question: "What's included in my DREAM system?",
    answer:
      "Each DREAM system includes the selected base, your chosen comfort blocks, setup guidance, and everything you need to build your configuration.",
  },
  {
    question: "Which DREAM system is right for me?",
    answer:
      "DREAM MINI is designed for lighter sleepers and smaller spaces, DREAM CLASSIC is the balanced everyday option, and DREAM MAX is built for sleepers who want maximum comfort and more customization.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* PREMIUM CURSOR TRAIL */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#ff4d2e]/60 bg-[#ff4d2e]/10 shadow-[0_0_25px_rgba(255,77,46,0.35)] md:block"
        animate={{
          x: cursor.x,
          y: cursor.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 35,
          mass: 0.25,
        }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#087fce]/10 blur-xl md:block"
        animate={{
          x: cursor.x,
          y: cursor.y,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 25,
          mass: 0.5,
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#f6f3ed] text-[#111111]">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#f6f3ed]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="grid grid-cols-2 gap-1">
              <span className="h-3 w-3 rounded-[3px] bg-[#ff4d2e]" />
              <span className="h-3 w-3 rounded-[3px] bg-[#ff4d2e]" />
              <span className="h-3 w-3 rounded-[3px] bg-[#087fce]" />
              <span className="h-3 w-3 rounded-[3px] bg-[#111111]" />
            </div>
            <span className="text-lg font-black tracking-tight">
              DREAM<span className="text-[#ff4d2e]">™</span>
            </span>
          </a>

          <div className="hidden items-center gap-10 text-sm font-medium md:flex">
            <a
              href="#why"
              className="group relative py-3 transition-colors duration-300 hover:text-[#ff4d2e]"
            >
              Why Dream
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#ff4d2e] transition-transform duration-300 group-hover:scale-x-100" />
            </a>

            <a
              href="#system"
              className="group relative py-3 transition-colors duration-300 hover:text-[#087fce]"
            >
              The System
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#087fce] transition-transform duration-300 group-hover:scale-x-100" />
            </a>

            <a
              href="#reviews"
              className="group relative py-3 transition-colors duration-300 hover:text-[#ff4d2e]"
            >
              Reviews
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#ff4d2e] transition-transform duration-300 group-hover:scale-x-100" />
            </a>

            <a
              href="#faq"
              className="group relative py-3 transition-colors duration-300 hover:text-[#087fce]"
            >
              FAQ
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#087fce] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </div>

          <a
            href="#shop"
            className="hidden rounded-full bg-[#111111] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff4d2e] hover:shadow-[0_10px_30px_rgba(255,77,46,0.25)] md:inline-flex"
          >
            Build yours
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-black/5 bg-[#f6f3ed]/95 px-6 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 text-sm font-semibold">

              <a
                href="#why"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-white"
              >
                Why Dream
              </a>

              <a
                href="#system"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-white"
              >
                The System
              </a>

              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-white"
              >
                Reviews
              </a>

              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-white"
              >
                FAQ
              </a>

              <a
                href="#shop"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-full bg-[#111111] px-5 py-3 text-center font-bold text-white"
              >
                Build yours
              </a>

            </div>
          </motion.div>
        )}
      </nav>

      <section className="relative min-h-screen overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(255,77,46,0.12),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(8,127,206,0.08),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-2 w-2 rounded-full bg-[#ff4d2e]" />
              A better way to sleep
            </div>

            <h1 className="max-w-3xl text-[56px] font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[92px]">
              Build
              <br />
              <span className="text-[#ff4d2e]">better</span>
              <br />
              nights.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60 sm:text-xl">
              Meet DREAM™ — the modular sleep system that turns bedtime into
              something you can build, customize, and actually look forward
              to.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Build your dream
              </a>

              <a
                href="#system"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/50 px-7 py-4 font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore the system
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-black/50">
              <div className="flex items-center gap-2">
                <Check size={16} />
                30-night trial
              </div>

              <div className="flex items-center gap-2">
                <Check size={16} />
                Free delivery
              </div>

              <div className="flex items-center gap-2">
                <Check size={16} />
                5-year warranty
              </div>
            </div>
          </motion.div>

          <div className="relative flex h-[590px] w-full items-center justify-center">

            {/* AMBIENT PURPLE GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.38, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/30 blur-[90px]"
            />

            {/* SMALL FLOATING PARTICLES */}
            <motion.span
              animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[14%] top-[28%] h-2 w-2 rounded-full bg-[#a78bfa]"
            />

            <motion.span
              animate={{ y: [0, 14, 0], opacity: [0.15, 0.6, 0.15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-[12%] top-[36%] h-1.5 w-1.5 rounded-full bg-[#c4b5fd]"
            />

            <motion.span
              animate={{ y: [0, -12, 0], opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute right-[20%] bottom-[25%] h-2 w-2 rounded-full bg-[#8b5cf6]"
            />

            {/* HERO IMAGE */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[680px] transition-transform duration-300 ease-out"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                e.currentTarget.style.transform =
                  `perspective(1000px) rotateX(${y * -2.5}deg) rotateY(${x * 2.5}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0deg) rotateY(0deg)";
              }}
            >

              {/* SOFT SHADOW */}
              <div className="absolute -bottom-8 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-[#7c5ce0]/25 blur-[40px]" />

              {/* IMAGE FRAME */}
              <div className="relative overflow-hidden rounded-[38px] shadow-[0_35px_80px_rgba(20,25,70,0.25)]">

                <img
                  src="/Hero.png"
                  alt="Dream comfort system"
                  className="relative z-10 block h-auto w-full object-contain"
                />

                {/* GLASS SHINE */}
                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 z-20 w-[28%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/12 to-transparent"
                />

                {/* TOP GLASS HIGHLIGHT */}
                <div className="pointer-events-none absolute inset-x-5 top-3 z-30 h-px bg-white/20" />

              </div>

              {/* FLOATING LABEL */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-5 left-8 z-40 rounded-2xl border border-white/30 bg-white/80 px-5 py-3 shadow-xl backdrop-blur-md"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Modular comfort
                </p>
                <p className="mt-0.5 text-sm font-black text-black">
                  Built your way.
                </p>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#111111] py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-3 px-6 text-xs font-bold uppercase tracking-[0.22em] text-white/60 lg:justify-between">
          <span>Sleep better</span>
          <span>Build comfort</span>
          <span>Wake happier</span>
          <span>Repeat tomorrow</span>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff4d2e]">
            Why DREAM
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            Sleep shouldn't be one-size-fits-all.
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/55">
            Your ideal night is different from everyone else's. That's why we
            built a system you can configure around the way you actually live.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group mobile-glow rounded-[28px] border border-black/10 bg-white/50 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#ff4d2e] hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,77,46,0.35),0_0_30px_rgba(255,77,46,0.28),0_12px_45px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-white">
                  <Icon size={21} />
                </div>

                <h3 className="text-xl font-black">{benefit.title}</h3>

                <p className="mt-3 leading-7 text-black/50">
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="system" className="bg-[#e6e1d7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff6847]">
              The system
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Your bed.
              <br />
              Your rules.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              DREAM uses modular comfort blocks that let you fine-tune
              support, softness, temperature, and feel without replacing the
              entire system.
            </p>

            <div className="mt-10 space-y-4">

              {[
                {
                  number: "01",
                  title: "Choose your base",
                  text: "Start with the foundation that matches your preferred support.",
                  color: "bg-[#ff6847] text-white",
                },
                {
                  number: "02",
                  title: "Add comfort blocks",
                  text: "Stack modular layers to tune softness, support, and feel.",
                  color: "bg-[#2389d7] text-white",
                },
                {
                  number: "03",
                  title: "Build your ideal sleep setup",
                  text: "Combine your layers and create a setup that feels uniquely yours.",
                  color: "bg-[#ffc83d] text-[#111111]",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="group flex items-center gap-5 rounded-[22px] border border-black/5 bg-white/45 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xs font-black shadow-sm transition-transform duration-300 group-hover:scale-105 ${item.color}`}
                  >
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-black tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-black/50">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

          <div className="relative">
            <div className="animated-border relative rounded-[40px] bg-[#111111] p-7">

              <div className="grid aspect-square grid-cols-3 gap-3 rounded-[28px] border border-white/5 bg-[#202020] p-8 shadow-inner">

                {[
                  "#ff6847",
                  "#ffc83d",
                  "#2389d7",
                  "#171717",
                  "#ff5b3d",
                  "#58c7d8",
                  "#879ff0",
                  "#202020",
                  "#ffb83d",
                ].map((color, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.06,
                      y: -4,
                      rotate: index % 2 ? 2 : -2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="relative rounded-[20px] shadow-xl"
                    style={{ backgroundColor: color }}
                  >
                    <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/15" />
                  </motion.div>
                ))}

              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Build
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    Stack your comfort blocks.
                  </p>
                </div>

                <span className="text-2xl text-white/50">
                  →
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff4d2e]">
            Pick your dream
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            Start building.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-black/50">
            Three starting points. Infinite ways to make them yours.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {products.map((product, productIndex) => {
            const themes = [
              {
                border: "border-[#60a5fa]",
                hoverBorder: "hover:border-[#3b82f6]",
                glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]",
                label: "text-[#2389d7]",
                blocks: ["#60a5fa", "#93c5fd", "#3b82f6", "#38bdf8"],
              },
              {
                border: "border-[#ff6847]",
                hoverBorder: "hover:border-[#ff4d2e]",
                glow: "hover:shadow-[0_0_35px_rgba(255,77,46,0.25)]",
                label: "text-[#ff4d2e]",
                blocks: ["#ff6847", "#ff8063", "#ffc83d", "#ff4d2e", "#ffb347"],
              },
              {
                border: "border-[#c084fc]",
                hoverBorder: "hover:border-[#a855f7]",
                glow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]",
                label: "text-[#a855f7]",
                blocks: ["#c084fc", "#a855f7", "#8b5cf6", "#e879f9"],
              },
            ];

            const theme = themes[productIndex];

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: productIndex * 0.1 }}
                className={`group relative rounded-[32px] border bg-white p-8 transition-all duration-500 hover:-translate-y-2 ${theme.border} ${theme.hoverBorder} ${theme.glow} ${
                  product.featured
                    ? "z-10 scale-[1.07] border-2 shadow-[0_25px_70px_rgba(255,77,46,0.20)] hover:scale-[1.09]"
                    : "shadow-[0_10px_35px_rgba(0,0,0,0.04)]"
                }`}
              >
                {product.featured && (
                  <div className="absolute right-6 top-6 rounded-full bg-[#ff4d2e] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                    Most loved
                  </div>
                )}

                <div className="mb-10 flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-[#f0ece4]">
                  <div className="flex items-center gap-2">
                    {theme.blocks.map((color, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          scale: 1.12,
                          y: -5,
                          rotate: index % 2 ? 3 : -3,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 18,
                        }}
                        className="relative h-12 w-12 rounded-xl shadow-[0_8px_15px_rgba(255,90,79,0.22)]"
                        style={{ backgroundColor: color }}
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-black/10" />

                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/10" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p
                  className={`text-xs font-black uppercase tracking-[0.2em] ${theme.label}`}
                >
                  {product.blocks}
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  {product.name}
                </h3>

                <p className="mt-3 min-h-14 leading-7 text-black/50">
                  {product.description}
                </p>

                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <p
                      className={`text-xs font-bold uppercase tracking-widest ${theme.label}`}
                    >
                      Starting at
                    </p>

                    <p className="mt-1 text-3xl font-black">
                      {product.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product.name)}
                    className="w-full rounded-full bg-[#111111] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff4d2e] hover:shadow-[0_10px_30px_rgba(255,77,46,0.25)] active:scale-95 sm:w-auto"
                  >
                    Choose
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-8 flex max-w-2xl items-center justify-between rounded-2xl border border-[#ff4d2e]/20 bg-[#ff4d2e]/5 px-5 py-4"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff4d2e]">
                Your choice
              </p>
              <p className="mt-1 font-black">
                {selectedProduct} selected
              </p>
            </div>

            <button
              onClick={() => setSelectedProduct(null)}
              className="rounded-full bg-black px-4 py-2 text-xs font-bold text-white transition hover:bg-[#ff4d2e]"
            >
              Change
            </button>
          </motion.div>
        )}
      </section>

      <section id="reviews" className="bg-[#087fce] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/60">
                Sleep club
              </p>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                Fictional DREAM concept
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                People are
                <br />
                building better.
              </h2>

              <div className="mt-8 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} fill="currentColor" size={18} />
                ))}
              </div>

              <p className="mt-3 text-white/70">
                4.9/5 · Fictional DREAM concept rating
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[
                {
                  quote:
                    "I stopped treating sleep like something I just had to do. I started building it around what actually feels good.",
                  name: "Alex M.",
                  role: "Verified DREAM owner",
                },
                {
                  quote:
                    "The best part is being able to change the setup instead of replacing the whole thing.",
                  name: "Maya R.",
                  role: "Verified DREAM owner",
                },
                {
                  quote:
                    "The modular setup makes it easy to find a comfort level that actually works for me.",
                  name: "Jordan T.",
                  role: "Verified DREAM owner",
                },
                {
                  quote:
                    "It feels less like buying a mattress and more like building a sleep setup that belongs to you.",
                  name: "Daniel K.",
                  role: "Verified DREAM owner",
                },
              ].map((review) => (
                <motion.button
                  key={review.name}
                  type="button"
                  whileHover={{ y: -6, scale: 1.015 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="group w-full rounded-[28px] border border-white/15 bg-white/10 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/[0.16] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-white/50 sm:p-7"

                >
                  <div className="flex h-full min-h-[250px] flex-col justify-between">
                    <div>
                      <div className="mb-5 flex gap-1 text-sm text-white">
                        ★ ★ ★ ★ ★
                      </div>

                      <p className="text-base leading-7 text-white sm:text-lg sm:leading-8">
                        “{review.quote}”
                      </p>
                    </div>

                    <div className="mt-7 flex items-end justify-between gap-4">
                      <div>
                        <p className="font-black">{review.name}</p>
                        <p className="mt-1 text-sm text-white/50">
                          {review.role}
                        </p>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 py-28 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff4d2e]">
            Questions
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            Before you dream.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <button
                key={faq.question}
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full py-7 text-left"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="text-lg font-black">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pt-4 leading-7 text-black/50">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#ff4d2e] px-6 py-20 text-center text-white shadow-[0_30px_80px_rgba(255,77,46,0.22)] sm:px-16 sm:py-24"
        >

          {/* Ambient glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#087fce]/30 blur-3xl"
          />

          {/* Floating DREAM blocks */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[8%] top-[18%] hidden h-10 w-10 rounded-xl bg-white/20 shadow-lg backdrop-blur-sm sm:block"
          />

          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="pointer-events-none absolute right-[10%] top-[28%] hidden h-14 w-14 rounded-2xl bg-white/15 shadow-lg backdrop-blur-sm sm:block"
          />

          <motion.div
            animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="pointer-events-none absolute bottom-[15%] left-[17%] hidden h-6 w-6 rounded-lg bg-[#ffc83d]/70 sm:block"
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-xs font-black uppercase tracking-[0.3em] text-white/65 sm:text-sm"
            >
              Ready?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mx-auto mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-7xl"
            >
              Stop scrolling.
              <br />
              <span className="text-white/90">Start sleeping.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8"
            >
              Build a better night with DREAM™.
            </motion.p>

            <motion.a
              href="#shop"
              whileHover={{
                y: -6,
                scale: 1.04,
              }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-black text-[#111111] shadow-[0_12px_35px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
            >
              Build your DREAM
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>

            <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/60">
              <span>30-night trial</span>
              <span>•</span>
              <span>Free delivery</span>
              <span>•</span>
              <span>5-year warranty</span>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="font-black text-black">
          DREAM<span className="text-[#ff4d2e]">™</span>
        </div>

        <p>Build better nights. © 2026 DREAM Concept.</p>

        <p>Made for better sleep.</p>
      </footer>
    </main>
    </>
  );
}

"use client";

import { useState } from "react";
import { trackMetaEvent } from "./MetaPixel";
import CountdownTimer from "./CountdownTimer";

const CHECKOUT_URL = "https://maxautocare.orderonline.id/max-interior-cleaner";
const SHOPEE_URL = "https://shopee.co.id/product/136980590/57058937317/";

const GREEN = "#6a994e";

function OrderButton({
  platform = "orderonline",
  className = "",
  children,
}: {
  platform?: "orderonline" | "shopee";
  className?: string;
  children?: React.ReactNode;
}) {
  const isShopee = platform === "shopee";

  function handleOrder() {
    const url = isShopee ? SHOPEE_URL : CHECKOUT_URL;

    if (!url || url.startsWith("GANTI_DENGAN")) {
      alert("Silakan atur link checkout produk terlebih dahulu.");
      return;
    }

    if (!isShopee) {
      trackMetaEvent("InitiateCheckout", {
        content_name: "MAX Auto Care Interior Cleaner",
        currency: "IDR",
        value: 30000,
      });
    }

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <button
      type="button"
      onClick={handleOrder}
      className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-extrabold transition duration-200 hover:-translate-y-0.5 ${
        isShopee
          ? "bg-[#EE4D2D] text-white hover:bg-[#D94326]"
          : "bg-[#fefee3] text-black hover:bg-[#6a994e]"
      } ${className}`}
    >
      {children ?? (isShopee ? "CHECKOUT SHOPEE" : "ORDER SEKARANG")}
      <span aria-hidden="true">↗</span>
    </button>
  );
}

const benefits = [
  {
    number: "01",
    title: "Bersihkan Interior",
    description:
      "Membantu membersihkan bagian interior mobil dari kotoran sehari-hari.",
    image: "/1.png",
  },
  {
    number: "02",
    title: "Praktis Digunakan",
    description: "Pilihan praktis untuk perawatan interior mobil di rumah.",
    image: "/2.png",
  },
  {
    number: "03",
    title: "Rawat Interior Rutin",
    description:
      "Bantu jaga interior kendaraan tetap bersih dan nyaman digunakan.",
    image: "/3.png",
  },
];

const steps = [
  "Pastikan cara penggunaan sesuai petunjuk pada label produk.",
  "Gunakan pada area yang dianjurkan pada label.",
  "Uji terlebih dahulu pada area kecil yang tidak mencolok.",
];

const faqs = [
  {
    question: "Interior Cleaner ini untuk apa?",
    answer:
      "Produk ini ditujukan untuk membantu membersihkan interior kendaraan. Periksa label produk untuk mengetahui permukaan yang sesuai.",
  },
  {
    question: "Bagaimana cara menggunakannya?",
    answer:
      "Ikuti petunjuk penggunaan pada label botol. Jika ragu, coba terlebih dahulu pada area kecil yang tidak mencolok.",
  },
  {
    question: "Bagaimana cara memesan?",
    answer:
      "Klik Order Sekarang untuk menuju halaman checkout atau Checkout Shopee untuk membeli melalui Shopee.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080B08] pb-24 text-white md:pb-0">
      {/* NAVBAR */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#home" className="font-black tracking-tight">
            MAX <span style={{ color: GREEN }}>AUTO CARE</span>
          </a>

          <a
            href="#promo"
            className="rounded-full border border-[#8BEA45]/50 px-4 py-2 text-xs font-bold text-[#8BEA45] transition hover:bg-[#8BEA45] hover:text-black"
          >
            LIHAT PRODUK
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(139,234,69,0.16),transparent_55%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8BEA45]/30 bg-[#8BEA45]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#8BEA45]" />
              <span className="text-xs font-bold tracking-widest text-[#8BEA45]">
                INTERIOR CARE SERIES
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Interior Bersih.
              <br />
              <span style={{ color: GREEN }}>Mobil Lebih Nyaman.</span>
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-zinc-400 sm:text-lg">
              Rawat kebersihan interior mobil dengan Interior Cleaner dari MAX
              Auto Care. Praktis untuk perawatan kendaraan sehari-hari.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-2 text-green-400">
                ✓ Bisa Bayar COD
              </span>
            </div>

            <div className="mt-5 flex flex-wrap">
              <CountdownTimer placement="top" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <OrderButton className="sm:flex-1">ORDER SEKARANG</OrderButton>

              <OrderButton platform="shopee" className="sm:flex-1">
                CHECKOUT DI SHOPEE
              </OrderButton>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-400 sm:text-sm">
              <span>✓ Perawatan interior</span>
              <span>✓ Praktis digunakan</span>
              <span>✓ Order online</span>
            </div>
          </div>

          {/* PRODUCT IMAGE */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-10 rounded-full bg-[#8BEA45]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-[#8BEA45]/20 bg-gradient-to-br from-[#182018] to-[#0B0E0B] p-5 shadow-2xl shadow-black/50 sm:p-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.25em] text-[#8BEA45]">
                  MAX AUTO CARE
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-zinc-400">
                  INTERIOR CARE
                </span>
              </div>

              <img
                src="/promoMIC.png"
                alt="MAX Auto Care Interior Cleaner"
                className="aspect-[4/3] w-full object-contain drop-shadow-2xl"
              />

              <div className="mt-4 border-t border-white/10 pt-5">
                <p className="text-2xl font-black">
                  INTERIOR <span style={{ color: GREEN }}>CLEANER</span>
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Perawatan interior kendaraan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GREEN BANNER */}
      <section className="bg-[#6a994e] text-black">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-7 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p
              className="text-xs font-extrabold tracking-[0.25em]"
              style={{ color: "#fefae0" }}
            >
              MAX AUTO CARE
            </p>
            <h2
              className="mt-2 text-2xl font-black sm:text-3xl"
              style={{ color: "#fefae0" }}
            >
              Rawat Interior, Mulai dari Sekarang.
            </h2>
          </div>

          <OrderButton className="bg-black text-white hover:bg-zinc-800">
            PESAN SEKARANG
          </OrderButton>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-[#6a994e]">
              INTERIOR CARE
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Perawatan Interior Lebih Praktis
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              Kenali Interior Cleaner MAX Auto Care untuk membantu perawatan
              interior kendaraan sehari-hari.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#6a994e]/50"
              >
                <span className="text-sm font-black text-[#6a994e]">
                  {benefit.number}
                </span>
                <img
                  src={benefit.image}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.03]"
                />
                <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="bg-[#101510] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[#6a994e]">
              SIMPLE CARE
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Perawatan yang Dimulai dari Hal Sederhana
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              Gunakan produk dengan mengikuti petunjuk pada label agar sesuai
              dengan permukaan interior kendaraan.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-xl border border-white/10 bg-black/30 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fefae0] font-black text-black">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CTA */}
      <section id="promo" className="scroll-mt-6 px-5 py-16 sm:py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#6a994e]/30 bg-gradient-to-br from-[#172117] to-[#0D100D] p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#6a994e]/10 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#6a994e]">
                MAX AUTO CARE
              </p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Saatnya Rawat Interior Mobilmu!
              </h2>
              <p className="mt-4 leading-7 text-zinc-400">
                Pilih cara pemesanan yang paling nyaman buat kamu. Produk
                Interior Cleaner MAX Auto Care bisa dipesan melalui link
                checkout yang tersedia.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
              <p className="text-sm text-center text-zinc-400">MAX AUTO CARE</p>
              <h3 className="mt-2 text-2xl text-center font-black">
                Interior Cleaner
              </h3>
              <p className="text-sm text-zinc-400 text-center line-through">
                Rp49.000
              </p>

              <p
                className="mt-2 text-4xl font-black text-center sm:text-5xl"
                style={{ color: "#fefae0" }}
              >
                Rp30.000
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Cek harga dan detail produk melalui halaman pemesanan.
              </p>

              <div className="mt-5 flex flex-wrap">
                <CountdownTimer placement="top" />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <OrderButton>ORDER SEKARANG</OrderButton>
                <OrderButton platform="shopee">CHECKOUT DI SHOPEE</OrderButton>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
                Detail pembayaran dan pengiriman mengikuti halaman checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F4F5F2] px-5 py-16 text-zinc-900 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-green-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black">Ada Pertanyaan?</h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl text-green-700">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <p className="px-5 pb-5 text-sm leading-7 text-zinc-600">
                    {faq.answer}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black">
            MAX <span style={{ color: GREEN }}>AUTO CARE</span>
          </p>
          <p className="text-xs text-zinc-500">
            © 2026 MAX Auto Care. All rights reserved.
          </p>
        </div>
      </footer>

      {/* STICKY CTA MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#080B08]/95 p-3 backdrop-blur-lg md:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="min-w-0 shrink-0">
            <p className="text-xs text-zinc-400">Harga promo</p>
            <p className="text-lg font-black text-[#477A2B]">Rp30.000</p>
          </div>

          <div className="mt-5 flex flex-wrap">
            <CountdownTimer placement="top" />
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-2 gap-2">
            <OrderButton className="px-2 py-3 text-[10px]">
              ORDER SEKARANG
            </OrderButton>

            <OrderButton platform="shopee" className="px-2 py-3 text-[10px]">
              CHECKOUT SHOPEE
            </OrderButton>
          </div>
        </div>
      </div>

      <CountdownTimer placement="bottom" />
    </main>
  );
}

"use client";

import dentalProbe from "@/images/prod1.jpg";
import dentalSpreader from "@/images/prod2.jpg";
import dentalCurette from "@/images/prod3.jpg";
import dentalBurnisher from "@/images/prod4.jpg";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    image: dentalProbe,
    title: "Single-end Probes # W – Williams",
    subtitle: "Professional Series",
    rating: 5,
  },
  {
    id: 2,
    image: dentalSpreader,
    title: "Spreaders, pluggers, condensers # 40",
    subtitle: "Professional Series",
    rating: 4,
  },
  {
    id: 3,
    image: dentalCurette,
    title: "Gracey mini-curettes # 1/2 GRL 3M",
    subtitle: "Mini Gracey",
    rating: 5,
  },
  {
    id: 4,
    image: dentalBurnisher,
    title: "Amalgam burnishers # 2PL",
    subtitle: "Professional Series",
    rating: 4,
  },
  {
    id: 5,
    image: dentalProbe,
    title: "Periodontal Probes # UNC15",
    subtitle: "Professional Series",
    rating: 5,
  },
  {
    id: 6,
    image: dentalSpreader,
    title: "Root Canal Pluggers # D11T",
    subtitle: "Professional Series",
    rating: 4,
  },
  {
    id: 7,
    image: dentalCurette,
    title: "Gracey Curettes # 5/6 Standard",
    subtitle: "Professional Series",
    rating: 5,
  },
  {
    id: 8,
    image: dentalBurnisher,
    title: "Composite Burnishers # 3PL",
    subtitle: "Professional Series",
    rating: 4,
  },
];

export const ProductsSection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium tracking-wide bg-black/5 text-black mb-6">
            BEST SELLERS
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-dark-blue">Dental Instruments</span>
          </h2>

          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Precision-engineered tools trusted by dental professionals for
            accuracy, durability, and clinical excellence.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <ProductCard {...product} image={product.image.src} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <button className="group relative overflow-hidden rounded-full px-10 py-4 text-lg font-semibold text-white bg-black shadow-xl transition-all hover:scale-105">
            <span className="relative z-10">View Full Catalogue</span>
            <span className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-black opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
};

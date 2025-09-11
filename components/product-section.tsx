import { ProductCard } from "./product-card";

import dentalProbe from "@/images/prod1.jpg";
import dentalSpreader from "@/images/prod2.jpg";
import dentalCurette from "@/images/prod3.jpg";
import dentalBurnisher from "@/images/prod4.jpg";

const products = [
  {
    id: 1,
    image: dentalProbe,
    title: "Single-end Probes # W – Williams",
    rating: 5,
  },
  {
    id: 2,
    image: dentalSpreader,
    title: "Spreaders, pluggers, condensers # 40",
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
    rating: 4,
  },
  {
    id: 5,
    image: dentalProbe,
    title: "Periodontal Probes # UNC15",
    rating: 5,
  },
  {
    id: 6,
    image: dentalSpreader,
    title: "Root Canal Pluggers # D11T",
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
    rating: 4,
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-subtle min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              BEST SELLING DENTAL PRODUCTS
            </h2>
            <div className="h-1 w-32 bg-black mx-auto rounded-full opacity-80"></div>
          </div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Discover our premium collection of professional dental instruments, 
            crafted with precision for exceptional clinical performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <ProductCard
                image={product.image.src}
                title={product.title}
                subtitle={product.subtitle}
                rating={product.rating}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="text-white bg-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-elegant transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
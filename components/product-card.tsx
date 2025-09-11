import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  subtitle?: string;
  rating: number;
  onHover?: () => void;
}

export const ProductCard = ({ image, title, subtitle, rating }: ProductCardProps) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "fill-primary text-primary"
            : "fill-muted text-muted"
        }`}
      />
    ));
  };

  return (
    <Card className="group bg-gradient-card border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] cursor-pointer overflow-hidden">
      <div className="p-6 text-center space-y-4">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-lg bg-secondary/30 p-8 transition-all duration-300 group-hover:bg-accent/40">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent group-hover:from-primary/5 group-hover:to-primary-glow/5 transition-all duration-300" />
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-foreground text-lg leading-tight group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground font-medium">
                {subtitle}
              </p>
            )}
          </div>

          {/* Rating */}
          <div className="flex justify-center items-center gap-1 transition-transform duration-200 group-hover:scale-105">
            {renderStars()}
          </div>
        </div>
      </div>
    </Card>
  );
};
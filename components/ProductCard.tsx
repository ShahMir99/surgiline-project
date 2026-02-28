"use client";

import { Plus } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  subtitle?: string;
  price?: string;
}

export const ProductCard = ({
  image,
  title,
  subtitle,
  price = "$38.00",
}: ProductCardProps) => {
  return (
    <div className="relative group">

      {/* main card */}
      <div className="relative rounded-3xl bg-white p-5 shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
        
        {/* image card */}
        <div className="relative rounded-2xl p-4 mb-4">
          <img
            src={image}
            alt={title}
            className="h-36 w-full object-contain"
          />
        </div>

        {/* content */}
        <div className="space-y-1">
          <h3 className="text-sm font-semibold leading-tight">
            {title}
          </h3>

          {subtitle && (
            <p className="text-xs text-gray-500">{subtitle}</p>
          )}

          <p className="text-sm font-bold mt-2">{price}</p>
        </div>

        {/* add button */}
        <button className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-black text-white flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110">
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};
"use client";
import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProductInteraction({
  product,
  selectedColor,
  selectedSize,
}: {
  product: ProductType;
  selectedColor: string;
  selectedSize: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleTypeChnage = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "decrement") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };
  const handleAddToCart = () => {
    addToCart({ ...product, quantity, selectedColor, selectedSize });
    toast.success("Product added to cart!");
  };
  return (
    <div className="flex flex-col mt-4 gap-4">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-xs">
        {" "}
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {" "}
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer border p-[2px] ${
                size === selectedSize ? "border-gray-600" : "border-gray-300"
              } `}
              key={size}
              onClick={() => handleTypeChnage("size", size)}
            >
              <div
                className={`h-6 w-6 text-center flex items-center justify-center
                    ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }
                    `}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {" "}
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border p-[2px] ${
                color === selectedColor ? "border-gray-300" : "border-white"
              } `}
              key={color}
              onClick={() => handleTypeChnage("color", color)}
            >
              <div className={`h-6 w-6 `} style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>
      </div>
      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer border border-gray-300 p-1"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="">{quantity}</span>
          <button
            className="cursor-pointer border border-gray-300 p-1"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart()}
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer tex-sm font-medium"
      >
        <Plus className="w-4 h-4" />
        Add to Cart
      </button>
      <button className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center gap-2 tex-sm font-medium cursor-pointer">
        <ShoppingCart className="w-4 h-4" />
        Buy This Item
      </button>
    </div>
  );
}

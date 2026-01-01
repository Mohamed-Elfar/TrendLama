"use client";
import React, { useState } from "react";
import { ProductType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

export default function ProductCard({ product }: { product: ProductType }) {
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });
  const { addToCart } = useCartStore();

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductType({ ...productType, [type]: value });
  };
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productType.size,
      selectedColor: productType.color,
    });
    toast.success("Product added to cart!");
  };
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images[productType.color]}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
            alt={product.name}
          />
        </div>
      </Link>
      {/* PROUCT DETIAL */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-4 text-xs">
          {/* SIZE */}
          <div className="flex flex-col gap-1">
            <span className=" text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              className="outline-0 ring ring-gray-300 rounded-md px-2 py-1"
              value={productType.size}
              onChange={(e) => {
                handleProductType({ type: "size", value: e.target.value });
              }}
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* COLOR */}
          <div className=" flex flex-col gap-1">
            <span className=" text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  className={`border rounded-full ${
                    productType.color === color
                      ? "border-gray-400"
                      : " border-gray-200"
                  } p-[1.2px] cursor-pointer`}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                >
                  {" "}
                  <div
                    className="w-[14] h-[14] rounded-full"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* PRICE AND ADD TO CART BUTTON */}
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button
            className="flex items-center gap-2 ring-1 ring-gray-200 px-2 py-1 hover:bg-black hover:text-white shadow-lg rounded-md transition-all duration-300 text-sm cursor-pointer"
            onClick={() => handleAddToCart()}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

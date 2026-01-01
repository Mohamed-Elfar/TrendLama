"use client";
import useCartStore from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ShoppingCartIcon() {
  const { cart,hasHydrated } = useCartStore();
  if(!hasHydrated) return null;
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full px-1 text-xs w-4 h-4 flex items-center justify-center font-medium">
        {cart.reduce((total, item) => total + item.quantity, 0)}
      </span>
    </Link>
  );
}

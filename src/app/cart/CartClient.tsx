"use client";
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { CartItemsType, ShippingFormInputs } from "@/types";
import { ArrowRight, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import useCartStore from "@/stores/cartStore";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];
// TEMPORARY
const cartItems: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

export default function CartClient({
  searchParams,
}: {
  searchParams?: { step?: string };
}) {
  const router = useRouter();
  const activeStep = parseInt(searchParams?.step || "1");
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* STEPS */}
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 pb-4 border-b-2 ${
              activeStep === step.id ? " border-gray-800" : " border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`w-4 h-4 bg-black rounded-full p-4 text-white flex items-center justify-center text-sm font-semibold ${
                activeStep === step.id ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              {step.id}
            </div>
            <div
              className={`text-sm font-medium ${
                activeStep === step.id ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </div>
          </div>
        ))}
      </div>
      {/* STEPS & DETAILS */}
      <div className="w-full flex flex-col lg:flex-row gap-16 ">
        {/* STEPS */}
        <div className="w-full lg:w-7/12 shadow-lg border p-8 rounded-lg border-gray-100 flex flex-col  gap-8">
          {activeStep === 1 ? (
            cart.map((item) => (
              // SINGLE CART ITEM
              <div
                className="flex items-center justify-between"
                key={item.id + item.selectedColor + item.selectedSize}
              >
                {/* Image and details*/}
                <div className="flex gap-8">
                  {/* IMAGE */}
                  <div className="relative w-32 h-32 overflow-hidden rounded-lg">
                    <Image
                      alt={item.name}
                      src={item.images[item.selectedColor]}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* ITEM DETAILS */}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-xs text-gray-500">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-xs text-gray-500">
                        Color: {item.selectedColor}
                      </p>
                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                {/* DELETE BTN */}
                <button
                  className="w-8 h-8 rounded-full bg-red-100 text-red-400 hover:bg-red-200 transition-all duration-300 flex items-center justify-center cursor-pointer"
                  onClick={() => removeFromCart(item)}
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">
              please fill in the shipping form to continue.
            </p>
          )}
        </div>
        {/* DETAILS */}
        <div className="w-full lg:w-5/12 shadow-lg border p-8 rounded-lg border-gray-100 flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="text-sm flex justify-between">
              <p className=" text-gray-500">Subtotal</p>
              <p className="font-medium">
                $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
            <div className="text-sm flex justify-between">
              <p className=" text-gray-500">Discount</p>
              <p className="font-medium text-red-700">$ 10</p>
            </div>
            <div className="text-sm flex justify-between">
              <p className=" text-gray-500">Shipping Fee</p>
              <p className="font-medium">$ 10</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className=" text-gray-800 font-semibold">Total</p>
              <p className="font-medium">
                ${" "}
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    20
                  )
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => {
                router.push(`cart/?step=${activeStep + 1}`, { scroll: false });
              }}
              className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 mt-4 hover:bg-gray-900 transition-all duration-300"
            >
              Continue <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

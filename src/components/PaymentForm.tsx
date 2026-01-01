"use client";

import { PaymentFormInputs, PaymentFormSchema } from "@/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(PaymentFormSchema),
  });
  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    console.log("payment data", data);
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-sm font-medium text-gray-500"
        >
          Name on card
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="cardHolder"
          placeholder="Mohamed Samir"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-sm text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-sm font-medium text-gray-500"
        >
          Card Number
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-sm font-medium text-gray-500"
        >
          Expiration Date
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="expirationDate"
          placeholder="MM/YY"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-sm text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-sm font-medium text-gray-500">
          CVV
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-sm text-red-500">{errors.cvv.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/klarna.png"
          alt="Klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="Cards"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="Stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 mt-4 hover:bg-gray-900 transition-all duration-300"
      >
        Checkout <ShoppingCart className="w-3 h-3" />
      </button>{" "}
    </form>
  );
}

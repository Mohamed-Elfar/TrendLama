import { ShippingFormInputs, ShippingFormSchema } from "@/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ShippingForm({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(ShippingFormSchema),
  });
  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-500">
          Name
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="name"
          placeholder="Mohamed Samir"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-500">
          Email
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="email"
          placeholder="mohamed@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-500">
          Phone
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="phone"
          placeholder="01060493174"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-sm font-medium text-gray-500">
          Address
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="address"
          placeholder="123 Main St"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-sm font-medium text-gray-500">
          City
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="city"
          placeholder="Cairo"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-sm text-red-500">{errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 mt-4 hover:bg-gray-900 transition-all duration-300"
      >
        Continue <ArrowRight className="w-3 h-3" />
      </button>{" "}
    </form>
  );
}

import { email, z } from "zod";
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const ShippingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: email("Invalid email address"),
  phone: z
    .string()
    .min(11, "Phone number must be at least 11 characters long")
    .max(
      13,
      "Phone number must be at most 13 characters long if including country code"
    )
    .regex(/^\+?[0-9]+$/, "Phone number can only contain numbers and +"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(5, "City is required"),
});

export type ShippingFormInputs = z.infer<typeof ShippingFormSchema>;

export const PaymentFormSchema = z.object({
  cardHolder: z.string().min(2, "Card Holder Is required"),
  cardNumber: z
    .string()
    .min(16, "Card Number must be at least 16 characters long"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      "Expiration Date must be in MM/YY format"
    ),
  cvv: z
    .string()
    .min(3, "CVV must be at least 3 characters long")
    .max(3, "CVV must be at most 3 characters long"),
});

export type PaymentFormInputs = z.infer<typeof PaymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemType[];
  hasHydrated: boolean;
};

export type CartStoreActionType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: (product: CartItemType) => void;
};

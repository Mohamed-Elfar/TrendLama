import React from "react";
import ProductsList from "../../components/ProductsList";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;
  return (
    <div>
      <ProductsList category={category} params="products" />
    </div>
  );
}

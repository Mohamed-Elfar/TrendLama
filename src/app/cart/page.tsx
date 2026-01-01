import CartClient from "./CartClient";

export default async function CartPage(props: {
  searchParams?: Promise<{ step?: string }>;
}) {
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  return <CartClient searchParams={searchParams} />;
}

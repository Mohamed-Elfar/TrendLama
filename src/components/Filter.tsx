"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const handleSort = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort", value);
    router.push(`${pathname}?${newParams.toString()}`);
  };
  return (
    <div className="flex items-center text-sm gap-2 justify-end text-gray-600 my-6">
      <span>
        Sort by:{" "}
        <select
          name="sort"
          id="sort"
          className="ring-1 ring-gray-200 p-1 shadow-md rounded-sm"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </span>
    </div>
  );
}

import React from "react";
import { Search } from "lucide-react";
export default function SearchBar() {
  return (
    <div className="hidden sm:flex item-center px-2 py-1 shadow-md ring-1 ring-gray-200 rounded-md gap-2 ">
      <Search className="w-4 h-4 text-gray-400 " />
      <input
        id="search"
        className="text-sm outline-0"
        placeholder="Search..."
      />
    </div>
  );
}

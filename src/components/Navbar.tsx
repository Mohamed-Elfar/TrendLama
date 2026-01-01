import React from "react";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Bell, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between pb-4 border-b border-gray-200">
      {/* LEFT */}

      <Link className="flex items-center" href={"/"}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden sm:flex text-md font-medium tracking-wider">
          TRENDLAMA.
        </p>
      </Link>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />

        <Link href="/">Sign IN</Link>
      </div>
    </nav>
  );
}

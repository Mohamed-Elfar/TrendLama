import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:flex-start md:gap-0 bg-gray-900 p-8 rounded-lg md:justify-between">
      {/*First column */}
      <div className="flex flex-col items-center gap-4 md:items-start">
        <Link className="flex items-center" href={"/"}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden sm:flex text-md font-medium tracking-wider text-white">
            TRENDLAMA.
          </p>
        </Link>
        <p className="text-sm text-gray-400">&copy; 2025 trendlama.</p>
        <p className="text-sm text-gray-400"> All Rights Reserved.</p>
        <p></p>
      </div>
      {/*Second column */}
      <div className="flex flex-col items-center gap-4 md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/" className=" hover:text-white">
          Home
        </Link>
        <Link href="/" className=" hover:text-white">
          Contact
        </Link>
        <Link href="/" className=" hover:text-white">
          Terms of Service
        </Link>
        <Link href="/" className=" hover:text-white">
          Privacy Policy
        </Link>
      </div>
      {/*Third column */}
      <div className="flex flex-col items-center gap-4 md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50">Products</p>
        <Link href="/" className=" hover:text-white">
          All Products
        </Link>
        <Link href="/" className=" hover:text-white">
          New Arrivals
        </Link>
        <Link href="/" className=" hover:text-white">
          Best Sellers
        </Link>
        <Link href="/" className=" hover:text-white">
          Sale
        </Link>
      </div>
      {/*Fourth column */}
      <div className="flex flex-col items-center gap-4 md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50">Company</p>
        <Link href="/" className=" hover:text-white">
          About
        </Link>
        <Link href="/" className=" hover:text-white">
          Contact
        </Link>
        <Link href="/" className=" hover:text-white">
          Blog
        </Link>
        <Link href="/" className=" hover:text-white">
          Affiliate Program
        </Link>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row gap-5 p-5">
      <Link className={`${pathname === "/" ? "bg-red-400 px-4" : ""}`} href="/">
        Home
      </Link>
      <Link
        className={`${pathname === "/dashboard" ? "bg-red-400 px-4" : ""}`}
        href="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={`${
          pathname === "/dashboard/profile" ? "bg-red-400 px-4" : ""
        }`}
        href="/dashboard/profile"
      >
        Profile
      </Link>
      <Link
        className={`${
          pathname === "/dashboard/setting" ? "bg-red-400 px-4" : ""
        }`}
        href="/dashboard/setting"
      >
        Setting
      </Link>
    </div>
  );
};

export default Header;

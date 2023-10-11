"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const currentPath = usePathname();

  const link = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex h-14 space-x-6 mb-5 items-center border-b px-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {link.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`${
                item.href === currentPath ? "text-zinc-800" : "text-zinc-500"
              }  hover:text-zinc-800 transition-all`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <ul className="flex bg-slate-200 p-5 gap-5">
      <li>
        <Link href="/">Next.js</Link>
      </li>
      <li>
        <Link href="/users">Users</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default Navbar;

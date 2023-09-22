"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <ul className="flex bg-slate-200 p-5 gap-5">
      <li>
        <Link href="/">Next.js</Link>
      </li>
      <li>
        <Link href="/users">Users</Link>
      </li>
      {status === "loading" && <li>Loading...</li>}
      {status === "authenticated" && <li>{session.user!.name}</li>}
      {status === "unauthenticated" && (
        <li>
          <Link href="/api/auth/signin">Login</Link>
        </li>
      )}
    </ul>
  );
};

export default Navbar;

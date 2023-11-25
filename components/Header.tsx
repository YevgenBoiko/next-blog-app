import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex w-full h-20 justify-center items-center gap-5 bg-gray-200">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
}

export default Header;

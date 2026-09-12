"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Plans", "/#plans"],
  ["Services", "/#services"],
  ["About", "/#about"],
  ["Reviews", "/#reviews"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-24 bg-secondary text-white shadow-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Healing Pets Naturally home">
          <Image
            src="/logo-transparent.svg"
            alt="Logo"
            width={152}
            height={96}
            className="h-20 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-xl px-4 py-3 text-lg transition hover:-translate-y-0.5 hover:bg-white hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/book"
          className="hidden rounded-full bg-primary px-5 py-3 text-lg font-semibold transition hover:bg-white hover:text-secondary lg:block"
        >
          Let&apos;s Talk
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="block h-0.5 w-8 bg-white" />
          <span className="my-2 block h-0.5 w-8 bg-white" />
          <span className="block h-0.5 w-8 bg-white" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/20 bg-secondary px-4 pb-6 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col pt-2 text-center">
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg hover:bg-white hover:text-primary"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-lg font-bold hover:bg-white hover:text-secondary"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

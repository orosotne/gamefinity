"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'BLIK! Showcase', href: '#blik' },
  { label: 'Technology', href: '#technology' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'For Banks', href: '#for-banks' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="#home" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Gamefinity logo"
              width={28}
              height={28}
              priority
            />
            <span className="text-lg font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
                Gamefinity
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-glow transition hover:brightness-110"
            >
              Request Demo
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center rounded-lg border border-white/15 p-2 hover:bg-white/5"
            onClick={() => setOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden">
          <div className="absolute right-3 top-3">
            <button
              aria-label="Close menu"
              className="inline-flex items-center rounded-lg border border-white/15 p-2 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="mx-4 mt-16 rounded-xl border border-white/10 bg-black/70 p-4 shadow-soft">
            <ul className="divide-y divide-white/10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-2 py-3 text-slate-200 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white shadow-glow transition hover:brightness-110"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}




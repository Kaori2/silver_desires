"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"

const navItems = [
  "Sales",
  "For Women",
  "For Men",
  "Vibrators",
  "Books We Like",
  "Lingeries",
];

export default function Header() {
  return (
    <header className="w-full bg-[#6b0f2e] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-serif tracking-widest text-lg hover:opacity-80 transition"
        >
          <img
            src="/assets/logo-removebg-preview.png"
            alt="Silver Desires Logo"
          />
        </Link>

        <nav className="flex gap-8 text-sm uppercase tracking-widest">
          {navItems.map((item) => (
            <div key={item} className="group relative cursor-pointer">
              <span className="flex items-center gap-1">
                {item}
                <i className="fas fa-chevron-down text-[10px]" />
              </span>

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-pink-400 transition-all duration-300 group-hover:w-full" />

              <div className="absolute top-8 left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="bg-white text-black p-4 rounded-lg shadow-xl min-w-[180px]">
                  <p className="text-sm hover:text-pink-600 cursor-pointer">
                    Example option
                  </p>
                  <p className="text-sm hover:text-pink-600 cursor-pointer">
                    Example option
                  </p>
                  <p className="text-sm hover:text-pink-600 cursor-pointer">
                    Example option
                  </p>
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hover:text-pink-400 transition">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
            />
          </button>
          <button className="hover:text-pink-400 transition">
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
            />
          </button>
          <button className="relative hover:text-pink-400 transition">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="lg"
            />
            <span className="absolute -top-1 -right-2 bg-pink-500 text-xs rounded-full px-1">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

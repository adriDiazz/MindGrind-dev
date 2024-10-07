"use client";

import Link from "next/link";
import { useState } from "react";
import { useUser } from "@/lib/auth";
import { signOut } from "@/app/(login)/actions";
import { useRouter } from "next/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/cerrar el menú
  const { user, setUser } = useUser();
  const router = useRouter();

  async function handleSignOut() {
    setUser(null);
    await signOut();
    router.push("/");
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev); // Cambiar el estado del menú
  }

  return (
    <header className="border-b border-gray-200">
      <div className="relative flex w-full shrink-0 flex-wrap items-center justify-between bg-background py-7 px-4">
        <div>
          <img src="/images/Logo.png" alt="MindGrind Logo" />
        </div>
        {/* Links visibles en pantallas medianas y grandes */}
        <div className="hidden items-center justify-between gap-12 text-black md:flex">
          <Link
            className="text-sm font-medium text-dark-grey-900"
            href="#product"
          >
            Product
          </Link>
          <Link
            className="text-sm font-medium text-dark-grey-900"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-dark-grey-900"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium text-dark-grey-900"
            href="#company"
          >
            Company
          </Link>
        </div>
        {/* Botones de inicio de sesión */}
        <div className="hidden items-center gap-8 md:flex">
          <button className="flex items-center text-sm font-medium text-black">
            Log In
          </button>
          <button className="flex items-center rounded-xl bg-purple-blue-100 bg-purple-blue-100 px-4 py-2 text-sm font-medium text-purple-blue-500 text-purple-blue-600 transition hover:bg-opacity-80 focus:bg-opacity-70">
            Sign Up
          </button>
        </div>
        {/* Botón del menú móvil */}
        <button onClick={toggleMenu} className="flex md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
              fill="black"
            />
          </svg>
        </button>
        {/* Menú móvil */}
        <div
          className={`absolute top-full left-0 right-0 z-10 flex flex-col items-start justify-center gap-3 overflow-hidden rounded-2xl bg-white px-4 shadow-main transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "max-h-64 py-4" : "max-h-0"
          }`}
        >
          <Link
            className="text-sm font-medium text-dark-grey-900"
            href="#product"
            onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
          >
            Product
          </Link>
          <Link
            className="text-sm font-medium text-dark-grey-900"
            href="#features"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-dark-grey-900"
            href="#pricing"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium text-dark-grey-900"
            href="#company"
            onClick={() => setIsMenuOpen(false)}
          >
            Company
          </Link>
          <button className="flex items-center text-sm font-medium text-black">
            Log In
          </button>
          <button className="flex items-center rounded-xl bg-purple-blue-100 px-4 py-2 text-sm font-medium text-purple-blue-600 transition hover:bg-opacity-80 focus:bg-opacity-70">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen bg-background">
      <Header />
      {children}
    </section>
  );
}

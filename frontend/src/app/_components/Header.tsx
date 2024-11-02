"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export const Header = () => {
  const { user, isLoaded } = useUser();

  return (
    <div>
      <header className="sticky top-0 z-50">
        <div className="relative bg-white shadow-lg">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <Link href="/">
              <Image src="logo.svg" alt="logo" width={150} height={150} />
            </Link>
            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="whitespace-nowrap text-gray-500 transition hover:text-gray-500/75"
                      href="/learning"
                    >
                      My-learning
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="whitespace-nowrap text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Teach on Eduvora
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      History
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Courses
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                {isLoaded ? (
                  user ? (
                    <div>
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  ) : (
                    <div className="sm:flex sm:gap-4">
                      <Link
                        className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondary"
                        href="/login"
                      >
                        Login
                      </Link>

                      <Link
                        className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-secondary sm:block"
                        href="/register"
                      >
                        Register
                      </Link>
                    </div>
                  )
                ) : (
                  // Optional: Show a skeleton loader while authentication state is loading
                  <div className="h-10 w-20 animate-pulse rounded-md bg-gray-200" />
                )}

                <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
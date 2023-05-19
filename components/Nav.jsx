"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import Menu from "@/app/Menu/page";
// import Home from "@/app/page";

const Nav = () => {
  const [togggleDropdown, setTogggleDropdown] = useState(false);
  const handleToggleDropdown = () => {
    setTogggleDropdown((prev) => !prev);
  };
  return (
    <header className="max-w-7xl mx-auto">
      <div className="flex justify-between font-poppins items-center">
        <div className="flex items-center gap-1">
          <Image
            src="/assets/logo.png"
            alt="logo"
            className="object-contain sm:hidden"
            width={25}
            height={25}
          />
          <Image
            src="/assets/logo.png"
            alt="logo"
            className="object-contain hidden sm:block "
            width={30}
            height={30}
          />
          <span className=" block font-bold text-base md:text-lg">
            Nourish<span className="text-[#FF7E00]">Net</span>
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-5 md:gap-8 lg:gap-16">
          <Link
            href="/Home"
            className="dropdown_link font-light text-sm md:text-base lg:text-[17px]"
            onClick={() => setTogggleDropdown(false)}
          >
            Home
          </Link>
          <Link
            href="/Menu"
            className="dropdown_link font-light text-sm md:text-base lg:text-[17px]"
            onClick={() => setTogggleDropdown(false)}
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="dropdown_link font-light text-sm md:text-base lg:text-[17px]"
            onClick={() => setTogggleDropdown(false)}
          >
            Contact
          </Link>
          <Link
            href="/shop"
            className="dropdown_link font-light text-sm md:text-base lg:text-[17px]"
            onClick={() => setTogggleDropdown(false)}
          >
            Shop
          </Link>
        </nav>
        <div className=" hidden sm:flex gap-6">
          <button
            type="button"
            onClick={() => {
              setTogggleDropdown(false);
              signOut();
            }}
            className="rounded-full border border-black bg-black py-1.5 px-6  text-white transition-all hover:bg-white hover:text-black text-center "
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setTogggleDropdown(false);
              signOut();
            }}
            className=" rounded-full text-center  "
          >
            Register
          </button>
        </div>
        {/* Desktop Navigation */}
        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
          <nav className="flex">
            <svg
              onClick={() => {
                handleToggleDropdown();
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
            {togggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/Home"
                  className="dropdown_link"
                  onClick={() => setTogggleDropdown(false)}
                >
                  Home
                </Link>
                <Link
                  href="/Menu"
                  className="dropdown_link"
                  onClick={() => setTogggleDropdown(false)}
                >
                  Menu
                </Link>
                <Link
                  href="/contact"
                  className="dropdown_link font-light text-sm md:text-base lg:text-[17px]"
                  onClick={() => setTogggleDropdown(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/shop"
                  className="dropdown_link font-light text-sm md:text-base lg:text-[17px]"
                  onClick={() => setTogggleDropdown(false)}
                >
                  Shop
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setTogggleDropdown(false);
                    signOut();
                  }}
                  className=" rounded-full text-center  "
                >
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTogggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign In
                </button>
              </div>
            )}
          </nav>
        </div>
        {/* Mobile Navigation */}
      </div>
    </header>
  );
};

export default Nav;

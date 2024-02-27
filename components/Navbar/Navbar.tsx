"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();

  const [isHovered, setIsHovered] = useState(false);

  const isActive = (href: string) => {
    return pathname === href;
  };

  const handleClick = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <nav className="w-full h-[76px]">
      <div className="flex items-center justify-between px-4 py-3 md:px-20 md:py-4">
        {/* Logo */}
        <div className="">
          <Link href={"/"}>
            <Image
              src={"/assets/Images/logo.png"}
              alt="Logo"
              width={80}
              height={20}
            />
          </Link>
        </div>
        {/* Navbar Items */}
        <div className="hidden md:flex">
          <ul className="flex flex-row items-center justify-between gap-10 text-xl">
            <li
              className={`transition duration-300 ease-in-out ${
                isActive("/") ? "text-[#54bbbd]" : "text-black"
              } hover:text-[#54bbbd]`}
            >
              <Link href="/">Home</Link>
            </li>
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <li
                className={`transition duration-300 ease-in-out ${
                  isActive("/about") ? "text-[#54bbbd]" : "text-black"
                } hover:text-[#54bbbd]`}
                onClick={handleClick}
              >
                <Link href="">Solutions</Link>
              </li>
              {isHovered && (
                <div className="absolute left-[-150px] w-[400px]">
                  <div className="py-2 mt-2 bg-gray-50 shadow-lg p-4 rounded-lg">
                    <ul className="flex flex-col items-start justify-center gap-3 mt-2 px-2">
                      <li className="text-left">
                        <Link
                          href="/link1"
                          className="block hover:text-[#54bbbd] transition duration-300 ease-in-out"
                        >
                          Workforce Management Software
                        </Link>
                      </li>
                      <li className="text-left">
                        <Link
                          href="/link2"
                          className="block hover:text-[#54bbbd] transition duration-300 ease-in-out"
                        >
                          Managed By Axle
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <li
              className={`transition duration-300 ease-in-out ${
                isActive("/about") ? "text-[#54bbbd]" : "text-black"
              } hover:text-[#54bbbd]`}
            >
              <Link href="https://axle-health.readme.io/reference/retrieve-timeslots-in-date-range">
                Developers
              </Link>
            </li>
            <li
              className={`transition duration-300 ease-in-out ${
                isActive("/about") ? "text-[#54bbbd]" : "text-black"
              } hover:text-[#54bbbd]`}
            >
              <Link href="https://wellfound.com/company/axle-health/jobs">
                Careers
              </Link>
            </li>

            <Link href="/contact-us">
              <Button className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white font-bold py-2 px-4 transition duration-150 ease-in-out transform hover:scale-105 rounded-lg text-base">
                Get Started
              </Button>
            </Link>
          </ul>
        </div>

        <div className="md:hidden flex-row items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <HamburgerMenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src={"/assets/Images/logo.png"}
                    alt="Logo"
                    width={80}
                    height={25}
                  />
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

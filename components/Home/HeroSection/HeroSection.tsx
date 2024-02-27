import Image from "next/image";
import React from "react";
import TypeWriterHeader from "./TypeWriterHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
        <div className="w-full md:w-1/2 animate-fadeIn p-8 flex flex-col items-center lg:items-start">
          <TypeWriterHeader />
          <Link href="/contact-us">
            <Button className="mt-4 lg:mt-0 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white font-bold py-2 px-4 rounded-xl text-base p-6 transition duration-150 ease-in-out transform hover:scale-105 self-center">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center animate-slideIn">
          <Image
            src="/assets/Images/hero.png"
            alt="Hero Image"
            width={500}
            quality={100}
            priority={true}
            height={300}
            objectFit="contain"
            className="md:w-full md:h-[600px] no-wrap"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;

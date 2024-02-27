import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/animations/typewriter-effect";
import React from "react";

export interface WordType {
  text: string;
  className: string;
}

const TypeWriterHeader = () => {
  const words = [
    {
      text: "In-Home",
      className: "text-[#024957]",
    },

    {
      text: "healthcare",
      className: "text-[#5686bd] dark:text-blue-500",
    },
    {
      text: "made",
    },
    {
      text: "easy",
      className: "text-[#5686bd] dark:text-blue-500",
    },
  ];

  function DynamicHeading({ words }: { words: any }) {
    return (
      <h1 className="flex flex-wrap justify-center text-3xl md:text-5xl lg:hidden font-bold">
        {words.map((word: WordType) => (
          <>
            <span className={`${word.className ? word.className : ""} mr-2`}>
              {word.text}
            </span>
          </>
        ))}
      </h1>
    );
  }
  return (
    <>
      <div className="hidden lg:flex flex-col items-start justify-center">
        <TypewriterEffectSmooth words={words} />
        <p className="hero-paragraph text-[#024957] text-[24px] dark:text-neutral-200 text-base  lg:mb-10">
          Take your operations to the next level with the leading platform for
          in-home care delivery
        </p>
        
      </div>
      <div className=" flex-col items-center justify-center w-full">
        <DynamicHeading words={words} />
        <p className="lg:hidden hero-paragraph text-center text-[#024957] text-[20px] lg:text-[24px] dark:text-neutral-200 text-base mt-5  lg:mb-10">
          Take your operations to the next level with the leading platform for
          in-home care delivery
        </p>
        
      </div>
    </>
  );
};

export default TypeWriterHeader;

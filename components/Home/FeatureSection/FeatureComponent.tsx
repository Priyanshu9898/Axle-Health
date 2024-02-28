"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AnimatedSectionProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageUrl: string;
  imageFirstOnDesktop: boolean;
}

const FeatureComponent = ({
  title,
  description,
  linkText,
  linkHref,
  imageUrl,
  imageFirstOnDesktop,
}: AnimatedSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionOrderClass = imageFirstOnDesktop
    ? "md:flex-row-reverse"
    : "md:flex-row";

  return (
    <div
      className={`flex flex-col ${sectionOrderClass} items-center justify-between w-full`}
    >
      <motion.div
        className="w-full md:w-1/2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-[38px] text-[#024957]"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        <motion.div
          className="h-1 w-28 bg-[#024957] mt-2"
          variants={itemVariants}
        ></motion.div>
        <motion.p className="text-[20px] mt-4 text-[#024957]" variants={itemVariants}>
          {description}
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href={linkHref}
            className="text-[#54bbbd] text-[20px] mt-10 hover:text-green-800  inline-flex items-center"
          >
            {linkText} <span className="ml-2">&gt;</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src={imageUrl}
          alt="Image Description"
          width={458}
          height={300}
        //   objectFit="cover"
          sizes="(max-width: 479px) 92vw, (max-width: 767px) 88vw, 458px"
          className="w-[458px] h-[400px]"
        />
      </motion.div>
    </div>
  );
};

export default FeatureComponent;

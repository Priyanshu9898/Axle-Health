
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AnimatedSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full">
      <motion.div
        className="w-full md:w-1/2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-2xl font-bold text-green-600"
          variants={itemVariants}
        >
          Route Optimization
        </motion.h1>
        <motion.div
          className="h-1 w-16 bg-green-500 mt-2"
          variants={itemVariants}
        ></motion.div>
        <motion.p className="text-gray-600 mt-4" variants={itemVariants}>
          Increase scheduling efficiency and staff utilization with Axle
          proprietary logistics algorithms
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="/explore-workforce-management-software"
            className="text-green-600 hover:text-green-800 mt-4 inline-flex items-center"
          >
            Explore Workforce Management Software{" "}
            <span className="ml-2">&gt;</span>
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
        {/* Replace with your image path */}
        <Image
          src="/your-image-path.jpg"
          alt="Image Description"
          width={500}
          height={300}
          objectFit="cover"
        />
      </motion.div>
    </div>
  );
};

export default AnimatedSection;

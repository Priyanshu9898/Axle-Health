"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const IconsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const icons = [
    // "/assets/images/axios.svg", 
    // "/assets/images/yahoo.png",
    "/assets/Images/hit.png",
    "/assets/Images/home.jpg",
    "/assets/Images/hit.png",
    "/assets/Images/home.jpg",
  ];

  return (
    <div className="container mx-auto text-center py-12">
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl text-[#024957]" variants={itemVariants}>READ ABOUT US</motion.h2>
        <div className="flex flex-wrap justify-center gap-10">
          {icons.map((iconPath, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Image src={iconPath} alt={`Icon ${index + 1}`} width={200} height={150} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IconsSection;

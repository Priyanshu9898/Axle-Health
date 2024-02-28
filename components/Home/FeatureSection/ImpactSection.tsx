"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Stat {
  imagePath: string; 
  label: string;
  value: string;
}

interface SkewedSectionProps {
  stats: Stat[];
}

const ImpactSection = ({ stats }: SkewedSectionProps) => {
  // Variants for animations using Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
  };

  return (
    <div className="relative text-white py-20 px-4 overflow-hidden z-[1000]">
      {/* Skewed background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#024957',
        clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0% 100%)',
        zIndex: -1,
      }}></div>
      
      {/* Content */}
      <motion.div
        className="container mx-auto my-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}

      >
        <div className='flex flex-col gap-8 lg:flex-row items-center justify-center lg:gap-28'>

       
        <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>Meaningful Impact</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div key={index} className="flex flex-col items-start justify-center space-x-2" variants={itemVariants}>
              <Image src={stat.imagePath} alt="" width={50} height={50} className='mb-4' />
              <div>
                <h3 className="text-2xl font-semibold">| {stat.value}</h3>
                <p className='text-xl px-4 mt-2'>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactSection;

"use client";

import { motion } from 'framer-motion';

const ManagedByAxleSection = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-[#88eef0] to-white text-center py-12 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-[#024957] text-3xl font-bold mb-4">Managed by Axle</h2>
      <p className="text-[#024957] max-w-xl mx-auto">
        Use our network of clinicians to offer in-home services to your patients. You bring the program requirements, we bring the rest: supplies, scheduling, clinician staffing, and real-time operations to tie it all together.
      </p>
    </motion.div>
  );
};

export default ManagedByAxleSection;

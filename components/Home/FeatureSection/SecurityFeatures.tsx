"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Feature {
  imageUrl: string;
  title: string;
  description: string;
}

const securityFeatures = [
  {
    imageUrl: "/assets/Images/security1.svg", 
    title: "SOC 2 Certified",
    description:
      "Axle is SOC-2 Type II certified, as verified by independent audit based on standards set by the AICPA.",
  },
  {
    imageUrl: "/assets/Images/security2.png",
    title: "HIPAA Compliant",
    description:
      "Axle is fully HIPAA compliant, as verified by independent audit based on standards set by the HHS.",
  },
  {
    imageUrl: "/assets/Images/security3.png",
    title: "SSO/SAML Auth",
    description:
      "Axle supports 20+ IdPs (Google, Okta, etc) so you can authenticate using your SSO/SAML provider.",
  },
  {
    imageUrl: "/assets/Images/security4.png",
    title: "Penetration Tested",
    description:
      "Axle undergoes regular penetration testing by an independent security research firm.",
  },
  {
    imageUrl: "/assets/Images/security5.png",
    title: "Data Encryption",
    description:
      "Axle encrypts all data in our platform in transit and at rest, using best in class encryption techniques.",
  },
  {
    imageUrl: "/assets/Images/security6.png",
    title: "Access Controls",
    description:
      "Axle provides fine-grained role types and permissions to ensure users have the appropriate levels of access.",
  },
];

const SecurityFeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="py-12 bg-white">
      <motion.div
        className="container mx-auto px-4 lg:px-28"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl lg:text-5xl text-[#024957] font-bold text-left mb-8"
          variants={itemVariants}
        >
          Enterprise Grade Security and Compliance
        </motion.h1>
        <motion.div
          className="h-1 w-48 lg:w-[500px] bg-[#024957] mt-2 mb-10"
          variants={itemVariants}
        ></motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {securityFeatures.map((feature: Feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                width={64}
                height={64}
              />
              <h3 className="mt-4 mb-2 text-[#024957] font-semibold">
                {feature.title}
              </h3>
              <p className="text-[#024957]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SecurityFeaturesSection;

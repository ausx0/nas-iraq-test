"use client";
import {
  BrainCog,
  Contact,
  DollarSign,
  Mail,
  Recycle,
  Share,
  Video,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";

const OurService = () => {
  const t = useTranslations("HomePage");

  // Data for the services
  const services = [
    {
      icon: <DollarSign size={80} />,
      title: "Branding ",
      description: "Random text", // Add descriptions in your translation files
    },
    {
      icon: <Recycle size={80} />,
      title: "Marketing strategy",
      description: "Random text",
    },
    {
      icon: <Contact size={80} />,
      title: "Content writing",
      description: "Random text to fill the space",
    },
    {
      icon: <Video size={80} />,
      title: "Video making",
      description: "Random text to fill the space",
    },
    {
      icon: <Mail size={80} />,
      title: "Email Marketing",
      description: "Random text to fill the space",
    },
    {
      icon: <Share size={80} />,
      title: "Social media managing",
      description: "Random text to fill the space",
    },
  ];

  // Animation variants for the service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Hover effects
  const hoverEffects = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col px-4 gap-4 md:gap-6 text-center container mx-auto">
      <h1 className="text-2xl md:text-6xl">{t("OurService")}</h1>
      <h3 className="text-muted text-lg md:text-2xl">
        {t("OurServiceDescription")}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-14 px-6 my-6 md:mt-16 md:pt-16">
        {services.map((service, index) => (
          <motion.div
            className="flex flex-col md:justify-center md:items-center gap-6"
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: false }} // Allow multiple triggers when scrolling
          >
            <motion.div
              className="flex flex-col items-center text-center p-1 bg-white rounded-lg shadow-lg h-auto w-full max-w-xs hover:shadow-xl transition-shadow duration-300 ease-in-out"
              whileHover="hover"
              variants={hoverEffects} // Add hover effects
            >
              <div className="relative w-full aspect-square flex justify-center items-center">
                <div className="bg-primary size-full flex justify-center items-center rounded-full">
                  {service.icon}
                </div>
              </div>
            </motion.div>
            <h3 className="text-lg md:text-2xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="text-gray-400 md:text-lg">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurService;

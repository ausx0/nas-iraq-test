"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for the images
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-16 mx-4 md:mx-16 lg:mx-24 xl:mx-32 py-12">
      {/* Left Column - Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-snug">
          <TextGenerateEffect words={t("HomePage.HeroText")} />
        </h1>
        <p className="text-lg md:text-xl mt-4 md:mt-6 opacity-0 animate-fadeIn">
          {t("HomePage.HeroDescription")}
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start gap-4 animate-fadeIn">
          <motion.div variants={buttonVariants} whileHover="hover">
            <Button
              className="w-full md:w-auto py-7"
              size="lg"
              radius="full"
              color="primary"
            >
              {t("JoinUs")}
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Button
              className="w-full md:w-auto py-7"
              size="lg"
              radius="full"
              variant="bordered"
            >
              {t("ContactUs")}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Right Column - Image Grid */}
      <div className="flex-1 hidden sm:flex flex-col gap-4 mt-8 md:mt-0">
        {/* Top Image */}
        <motion.div
          className="relative w-full h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover="hover"
        >
          <Image
            src="/Hero1.png"
            alt="Top Image"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>

        {/* Bottom Images - Grid */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/Hero2.png"
              alt="Bottom Left Image"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/Hero3.png"
              alt="Bottom Right Image"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

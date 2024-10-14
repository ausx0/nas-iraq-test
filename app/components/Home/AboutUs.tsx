"use client";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const t = useTranslations();

  // Function to style every third word in the description
  const formatDescription = () => {
    const description = t("HomePage.AboutUsDescription");
    const words = description.split(" ");
    return words.map((word, index) => {
      if ((index + 1) % 5 === 0) {
        return (
          <span key={index} className="text-primary">
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  return (
    <div className="text-center sm:h-screen desktop-lines sm:items-center sm:justify-center flex flex-col gap-16">
      <div className="flex flex-col gap-8 px-4">
        <h1 className="text-2xl sm:text-7xl sm:font-bold">
          {t("HomePage.AboutUs")}
        </h1>
        <h3 className="sm:container sm:font-thin sm:mx-auto sm:px-8 sm:text-3xl">
          {formatDescription()}
        </h3>
      </div>
      <div className="flex px-2 my-4 flex-col sm:w-72">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col"
        >
          <Button
            color="secondary"
            className="py-7 sm:text-2xl"
            radius="full"
            variant="bordered"
          >
            {t("ReadMore")}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;

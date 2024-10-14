"use client";
import DotIcon from "@/public/icons/DotIcon";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CompanyPhilosophy = () => {
  const t = useTranslations("HomePage");

  const items = [
    {
      rate: 20,
      name: "Branches",
    },
    {
      rate: 1200,
      name: "Clients",
    },
    {
      rate: 315,
      name: "Sales Representatives",
    },
    {
      rate: 200,
      name: "Number of Employees",
    },
  ];

  // Animation function for counting
  const useCountUp = (target: number, startCounting: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCounting) return;

      let start = 0;
      const duration = 2; // duration in seconds
      const stepTime = Math.abs(Math.floor((duration * 1000) / target));
      const timer = setInterval(() => {
        if (start < target) {
          start++;
          setCount(start);
        } else {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, [target, startCounting]);

    return count;
  };

  return (
    <div className="flex flex-col gap-6 px-10 md:px-16 container mx-auto">
      <div>
        <h1 className="flex items-center gap-2 text-primary">
          <span>
            <DotIcon />
          </span>
          <span>{t("CompanyPhilosophy")}</span>
        </h1>
        <Divider className="my-4 bg-[#D9DEDD]" />
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:justify-center md:items-center">
        <div className="flex flex-col gap-6 md:flex-1">
          <h1 className="text-primary text-4xl md:text-8xl font-medium text-start pr-14">
            {t("CompanyPhilosophyTitle")}
          </h1>
          <h1 className="text-muted text-lg">
            {t("CompanyPhilosophyDescription")}
          </h1>
        </div>
        <div className="grid gap-8 grid-cols-2 md:grid-cols-1 md:pr-12  md:flex-1">
          {items.map((item, index) => {
            const [startCounting, setStartCounting] = useState(false);
            const count = useCountUp(item.rate, startCounting);

            return (
              <motion.div
                key={index}
                className="flex flex-col gap-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                onViewportEnter={() => setStartCounting(true)} // Start counting when in view
                onViewportLeave={() => setStartCounting(false)} // Reset counting when out of view (optional)
                viewport={{ once: false }} // Allow multiple triggers when scrolling
              >
                <h1 className="text-2xl text-right md:text-6xl">{count}+</h1>
                <h1 className="text-muted text-right">{item.name}</h1>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompanyPhilosophy;

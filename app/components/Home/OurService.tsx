import { useTranslations } from "next-intl";
import React from "react";

const OurService = () => {
  const t = useTranslations("HomePage");
  // Data for the services
  const services = [
    {
      icon: "sd",
      title: "Branding ",
      description: "Random text", // Add descriptions in your translation files
    },
    {
      icon: "sd",
      title: "Marketing strategy",
      description: "Random text",
    },
    {
      icon: "sd",
      title: "content writing ",
      description: "Random text to fill the space",
    },
    {
      icon: "sd",
      title: "Video making ",
      description: "Random text to fill the space",
    },
    {
      icon: "sd",
      title: "Email Marketing",
      description: "Random text to fill the space",
    },
    {
      icon: "sd",
      title: "social media managing",
      description: "Random text to fill the space",
    },
  ];
  return (
    <div className="flex flex-col px-4 gap-4 text-center">
      <h1 className="text-2xl">{t("OurService")}</h1>
      <h3 className="text-muted text-lg">{t("OurServiceDescription")}</h3>
      <div className="grid grid-cols-2 gap-14 px-6 my-6">
        {services.map((service, index) => (
          <div className="flex flex-col gap-6" key={index}>
            <div className="flex flex-col items-center text-center p-1 bg-white rounded-lg shadow-lg h-auto w-full max-w-xs">
              <div className="relative w-full aspect-square flex justify-center items-center">
                <div className="bg-primary size-full flex justify-center items-center rounded-full">
                  {service.icon}
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default OurService;

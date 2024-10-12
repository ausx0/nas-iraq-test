import React from "react";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="mx-2   flex pt-16  flex-col gap-12 text-center ">
      <h1 className="font-bold px-2 text-3xl">
        <TextGenerateEffect words={t("HomePage.HeroText")} />
      </h1>
      <div className="px-6 text-lg opacity-0 animate-fadeIn ">
        {t("HomePage.HeroDescription")}
      </div>
      <div className="flex flex-col animate-fadeIn  gap-2">
        <Button className="py-7" size="lg" radius="full" color="primary">
          {t("JoinUs")}
        </Button>
        <Button className="py-7" size="lg" radius="full" variant="bordered">
          {t("ContactUs")}
        </Button>
      </div>
    </div>
  );
};

export default Hero;

import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

const AboutUs = () => {
  const t = useTranslations();
  return (
    <div className="text-center  flex flex-col gap-16 ">
      <div className="flex flex-col gap-8 px-4 ">
        <h1 className="text-2xl">{t("HomePage.AboutUs")}</h1>
        <h3>{t("HomePage.AboutUsDescription")}</h3>
      </div>
      <div className="flex px-2 my-4 flex-col ">
        <Button
          color="secondary"
          className="py-7"
          radius="full"
          variant="bordered"
        >
          {t("ReadMore")}
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;

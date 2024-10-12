import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { InfinteScrollItems } from "@/app/Data/InfinteScrollItems";
import { useTranslations } from "next-intl";

const OurPartners = () => {
  const t = useTranslations();
  return (
    <div className="text-center mt-6  text-lg">
      <h1>{t("OurPartners")}</h1>
      <InfiniteMovingCards
        items={InfinteScrollItems}
        direction="right"
        speed="normal"
      />
    </div>
  );
};

export default OurPartners;

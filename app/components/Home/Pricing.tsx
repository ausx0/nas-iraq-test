import React from "react";
import { useTranslations } from "next-intl";
import { PricingCard } from "../ui/PricingCard";

const Pricing = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="px-6 text-center flex flex-col gap-8">
      <h1 className="font-bold text-3xl md:text-4xl">{t("PricingTitle")}</h1>
      <h1 className="text-muted text-lg md:text-xl">
        {t("PricingDescription")}
      </h1>

      {/* Container for Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mx-auto gap-6">
        <PricingCard
          title="Intro"
          description="Introductory account with basic features."
          price="29"
          discount="$20"
          buttonText="Get Started"
        />
        <PricingCard
          title="Base"
          description="Base account with HD video uploading and business solutions."
          price="59"
          discount="$30"
          buttonText="Choose Base"
        />
        <PricingCard
          title="Pro"
          description="Pro account gives you freedom with uploading HD videos and can also meet all your business needs."
          price="123"
          discount="$40"
          buttonText="Try 1 month"
        />
        <PricingCard
          title="Enterprise"
          description="Enterprise account with advanced business solutions."
          price="199"
          discount="$50"
          buttonText="Contact Sales"
        />
      </div>
    </div>
  );
};

export default Pricing;

import { Button, Input } from "@nextui-org/react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const FooterComponent = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-8 px-4 py-6 mt-14 container mx-auto">
      {/* Title and Description */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="font-medium text-2xl">{t("FooterTitle")}</h1>
        <p className="font-light text-lg text-[#F8F8F8]">
          {t("FooterDescription")}
        </p>
      </div>

      {/* Email Subscription Section */}
      <div className="flex gap-2 flex-col md:flex-row">
        <Input
          radius="full"
          size="lg"
          placeholder={t("YourEmail")}
          className="flex-1"
        />
        <Button
          radius="full"
          size="lg"
          className="bg-black text-white mt-2 md:mt-0 md:ml-2"
        >
          {t("RegisterNow")}
        </Button>
      </div>

      {/* Company and Help Center Sections */}
      <div className="flex flex-row md:flex-row md:justify-between md:mt-6">
        {/* Company Information */}
        <div className="flex-1">
          <Image src="/logo.png" alt="" width="100" height="100" />
          <h3 className="font-semibold mb-3">{t("The company")}</h3>
          <ul className="space-y-2">
            <li>{t("Who are we")}</li>
            <li>{t("Services")}</li>
            <li>
              {t("Jobs")} <span className="ml-1">12</span>
            </li>
            <li>{t("Branches")}</li>
          </ul>
        </div>

        {/* Help Center */}
        <div className="flex-1 mt-4 md:mt-0">
          <h3 className="font-semibold mb-3">{t("Help center")}</h3>
          <ul className="space-y-2">
            <li>{t("Common questions")}</li>
            <li>{t("Contact us")}</li>
            <li>{t("Register as merchant")}</li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex flex-col md:flex-row md:justify-between w-40 md:w-full md:items-center mt-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <Button className="bg-white flex justify-start bg-opacity-20 my-2 py-2 px-4 rounded-full">
            <div className="rounded-full flex items-center gap-4 p-2 bg-white">
              <Facebook color="#8E44AD" />
            </div>
            <span className="text-white">{t("Facebook")}</span>
          </Button>
          <Button className="bg-white flex justify-start bg-opacity-20 my-2 py-2 px-4 rounded-full">
            <div className="rounded-full flex items-center gap-4 p-2 bg-white">
              <Instagram color="#8E44AD" />
            </div>
            <span className="text-white">{t("Instagram")}</span>
          </Button>
          <Button className="bg-white flex justify-start bg-opacity-20 my-2 py-2 px-4 rounded-full">
            <div className="rounded-full flex items-center gap-4 p-2 bg-white">
              <Linkedin color="#8E44AD" />
            </div>
            <span className="text-white">{t("Linkedin")}</span>
          </Button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center px-4 md:px-16 text-sm my-6 font-thin opacity-80 text-white">
        {t("CopyRights")}
      </div>
    </div>
  );
};

export default FooterComponent;

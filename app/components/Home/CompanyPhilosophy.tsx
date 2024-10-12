import DotIcon from "@/public/icons/DotIcon";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

const CompanyPhilosophy = () => {
  const t = useTranslations("HomePage");

  const items = [
    {
      rate: "20+",
      name: "Branches",
    },
    {
      rate: "1,200+",
      name: "Clients",
    },
    {
      rate: "315+",
      name: "Sales Representative",
    },
    {
      rate: "200+",
      name: "Number of Employees",
    },
  ];

  return (
    <div className=" flex flex-col gap-6 px-10">
      <div>
        <h1 className="flex items-center gap-2 text-primary">
          <span>
            {" "}
            <DotIcon />{" "}
          </span>{" "}
          <span>{t("CompanyPhilosophy")}</span>
        </h1>
        <Divider className="my-4 bg-[#D9DEDD]" />
      </div>
      <h1 className="text-primary text-4xl font-medium text-start pr-14">
        {t("CompanyPhilosophyTitle")}
      </h1>
      <h1 className="text-muted text-lg">
        {t("CompanyPhilosophyDescription")}
      </h1>
      <div className="grid gap-8 grid-cols-2">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h1 className="text-2xl">{item.rate}</h1>
            <h1 className="text-muted">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPhilosophy;

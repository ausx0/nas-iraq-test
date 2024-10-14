import { newsItems } from "@/app/Data/NewsItems";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const News = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col items-center px-4 py-4 rounded-lg w-full mx-auto">
      <h1 className="text-2xl font-semibold text-white mb-6">News</h1>

      {/* Main News Section and Additional News Cards */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-4">
        {/* Main News Section */}
        <div className="flex-1 mb-6">
          <div className="relative w-full h-48">
            <Image
              src="/news-image-1.png" // Replace with your image path
              alt="Main news"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex gap-2 mt-3">
            <button className="bg-white text-black px-3 py-1 rounded-full text-sm">
              Company
            </button>
            <button className="bg-white text-black px-3 py-1 rounded-full text-sm">
              Contract
            </button>
          </div>
          <p className="text-white text-lg mt-4">
            We specialize in fostering effective partnerships with supportive
            companies to drive mutual success.
          </p>
          <p className="text-muted text-md mt-4">
            We are committed to building effective partnerships with supportive
            companies, contributing to an advanced, more innovative, and growing
            sector through diversification, operations, and technological
            innovation.
          </p>
        </div>

        {/* Additional News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 flex-1">
          {newsItems.map((newsItem) => (
            <div
              key={newsItem.id}
              className="flex flex-col rounded-lg shadow-lg p-4"
            >
              <div className="relative w-full h-32">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-white text-lg mt-2">{newsItem.title}</h2>
              <div className="flex gap-2 mt-2">
                {newsItem.tags.map((tag, index) => (
                  <button
                    key={index}
                    className="bg-white text-black px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show all news button */}
      <div className="flex flex-col w-full my-4 px-2 max-w-4xl">
        <Button size="lg" radius="full" color="primary">
          {t("ShowAllNews")}
        </Button>
      </div>
    </div>
  );
};

export default News;

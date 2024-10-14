import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../ui/Carousel/Carousel";
import { SLIDES } from "@/app/Data/Slides";

const OPTIONS: EmblaOptionsType = { loop: false };
// const SLIDE_COUNT = 5;
const CarouselHomePage = () => {
  return (
    <div className="bg-primary p-4 ">
      <div className=" p-4">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default CarouselHomePage;

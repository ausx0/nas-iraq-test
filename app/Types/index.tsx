import { EmblaOptionsType } from "embla-carousel";

// Interface to use for cards pricing props
export interface IPricingCardProps {
  title: string;
  description: string;
  price: string;
  discount: string;
  buttonText: string;
}

export type SlideType = {
  avatar: string;
  title: string;
  description: string;
};

export type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

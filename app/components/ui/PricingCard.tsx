"use client";
import { IPricingCardProps } from "@/app/Types";
import React, { useState, useRef } from "react";
import { Button } from "@nextui-org/react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const PricingCard: React.FC<IPricingCardProps> = ({
  title,
  description,
  price,
  discount,
  buttonText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleCard}
      className={`w-full bg-[#1A1A1A] text-white rounded-lg cursor-pointer transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? "shadow-lg" : ""
      }`}
      style={{
        height: isOpen
          ? `${contentRef.current!.scrollHeight + 80}px` // adding extra space for the header height
          : "60px", // collapsed height including header
      }}
    >
      {/* Toggle Header */}
      <div
        className="flex justify-between items-center px-4 py-3 bg-[#1A1A1A]"
        style={{
          backgroundColor: isOpen ? "#8E44AD" : "#1A1A1A", // Changing background color based on open state
        }}
      >
        <h2
          className={`font-semibold flex gap-4 items-center text-lg transition-colors ${
            isOpen ? "text-white" : "text-primary"
          }`}
        >
          {title}
          <div
            style={{
              opacity: isOpen ? 1 : 0,
            }}
            className="flex items-center justify-between  transition-all duration-500 ease-in-out"
          >
            <span className="bg-white text-xs text-[#8E44AD] px-2 py-1 rounded font-semibold">
              Save {discount}
            </span>
          </div>
        </h2>
        <span
          className={`${
            isOpen ? "bg-white bg-opacity-20" : "bg-[#8E44AD]"
          } rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300`}
        >
          {!isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </span>
      </div>

      {/* Expanded Section */}
      <div
        ref={contentRef}
        className="px-4 py-4 bg-[#8E44AD] transition-all duration-500 ease-in-out"
        style={{
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="text-white text-sm mb-4">{description}</p>
        <div className="flex items-end justify-between">
          <p className="text-white text-2xl font-bold">
            ${price}
            <span className="text-md font-thin"> /month</span>
          </p>
          <Button className="bg-white text-[#8E44AD] font-semibold py-2 px-4 rounded-lg">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

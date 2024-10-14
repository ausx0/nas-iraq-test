"use client";
import React from "react";

import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    // Ensure that animation starts only after the element is mounted
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [scope, animate, filter, duration]);

  const renderWords = () => {
    return (
      <div ref={scope} className="">
        {wordsArray.map((word, idx) => {
          const isGradient = idx >= wordsArray.length - 3; // Apply gradient to the last three words
          return (
            <span
              key={word + idx}
              className={cn(
                "text-3xl md:text-5xl lg:text-6xl dark:text-white text-white opacity-0",
                isGradient && "gradient-text" // Conditional class for gradient
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

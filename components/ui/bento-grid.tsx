"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./magicButton";
import { IoCopyOutline, IoDownloadOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("kaqyword2304@gmail.com");
    setCopied(true);
  };

  // ✅ UBAH PATH CV DI SINI (file harus ada di /public)
  const CV_HREF = "/cv/CV_Muhammad Rifki Anandita.pdf"; // contoh: "/cv/Muhammad-Rifki-Anandita-CV.pdf"

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        backgroundColor: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 3 && "flex justify-center"} h-full`}>
        {/* Background image */}
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={typeof title === "string" ? title : "bento-image"}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {/* Spare image */}
        <div
          className={cn(
            "absolute right-0 -bottom-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt="spare-image"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {/* Special animated background for id === 3 */}
        {id === 3 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        {/* Content */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-72 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 mt-2">
            {title}
          </div>

          {/* Optional header/icon slot (kalau kamu pakai) */}
          {header}
          {icon}

          {/* Globe for id === 2 */}
          {id === 2 && <GlobeDemo />}

          {/* ✅ Download CV button for id === 1 (kanan) */}
          {id === 1 && (
            <div className="mt-5 flex justify-end z-20">
              <a href={CV_HREF} download>
                <MagicButton
                  title="Download CV"
                  icon={<IoDownloadOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                />
              </a>
            </div>
          )}

          {/* Copy email section for id === 3 */}
          {id === 3 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0 pointer-events-none">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidyMid slice",
                    },
                  }}
                  height={120}
                  width={120}
                />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

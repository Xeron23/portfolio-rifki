"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { IoCopyOutline, IoDownloadOutline } from "react-icons/io5";
import { gridItems } from "@/data";
import { Reveal } from "./ui/Reveal";

const Grid = () => {
  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-24" aria-labelledby="about-title">
      <Reveal>
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title" className="section-title">Systems that feel <em>simple</em> to use.</h2>
      </Reveal>
      <div className="mt-10 grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
        {gridItems.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08} className={item.id === 1 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}>
            <motion.article
              className={`surface group flex min-h-[220px] h-full flex-col justify-between p-6 sm:p-8 ${item.id === 1 ? "lg:min-h-[470px]" : ""}`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              {item.id === 1 && item.img ? (
                <div className="relative mb-8 h-44 overflow-hidden rounded-xl border border-white/10 bg-[#0c1425] sm:h-56">
                  <Image src={item.img} alt="Abstract portrait illustration" fill className="object-cover object-center opacity-75 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1425] via-transparent to-transparent" />
                </div>
              ) : null}
              <div className="relative z-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#65e8df]">0{item.id} / signal</p>
                <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">{item.title}</h3>
                {item.description ? <p className="mt-4 max-w-xl text-sm leading-6 text-[#aab5d1]">{item.description}</p> : null}
              </div>
              {item.id === 1 ? <a href="/cv/CV_Muhammad Rifki Anandita.pdf" download className="focus-ring shine-button relative z-10 mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-[#65e8df]/30 bg-[#65e8df]/10 px-4 py-3 text-sm font-semibold text-[#65e8df]">Download CV <IoDownloadOutline aria-hidden="true" /></a> : null}
              {item.id === 2 ? <div className="relative z-10 mt-8 flex items-center gap-2 text-sm text-white/50"><span className="h-2 w-2 rounded-full bg-[#ffb86b]" /> Flexible with time zone communications</div> : null}
              {item.id === 3 ? <CopyEmailButton /> : null}
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

function CopyEmailButton() {
  const email = "kaqyword2304@gmail.com";
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard?.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return <button type="button" className="focus-ring shine-button relative z-10 mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-4 py-3 text-sm font-semibold text-[#d2c4ff]" onClick={() => void copyEmail()}><IoCopyOutline aria-hidden="true" /> {copied ? "Email copied" : "Copy my email"}</button>;
}

export default Grid;

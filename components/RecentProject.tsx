"use client";

import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link?: string;
};

const RecentProjects = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  // Close modal with ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div id="projects" className="py-15">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item: Project) => {
          const href =
            item.link && item.link.trim().length > 0
              ? item.link.startsWith("http")
                ? item.link
                : `https://${item.link}`
              : "#";

          return (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title={item.link ?? ""} href={href}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>

                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  {/* READ MORE button (opens modal) */}
                  <button
                    type="button"
                    className="flex justify-center items-center group"
                    onClick={(e) => {
                      // biar klik tombol ini nggak ngikut "klik card/link" dari container
                      e.preventDefault();
                      e.stopPropagation();
                      setSelected(item);
                      setOpen(true);
                    }}
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple group-hover:underline">
                      Read more
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </button>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {open && selected && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#13162D] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4"
                    style={{ backgroundColor: "#13162D" }}>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {selected.title}
              </h2>

              <button
                type="button"
                className="rounded-md bg-white/10 px-3 py-2 text-white/80 hover:bg-white/15"
                onClick={closeModal}
              >
                Close
              </button>
            </div>

            <p className="mt-4 text-white/80 leading-relaxed">
              {selected.des}
            </p>

            {/* optional: tech icons preview in modal */}
            <div className="mt-6 flex items-center flex-wrap gap-2">
              {selected.iconLists.map((icon, idx) => (
                <div
                  key={idx}
                  className="border border-white/[.12] rounded-full bg-black/40 w-9 h-9 flex justify-center items-center"
                >
                  <img src={icon} alt="tech" className="p-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;

"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="data:image/jpeg;base64,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"
              alt="Akash kumar"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Akash.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://drive.google.com/file/d/1diHAakJ2WNRXEKUG9iEFd91I5fIUuqJP/view?usp=sharing"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/nitianakash/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/i-m-akash"
          target="_blank"
        >
          
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

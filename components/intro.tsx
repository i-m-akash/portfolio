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
              src="data:imagejpeg;base64,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"
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
        <span className="font-bold">Hi, I'm Akash.</span> I'm a{" "}
        <span className="font-bold">Software Engineer</span> with{" "}
        <span className="font-bold">1 year</span> of experience developing{" "}
        <span className="font-bold">high-quality web and mobile applications</span>
        . I love building products that are{" "}
        <span className="font-bold">fast, reliable, and user-focused</span>.
        
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

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a Full Stack Engineer and Computer Science graduate from{" "}
        <span className="font-medium">NIT Uttarakhand</span>. I work as a{" "}
        <span className="font-medium">Freelancer</span> and have delivered
        several end-to-end projects, turning ideas into scalable, real-world
        solutions.
        <br />
        <br />
        With a keen interest in coding and all things tech-related, I am
        passionate about web development and constantly strive to learn new
        skills in this area. Additionally, my enthusiasm for{" "}
        <span className="font-medium">
          Data Structures and Algorithms (DSA)
        </span>{" "}
        drives me to be an avid learner, continuously enhancing my knowledge and
        expertise in this field.
      </p>
    </motion.section>
  );
}

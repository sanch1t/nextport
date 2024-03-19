import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero" >
      <motion.h1
        className="hero-title"
        style={{ paddingLeft: '12px' }} 
        initial={{ opacity: 0, y: 5, scale: 8 }} 
        animate={{ opacity: 1, y: 0, scale: 2 }}
        transition={{
          duration: 0.666,
          ease: "easeInOut",
          delay: 0.1,
        }}
      >
        i am
      </motion.h1>

      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        SANCHIT.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        and I am a webapp connoisseur.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        I&apos;m a frontend developer with expertise in creating top-notch
        digital experiences.
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Check my latest project out"
          link="https://wraite.vercel.app"
        />
      </motion.div>
    </div>
  );
}

export default Hero;

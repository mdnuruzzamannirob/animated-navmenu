import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./index.css";
import { opacity } from "../../anim";

export default function Index({ src, isActive }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className="imageContainer"
    >
      <Image src={`/images/${src}`} fill={true} alt="image" />
    </motion.div>
  );
}

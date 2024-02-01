/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav";
import "./index.css";

export default function index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="header">
      <div className="bar">
        <Link href="/">Olivier</Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="el"
        >
          <div className={`burger ${isActive && "burgerActive"}`}></div>
          <div className="label">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="background"
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}

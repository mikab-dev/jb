import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {}

const hover = {
  scale: 1.2,
  transition: {
    duration: 0.2,
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const Nav = (props: Props) => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center  text-green-pastel font-main-menu text-2xl"
    >
      {" "}
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 ml-40 mt-3 cursor-pointer dropdown inline px-4 font-bold  uppercase tracking-wide relative"
      >
        <Link href="/pour-qui">POUR QUI ?</Link>
      </motion.li>
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 mt-3 cursor-pointer "
      >
        <Link href="/pour-quoi">POUR QUOI ?</Link>
      </motion.li>
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 mt-3 cursor-pointer dropdown inline px-4 font-bold  uppercase tracking-wide relative"
      >
        <Link href="/localisation">Où ?</Link>
      </motion.li>
      <Link href="/tarifs">
        <motion.li
          whileHover={hover}
          variants={item}
          className="mr-12 mt-3 cursor-pointer "
        >
          <Link href="/realisations">RÉALISATIONS</Link>
        </motion.li>
      </Link>
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 mt-3 cursor-pointer "
      >
        CONTACTEZ-MOI
      </motion.li>
    </motion.ul>
  );
};

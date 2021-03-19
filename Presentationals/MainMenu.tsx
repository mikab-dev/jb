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
      className="flex items-center  text-white font-main-menu "
    >
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 ml-40 mt-3 cursor-pointer  hover:underline"
      >
        POUR QUI ?
      </motion.li>
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 mt-3 cursor-pointer hover:underline"
      >
        POUR QUOI ?
      </motion.li>
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 mt-3 cursor-pointer hover:underline"
      >
        TARIFS
      </motion.li>
      <Link href="/Bordeaux">
        <motion.li
          whileHover={hover}
          variants={item}
          className="mr-12 mt-3 cursor-pointer hover:underline"
        >
          BORDEAUX
        </motion.li>
      </Link>
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 mt-3 cursor-pointer hover:underline"
      >
        LANGON
      </motion.li>
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 mt-3 cursor-pointer hover:underline"
      >
        CONTACTEZ-MOI
      </motion.li>
    </motion.ul>
  );
};

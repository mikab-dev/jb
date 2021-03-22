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
      {" "}
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 ml-40 mt-3 cursor-pointer dropdown inline px-4 font-bold text-base uppercase tracking-wide relative"
      >
        <Link href="/pour-qui">POUR QUI ?</Link>
        <div className="dropdown-menu mt-0 absolute hidden h-auto flex">
          <ul className="block w-full bg-blue-deep  shadow p-4 text-xs">
            <Link href="/pour-qui/femme-enceinte">
              <li className="py-1">
                <a className="block text-white font-bold text-xs uppercase hover:text-white cursor-pointer">
                  Femme Enceinte
                </a>
              </li>
            </Link>
            <Link href="/pour-qui/enfant-et-nourrisson">
              <li className="py-1">
                <a className="block text-white font-bold uppercase hover:text-white cursor-pointer">
                  Nourrisson
                </a>
              </li>
            </Link>
            <Link href="/pour-qui/enfant-et-nourrisson">
              <li className="py-1">
                <a className="block text-white font-bold uppercase hover:text-white cursor-pointer">
                  Enfant
                </a>
              </li>
            </Link>
            <Link href="/pour-qui/sportif">
              <li className="py-1">
                <a className="block text-white font-bold uppercase hover:text-white cursor-pointer">
                  Sportif
                </a>
              </li>
            </Link>
            <Link href="/pour-qui/adulte-et-senior">
              <li className="py-1">
                <a className="block text-white font-bold uppercase hover:text-white cursor-pointer">
                  Adulte
                </a>
              </li>
            </Link>
            <Link href="/pour-qui/adulte-et-senior">
              <li className="py-1">
                <a className="block text-white font-bold uppercase hover:text-white cursor-pointer">
                  Senior
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </motion.li>
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 mt-3 cursor-pointer "
      >
        POUR QUOI ?
      </motion.li>
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 mt-3 cursor-pointer "
      >
        TARIFS
      </motion.li>
      <Link href="/bordeaux">
        <motion.li
          whileHover={hover}
          variants={item}
          className="mr-12 mt-3 cursor-pointer "
        >
          BORDEAUX
        </motion.li>
      </Link>
      <motion.li
        whileHover={hover}
        variants={item}
        className="mr-12 mt-3 cursor-pointer "
      >
        LANGON
      </motion.li>
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

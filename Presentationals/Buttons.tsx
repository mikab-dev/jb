import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {}

const Buttons = (props: Props) => {
  return (
    <div>
      <Link href="/localisation">
        <motion.button
          animate={{ scale: [0, 0, 0, 0, 1] }}
          transition={{ duration: 0.75 }}
          className="mr-5 bg-white rounded-full py-3 px-6 text-green-pastel transition delay-250 hover:text-white hover:bg-green-pastel focus:outline-none border-2 border-opacity-75 border-green-pastel font-main-menu"
        >
          <a>ENTRER</a>
        </motion.button>
      </Link>
      <Link href="/contact">
        <motion.button
          animate={{ scale: [0, 0, 0, 0, 1] }}
          transition={{ duration: 0.9 }}
          className="mr-5 bg-white rounded-full py-3 px-6 text-green-pastel transition delay-250 hover:text-white hover:bg-green-pastel focus:outline-none border-2 border-opacity-75 border-green-pastel font-main-menu"
        >
          <a>CONTACT</a>
        </motion.button>
      </Link>
    </div>
  );
};

export default Buttons;

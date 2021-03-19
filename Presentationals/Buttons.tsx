import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {}

const Buttons = (props: Props) => {
  return (
    <div>
      <Link href="/Bordeaux">
        <motion.button
          animate={{ scale: [0, 0, 0, 0, 1] }}
          transition={{ duration: 0.75 }}
          className="mr-5 bg-white rounded-full py-3 px-6 text-blue-500 transition delay-250 hover:text-white hover:bg-blue-500 focus:outline-none border-2 border-opacity-75 border-blue-500 font-main-menu"
        >
          <a>BORDEAUX</a>
        </motion.button>
      </Link>
      <Link href="/Langon">
        <motion.button
          animate={{ scale: [0, 0, 0, 0, 1] }}
          transition={{ duration: 0.9 }}
          className="mr-5 bg-white rounded-full py-3 px-6 text-blue-500 transition delay-250 hover:text-white hover:bg-blue-500 focus:outline-none border-2 border-opacity-75 border-blue-500 font-main-menu"
        >
          <a>LANGON</a>
        </motion.button>
      </Link>
    </div>
  );
};

export default Buttons;

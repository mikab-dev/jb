import React from "react";
import { motion } from "framer-motion";

interface Props {}

const Buttons = (props: Props) => {
  return (
    <div>
      <motion.button
        animate={{ scale: [0, 0, 0, 1] }}
        transition={{ duration: 1 }}
        className="mr-5 bg-white rounded-full py-3 px-6 text-blue-500 transition delay-250 hover:text-white hover:bg-blue-500 focus:outline-none border-2 border-opacity-75 border-blue-500"
      >
        BORDEAUX
      </motion.button>
      <motion.button
        animate={{ scale: [0, 0, 0, 1] }}
        transition={{ duration: 1.35 }}
        className="mr-5 bg-white rounded-full py-3 px-6 text-blue-500 transition delay-250 hover:text-white hover:bg-blue-500 focus:outline-none border-2 border-opacity-75 border-blue-500"
      >
        LANGON
      </motion.button>
    </div>
  );
};

export default Buttons;

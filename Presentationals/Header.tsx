import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Nav } from "./MainMenu";

interface Props {}

export const Header = (props: Props) => {
  return (
    <div className="bg-blue-500">
      <div className="container mx-auto">
        <motion.div className="flex justify-between w-746">
          <Image
            src="/logo.webp"
            alt="Jean-Baptiste Ostéopathe"
            width={276}
            height={81}
            className="mr-8"
          />
          <Nav />
        </motion.div>
      </div>
    </div>
  );
};

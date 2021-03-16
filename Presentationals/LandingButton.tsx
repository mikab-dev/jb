import { NextPage } from "next";
import { motion } from "framer-motion";

interface IProps {
  text: string;
}

const LandingButton: NextPage<{ text: IProps }> = (props) => {
  return (
    <motion.div
      className="w-150 text-lg bg-gray-300"
      animate={{
        scale: [0, 1, 1, 2, 5, 0],
        rotate: [0, 0, 270, 270, 360, 360, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        opacity: 0.5,
      }}
      transition={{
        duration: 1000,
        ease: "easeInOut",
        times: [0, 0.9, 10, 10, 10, 10, 10, 1],
        loop: 2,
        repeatDelay: 5,
      }}
    >
      {props.text}
    </motion.div>
  );
};

export default LandingButton;

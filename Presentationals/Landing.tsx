import Buttons from "./Buttons";
import LandingTitle from "./LandingTitle";
import { motion } from "framer-motion";

const Landing: React.FC = () => {
  return (
    <div className="bg-blue-deep w-full h-screen flex justify-center items-center flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ scale: [0, 0, 1], opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="rounded-full h-96 w-96 bg-white flex justify-center items-center flex-col shadow-xl"
      >
        <LandingTitle text="test" />
        <div className="m-10">
          <Buttons />
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;

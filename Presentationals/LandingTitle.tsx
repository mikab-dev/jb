import { NextPage } from "next";
import { motion } from "framer-motion";

interface IProps {
  text: string;
}

const LandingButton: NextPage<IProps> = ({ text }) => {
  return (
    <>
      <div className="w-150 flex flex-col items-center text-blue-500 font-extrabold">
        <p></p>
        <h1 className="text-4xl">Ostéopathe</h1>
      </div>
    </>
  );
};

export default LandingButton;

import { NextPage } from "next";
import { motion } from "framer-motion";

interface IProps {
  text: string;
}

const LandingButton: NextPage<{ text: IProps }> = (props) => {
  return (
    <>
      <div className="w-150 md:text-lg inline-flex text-blue-500 font-extrabold ">
        <h1>Ostéopathe</h1>
      </div>
    </>
  );
};

export default LandingButton;

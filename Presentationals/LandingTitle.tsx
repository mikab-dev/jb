import { NextPage } from "next";
import { motion } from "framer-motion";

interface IProps {
  text: string;
}

const LandingButton: NextPage<{ text: IProps }> = (props) => {
  return (
    <>
      <div className="w-150 md:text-lg flex flex-col items-center text-blue-500 font-extrabold ">
        <p>Jean-Baptiste Gelle</p>
        <h1>Ostéopathe</h1>
      </div>
    </>
  );
};

export default LandingButton;

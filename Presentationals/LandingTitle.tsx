import { NextPage } from "next";
import Image from "next/image";

interface IProps {
  text: string;
}

const LandingButton: NextPage<IProps> = () => {
  return (
    <>
      <div className="w-150 flex flex-col items-center text-green-pastel font-extrabold">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </div>
    </>
  );
};

export default LandingButton;

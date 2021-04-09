import React from "react";
import Image from "next/image";
import { Nav } from "./MainMenu";

interface Props {}

export const Header = (props: Props) => {
  return (
    <div className="bg-white ">
      <div className="container mx-auto">
        <div className="flex justify-between w-746 border-green-pastel border-b-4 border-solid">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="mr-8"
          />
          <Nav />
        </div>
      </div>
    </div>
  );
};

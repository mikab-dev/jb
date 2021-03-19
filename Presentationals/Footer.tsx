import React from "react";

interface Props {}

export const Footer = (props: Props) => {
  return (
    <div className="bg-blue-500 mt-6 text-white h-60 inline-flex justify-between items-center w-full">
      <div className="flex flex-col ml-12">
        <p>Ostéopathe à Bordeaux et Langon</p>
        <p>Jb@gmail.com / 05 33 06 01 27</p>
      </div>
      <div className="flex flex-col mr-12">
        <p>Mention légales</p>
        <p>© 2021 | Tous droits réservés</p>
      </div>
    </div>
  );
};

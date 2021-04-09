import React from "react";

import { GiSmartphone } from "react-icons/gi";

interface Props {}

export const Footer = (props: Props) => {
  return (
    <div className="bg-green-pastel  text-white  font-main-menu">
      <div className="container mx-auto flex justify-between items-center h-60">
        <div className="flex flex-col ml-12">
          <p>Élagage en Gironde</p>
          <p>
            <a href="mailto:Jean-Baptiste-Gelle@gmail.com?body=Contact Ostéopathe">
              joaquim-arenas@gmail.com
            </a>
            <div className="flex items-center">
              <span className="text-4xl">
                <GiSmartphone />
              </span>
              <p className="text-2xl">05 33 06 01 27</p>
            </div>
          </p>
        </div>
        <div className="flex flex-col mr-12">
          <p>Mention légales</p>
          <p>© 2021 | Tous droits réservés</p>
        </div>
      </div>
    </div>
  );
};

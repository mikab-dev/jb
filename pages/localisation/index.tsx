import React from "react";
import Image from "next/image";

interface Props {}

const index = (props: Props) => {
  return (
    <div className="bg-white mb-20 ">
      <div className="container mx-auto  flex justify-between text-center ">
        <div className="font-main-text text-gray-500 w-1/2  flex mr-10 text-1xl  mt-40 flex-col">
          <p className=" text-4xl text-green-pastel">
            150km autour de Bordeaux
          </p>
          <hr></hr>
          <p className="mt-10 ">
            Pour tout entretien <strong>Parc et Jardin</strong>,{" "}
            <strong>taille de haie</strong>, <strong>abbatage</strong> et{" "}
            <strong>élagage d'arbres dangereux</strong>,{" "}
            <strong>évacuation des végétaux</strong>,{" "}
            <strong>peinture exérieure et intérieure</strong>, traitement des
            toitures, nous nous déplaçons jusqu'à <strong>150 km</strong> autour
            de
            <strong> Bordeaux.</strong>
          </p>
        </div>
        <div className="mt-36">
          <Image
            src="/map.png"
            alt="localisation"
            width={1305}
            height={734}
            className="mr-8"
          />
        </div>
      </div>
    </div>
  );
};

export default index;

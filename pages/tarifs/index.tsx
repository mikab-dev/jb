import React from "react";
import Image from "next/image";

interface Props {}

const index = (props: Props) => {
  return (
    <div className="flex w-full justify-center mb-6 flex-col items-center">
      <div className="mt-6 flex w-4/5 h-38 border-2 border-blue-medium bg-gray-behind">
        <div>
          <Image
            src="/profil-presentation.webp"
            alt="Photo de profil"
            width={191}
            height={191}
            className="mr-8 rounded-md border-gray-400"
          />
        </div>
        <p className="font-main-text">
          Jean-Baptiste GELLÉ, ostéopathe D.O, utilise une approche en douceur
          et dans le respect de la non douleur de l'ostéopathie permet d'en
          faire bénéficier le nourrisson, les enfants, les sportifs, les
          adultes, les personnes en situation de handicap ou les personnes
          âgées. Votre ostéopathe possède plusieurs formations complémentaires :
          Diplôme Universitaire de traumatologie, pédiatrie, K-TAPING. Il
          travaille en partenariat avec l’équipe de football local : AGJA
          Football Caudéran.
        </p>
      </div>
      <div className="bg-gray-behind w-4/5 grid grid-cols-3 items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl">Consultation au cabinet</h1>{" "}
          <p className="text-blue-500 text-4xl">50€</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl">
            Consultation à domicile{" "}
            <p className="text-2xl">(en fonction de la distance)</p>
          </h1>
          <p className="text-blue-500 text-4xl"> 60€ - 70€</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl">Moyens de paiement</h1>
          <div className="flex justify-center items-center">
            <Image
              src="/picto-carte-bancaire.webp"
              alt="Carte de crédit"
              width={64}
              height={64}
              className="mr-8 ml-8 rounded-md border-gray-400 "
            />
            <Image
              src="/picto-espece.webp"
              alt="Monnaie"
              width={64}
              height={64}
              className="mr-8 rounded-md border-gray-400"
            />
            <Image
              src="/picto-cheque.webp"
              alt="Chèque"
              width={64}
              height={64}
              className="mr-8 rounded-md border-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

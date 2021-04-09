import React from "react";

interface Props {}

const index = (props: Props) => {
  return (
    <div className="flex justify-center mt-10 mb-24 uppercase text-2xl h-2/4">
      <p className="flex items-center justify-center w-1/4">
        Vous avez besoin de nous ? Nous pouvons faire de manière professionnel :
      </p>
      <div className="flex items-center justify-center w-1/4">
        <ul className="text-base">
          <li>- Entretien Parc et Jardin</li>
          <li>- Taille de Haie</li>
          <li>- Abbatage et élagage d'arbres dangereux</li>
          <li>- évacuation des végétaux</li>
          <li>- Peinture exérieure et intérieure</li>
          <li>- Traitement des toitures</li>
          <li>- Devis gratuit</li>
        </ul>
      </div>
    </div>
  );
};

export default index;

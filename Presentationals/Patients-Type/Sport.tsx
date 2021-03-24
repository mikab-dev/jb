import React from "react";
import Image from "next/image";

interface Props {}

const Sport = (props: Props) => {
  return (
    <div className="flex items-center justify-evenly font-main-text">
      <div>
        <div className="flex justify-around items-center">
          <h1 className="text-5xl uppercase text-blue-text mb-12 mt-12">
            Sportif{" "}
          </h1>
        </div>
        <div className="flex justify-evenly">
          <p className="w-1/2 mt-auto mb-auto ">
            Tout sportif amateur ou professionnel nécessite l’intervention de
            <strong>l’ostéopathe à Bordeaux Caudéran</strong>, Jean-Baptiste
            Gellé. Sa contribution concerne :
            <br />
            <br />
            <ul className="ml-12">
              <li>- La préparation physique </li>
              <li>- La récupération musculaire</li>
              <li>- L'accélération de la cicatrisation </li>
              <li>
                - Le traitement des traumatismes musculaire et articulaires...{" "}
              </li>
            </ul>
            <br />
            <h2 className="text-3xl">
              La préparation physique et l’optimisation des performances
            </h2>
            <br />
            Un <strong>ostéopathe pour sportif</strong> intervient à titre
            préventif en vue d’améliorer les performances des athlètes débutants
            ou de haut niveau. Lors du suivi ostéopathique, il procède à une
            <strong>préparation physique</strong> consistant à appliquer des
            techniques spécifiques. Celles-ci se rapportent notamment à
            l’adoption de touchers et de massages conditionnant les muscles, les
            articulations et le squelette pour un effort conséquent les mettant
            à rude épreuve.
            <br />
            <br />
            Un ostéopathe pour sportif établit aussi le bilan annuel d’un
            sportif professionnel. Il peut également préparer un compétiteur
            dans ses débuts dans une discipline ou lors de sa reprise sportive.
            Une <strong>amélioration des performances </strong>et de la{" "}
            <strong>puissance musculaire </strong>est apportée afin qu’il puisse
            tolérer une forte sollicitation de son système locomoteur dans les
            conditions extrêmes. <br />
            <br />
          </p>
          <Image
            src="/sport1.jpg"
            alt="Ostéopathe sport"
            width={640}
            height={456}
            className="mr-8"
          />
        </div>
        <div className="flex justify-evenly flex-row-reverse mt-32 mb-6">
          <p className="w-1/2 mt-auto mb-auto">
            <h2 className="text-3xl">
              La rééducation et le rétablissement du sportif
            </h2>
            <br />
            Bon nombre de sportifs amateurs ou professionnels subissent des
            lésions plus ou moins graves lors d’une activité sportive ayant
            fortement sollicité leur corps. Il peut s’agir de{" "}
            <strong>traumatismes musculaires et articulaires </strong>dont la
            guérison peut prendre un certain temps (de plusieurs semaines à
            plusieurs mois).
            <br />
            <br />
            L’intervention à titre curatif d’un ostéopathe est donc
            indispensable. Ses connaissances et expériences sur le soulagement
            des douleurs causées par une fracture, une entorse, ou suite à une
            opération chirurgicale permettent de réduire le temps de
            récupération. Pour ce faire, les touchers et massages réalisés ont
            pour but d’accélérer la cicatrisation. Éventuellement, les
            déséquilibres découlant de ces troubles sont corrigés.
            <br />
            <br />
            Ainsi, le suivi ostéopathique offre une plus grande sérénité aux
            compétiteurs dans leur rétablissement. Ils peuvent en ce sens
            reprendre rapidement leur activité.
          </p>
          <div>
            <Image
              src="/bobo.jpg"
              alt="Petit bobo"
              width={640}
              height={456}
              className="mr-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;

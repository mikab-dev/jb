import React from "react";
import Image from "next/image";

interface Props {}

const Baby = (props: Props) => {
  return (
    <div className="flex items-center justify-evenly font-main-text">
      <div>
        <div className="flex justify-around items-center">
          <h1 className="text-5xl uppercase text-blue-text mb-12 mt-12">
            Nourrisson & Enfant
          </h1>
        </div>
        <div className="flex justify-evenly">
          <p className="w-1/2 mt-auto mb-auto ">
            Si votre nourrisson ou enfant nécessite un suivi ostéopathique, l’
            <strong>ostéopathe à Bordeaux Caudéran</strong>, Jean-Baptiste
            Gellé, maîtrise parfaitement l’anatomie des petits de tous âges. Il
            possède les compétences indispensables pour traiter les troubles :
            <br />
            <br />
            <ul className="ml-12">
              <li>
                - Du <strong>nourrisson</strong> : traumatismes du nourrisson
                (douleurs vertébrales, déformation du crâne, plagiocéphalie,
                torticoli...), développement du nourrisson (troubles du sommeil,
                problèmes de motricité, affectivité, régurgitation, colique…) ;
              </li>
              <li>
                - De l’<strong>enfant</strong> : retard du développement
                locomoteur (trouble de la posture, déviation de la colonne
                vertébrale…), troubles de la petite enfance (trouble du sommeil,
                affections ORL, problèmes de digestion…).
              </li>
            </ul>
            <br />
            <h2 className="text-3xl">L’équilibre du nourrisson</h2>
            <br />
            Jean-Baptiste Gellé est un{" "}
            <strong>ostéopathe pour nourrisson</strong> qui traite les
            traumatismes liés à l’accouchement, notamment, la déformation
            crânienne après une péridurale ou une forte traction sur la tête, ou
            encore la conséquence de l’utilisation de forceps, ventouse ou
            spatule lors d’une césarienne. Il apporte aussi des soins destinés
            aux prématurés en réalisant des examens en douceur sur les
            différentes mobilités physiologiques du crâne, du sacrum, de
            l’abdomen, etc. Le développement du bébé en sera ainsi plus normal.
            <br />
            <br />
            Il peut également prendre en charge les troubles se manifestant lors
            de la croissance (crâne aplati ou tête en pain de sucre, torticolis
            congénital, indigestions et régurgitations, coliques, rhinites,
            bronchites, nervosité et pleurs incessants…). En effet, tout suivi
            ostéopathique est réalisable à titre préventif ou curatif. Il n’est
            donc jamais trop tard pour consulter cet{" "}
            <strong>ostéopathe à Bordeaux Caudéran</strong> pour traiter les
            problèmes touchant votre petit. <br />
            <br />
          </p>
          <Image
            src="/baby.jpg"
            alt="Ostéopathe sport"
            width={640}
            height={456}
            className="mr-8"
          />
        </div>
        <div className="flex justify-evenly flex-row-reverse mt-32 mb-6">
          <p className="w-1/2 mt-auto mb-auto">
            <h2 className="text-3xl">Le développement de l’enfant</h2>
            <br />
            Durant le développement de l’enfant, des traumatismes peuvent
            accompagner sa croissance. L’
            <strong>ostéopathe pour enfant </strong>Jean-Baptiste Gellé est un
            professionnel médical qui connaît parfaitement les maux touchant ce
            type de patient lors de ses premières années d’enfance. Il peut
            s’agir d’une déviation de la colonne vertébrale, d’un trouble
            affectant l’équilibre général et/ou la posture, de{" "}
            <strong>douleurs articulaires et musculaires</strong>, d’une
            perturbation du sommeil, d’une affection ORL… <br />
            <br />
            Dans tous les cas, il est important d’apporter une attention
            particulière à ces problèmes qui peuvent perturber la scolarité et
            les liens sociaux de l’enfant. L’intervention d’un ostéopathe
            contribue à les traiter en procurant un traitement adapté découlant
            d’un diagnostic ostéopathique précis.
          </p>
          <div>
            <Image
              src="/baby2.jpg"
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

export default Baby;

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import MenuCategoryPatient from "../MenuCategoryPatient";
interface Props {}

const Pregnant = (props: Props) => {
  return (
    <div className="flex items-center justify-evenly font-main-text">
      <div>
        <div className="justify-items-center">
          {/* <MenuCategoryPatient /> */}
        </div>
        <div className="flex justify-around items-center">
          <h1 className="text-5xl uppercase text-blue-text mb-12 mt-12">
            FEMME ENCEINTE{" "}
          </h1>
        </div>
        <div className="flex justify-evenly">
          <p className="w-1/2 mt-auto mb-auto ">
            Jean-Baptiste Gellé est un ostéopathe à Bordeaux Caudéran prenant en
            charge les différents troubles et traumatismes des{" "}
            <b>femmes enceintes </b>
            qui apparaissent avant, pendant ou après la grossesse :<br />
            <br />
            <ul className="ml-12">
              <li>- Modifications physiologiques </li>
              <li>- Troubles mécaniques </li>
              <li>- Perturbation du développement du fœtus </li>
              <li>- Problèmes post-partum… </li>
            </ul>
            <br />
            <h2 className="text-3xl">
              Les douleurs et modifications dues à la grossesse{" "}
            </h2>
            <br />
            Lorsqu’une femme tombe enceinte, elle commence à subir des
            transformations affectant son quotidien. Il s’agit entre autres des
            changements hormonaux et des modifications physiologiques se
            manifestant sur son corps. Ceux-ci entraînent des troubles :
            sciatiques, nausées, ballonnements, régurgitations, constipation,
            jambes lourdes…
            <br />
            <br />
            <strong>Le développement du fœtus</strong> n’est pas aussi sans
            conséquence. Du fait de son poids, des troubles mécaniques
            surviennent au niveau des ligaments et muscles autour du bassin. Des
            maux apparaissent tels que les douleurs du rachis (lombalgie,
            dorsalgie, cervicalgie), des nerfs sciatiques, du sacrum ou du
            coccyx. <br />
            <br />
            Si ces élancements se manifestent, le seul remède est de faire appel
            à un <strong>ostéopathe pour femme enceinte </strong> à l’instar de
            Jean-Baptiste Gellé qui dispose d’un cabinet d’ostéopathie à
            Bordeaux Caudéran. Le traitement qui y est prodigué est adapté en
            fonction du diagnostic ostéopathique réalisé sur le patient. Il a
            pour objectif d’atténuer tous ces traumatismes qui ne sont que les
            conséquences de la grossesse.
          </p>
          <Image
            src="/pregnant.jpg"
            alt="Femme Enceinte"
            width={640}
            height={456}
            className="mr-8"
          />
        </div>
        <div className="flex justify-evenly flex-row-reverse mt-32 mb-6">
          <p className="w-1/2 mt-auto mb-auto">
            <h2 className="text-3xl">Le bilan post-partum de la femme</h2>
            <br />
            Le <strong>bilan post-partum</strong> est une étape importante après
            l’accouchement. Il a pour but de restaurer les fonctions du bassin
            après une gestation qui a duré 9 mois et qui a complètement modifié
            son corps. Sans cette intervention, des douleurs lombaires et
            pelviennes ou de l’incontinence urinaire et anale fonctionnelle
            peuvent apparaître. D’où la nécessité d’un{" "}
            <strong>ostéopathe pour femme enceinte</strong>.
            <br />
            <br />
            Votre ostéopathe à Bordeaux Caudéran procède dans ce cas à la
            <strong> préparation à la rééducation périnéale</strong>. Lors de
            cette opération, le bassin et le plancher pelvien sont réadaptés. Le
            périnée subit également une rééducation. L’objectif est de
            reconditionner les muscles et ligaments au niveau de l’appareil
            reproducteur afin que ce dernier puisse accueillir une nouvelle
            grossesse et se préparer à un autre accouchement.
          </p>
          <div>
            <Image
              src="/pregnant-left.jpg"
              alt="Femme Enceinte"
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

export default Pregnant;

import React from "react";
import Image from "next/image";

interface Props {}

const AdultAndElders = (props: Props) => {
  return (
    <div className="flex items-center justify-evenly font-main-text">
      <div>
        <div className="flex justify-around items-center">
          <h1 className="text-5xl uppercase text-blue-text mb-12 mt-12">
            Adulte & Sénior{" "}
          </h1>
        </div>
        <div className="flex justify-evenly">
          <p className="w-1/2 mt-auto mb-auto ">
            Jean-Baptiste Gellé est un ostéopathe à Bordeaux Caudéran prenant
            pour
            <strong> adulte</strong> et pour <strong>sénior.</strong> Ses
            interventions ostéopathiques permettent de soigner ou de soulager :
            <br />
            <br />
            <ul className="ml-12">
              <li>- Les troubles musculo-squelettiques </li>
              <li>
                - Le <strong>mal de dos </strong>(dorsalgie, lombalgie…)
              </li>
              <li>- La perte de mobilité </li>
              <li>- Les troubles fonctionnels </li>
            </ul>
            <br />
            <h2 className="text-3xl">
              Les douleurs et traumatismes du quotidien{" "}
            </h2>
            <br />
            Pour tout adulte, le quotidien est une suite continuelle de devoirs
            et d’obligations. De la préparation du petit déjeuner au
            raccompagnement des enfants à l’école en passant par le ménage, la
            fatigue physique se fait ressentir au bout d’un moment. Des douleurs
            articulaires et musculaires, un coup de lapin, un mal de dos, une
            entorse… peuvent survenir.
            <br />
            <br />
            Consulter un <strong>ostéopathe pour adulte</strong> est donc de
            mise afin que ce professionnel médical puisse apporter les
            traitements adéquats pour une remise en forme. La procédure se fait
            selon le protocole de soin habituel qui commence par une anamnèse
            suivie d’un diagnostic. Des conseils sont aussi prodigués pour
            améliorer le rétablissement et éviter la réapparition de ces
            différents troubles.. <br />
            <br />
            <h3 className="text-2xl">Les troubles liés au travail</h3>
            <br />
            Certains postes de travail consistent souvent en des mouvements
            presque mécaniques qui, à la longue, fatiguent le corps. Des
            <strong> troubles musculo-squelettiques </strong>entraînant un
            dysfonctionnement physique. Cependant, ces maux ne doivent pas être
            négligés et exigent l’attention d’un ostéopathe.
            <br />
            <br />
            <strong>L’ostéopathe à Bordeaux Caudéran</strong>, Jean-Baptiste
            Gellé, a pour rôle d’apporter une meilleure qualité de vie au
            patient atteint de TMS. Pour ce faire, il calme les tensions pouvant
            le gêner dans son travail. Une technique spécifique aux problèmes
            est appliquée afin de les corriger comme il se doit.
          </p>
          <Image
            src="/adulte.jpg"
            alt="Ostéopathe traitant la nuque"
            width={640}
            height={456}
            className="mr-8"
          />
        </div>
        <div className="flex justify-evenly flex-row-reverse mt-32 mb-6">
          <p className="w-1/2 mt-auto mb-auto">
            <h2 className="text-3xl">La perte de mobilité du sénior</h2>
            <br />
            La <strong>perte de mobilité</strong> est l’une des conséquences de
            la dégénérescence des tissus chez les personnes âgées. Un{" "}
            <strong>ostéopathe pour senior</strong> est donc requis pour limiter
            cette diminution des fonctions. Le suivi ostéopathique qu’il réalise
            permet de restaurer partiellement ou totalement la capacité à se
            mouvoir de ce type de patient. De la polyarthrite à l’arthrose, tout
            est traité de manière méthodique.
            <br />
            <br />
            L’objectif est de redonner la pleine maîtrise des petits gestes au
            quotidien pour limiter la dépendance à une assistance et éviter les
            chutes accidentelles.
          </p>
          <div>
            <Image
              src="/elder.jpg"
              alt="Senior avec un ostéopathe"
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

export default AdultAndElders;

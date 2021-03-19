import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface Props {}

const Bordeaux = (props: Props) => {
  return (
    <div className="bg-white ">
      <div className="container mx-auto  flex justify-between text-center ">
        <div className="font-main-text text-gray-500 w-1/2 items-center flex justify-center ml-36 text-1xl  mt-40 flex-col">
          <p>
            Ostéopathe à Bordeaux Caudéran, Jean-Baptiste Gellé traite divers
            troubles physiques et physiologiques. Il prend en charge tout type
            de patient : <strong>femme enceinte</strong>,{" "}
            <strong>nourrisson</strong>, <strong>enfant</strong>,{" "}
            <strong>sportif</strong>, <strong>adulte</strong> et{" "}
            <strong>senior</strong>.
          </p>
          <h1 className="text-4xl font-bold mt-6 mb-6 uppercase text-blue-800">
            Où ?
          </h1>
          <p className="mb-6">
            Toutes ses consultations sont réalisées dans son cabinet situé au{" "}
            <strong>7 rue Pierre Loti</strong> à{" "}
            <strong>Bordeaux Caudéran</strong>, en face de la{" "}
            <strong>Clinique Bel-Air</strong>, accessible par le{" "}
            <strong>bus</strong> (lignes <strong>1</strong> et{" "}
            <strong>41</strong>).
          </p>
          Apud cuncta inrequietis erigentes alente apud capiti alente morem
          perciti feris sola morem apud sane amphitheatrali capiti peius motibus
          occultis praedatricibus haec inrequietis praeter iactitabant in quidem
          Isauri vehementer perciti Isauri quidam sunt eorum Pisidiae usitatum
          morem excursibus haec eorum motibus inopinis pernicies praedatricibus
          cuncta saepeque quidem diversis sunt oppidum.
        </div>
        <div className="mt-36">
          <Image
            src="/bordeaux.jpg"
            alt="Ostéopathe Bordeaux"
            width={500}
            height={300}
            className="mr-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Bordeaux;

import React from "react";
import AdultAndElders from "../../Presentationals/Patients-Type/AdultAndElders";
import Baby from "../../Presentationals/Patients-Type/Baby";
import Pregnant from "../../Presentationals/Patients-Type/Pregnant";
import Sports from "../../Presentationals/Patients-Type/Sport";

interface Props {}

const index = (props: Props) => {
  return (
    <div>
      <div>
        <AdultAndElders />
      </div>
      <div className="mt-8">
        <Baby />
      </div>
      <div className="mt-8">
        <Pregnant />
      </div>
      <div className="mt-8">
        <Sports />
      </div>
    </div>
  );
};

export default index;

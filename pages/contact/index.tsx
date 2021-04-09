import React from "react";

interface Props {}

const index = (props: Props) => {
  return (
    <div className="flex items-center justify-center mt-10 mb-10 flex-col h-2/4">
      <p className="text-3xl">
        Pour toutes informations n'hésitez pas à nous appeler, le devis est
        gratuit au :{" "}
      </p>
      <p className="text-5xl"> 05 33 06 01 27</p>
    </div>
  );
};

export default index;

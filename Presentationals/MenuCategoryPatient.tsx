import React from "react";

interface Props {}

const MenuCategoryPatient = (props: Props) => {
  return (
    <div className="flex">
      <ul className="flex flex-row">
        <li className="mr-1"> Adulte / Sénior - </li>
        <li className="mr-1"> Enfant / Nourrisson - </li>
        <li className="mr-1"> Femme Enceinte - </li>
        <li className="mr-1"> Sportif</li>
      </ul>
    </div>
  );
};
export default MenuCategoryPatient;

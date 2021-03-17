import Link from "next/link";
import React from "react";

interface Props {}

const Bordeaux = (props: Props) => {
  return (
    <div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default Bordeaux;

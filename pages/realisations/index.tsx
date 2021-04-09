import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

interface Props {}

const index = (props: Props) => {
  return (
    <div className="mt-10">
      <Carousel infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
        <div>
          <Image src="/haie01.jpg" alt="logo" width={600} height={800} />
        </div>
        <div>
          <Image src="/haie02.jpg" alt="logo" width={600} height={800} />
        </div>
        <div>
          <Image src="/haie03.jpg" alt="logo" width={1067} height={800} />
        </div>
        <div>
          <Image src="/haie04.jpg" alt="logo" width={1067} height={800} />
        </div>
        <div>
          <Image src="/jardin.jpg" alt="logo" width={600} height={800} />
        </div>
        <div>
          <Image src="/haie06.jpg" alt="logo" width={1067} height={800} />
        </div>
      </Carousel>
    </div>
  );
};

export default index;

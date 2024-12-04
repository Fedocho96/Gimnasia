import React from "react";
import { galery } from "../Constants";

const Galery = () => {
  return (
    <section id="Galery">
      <h2 className="mt-4 py-3 text-center text-4xl tracking-tighter lg:text-5xl">
        Galeria
      </h2>
      <div className="container mx-auto px-4">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 md:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {galery.map((item, index) => (
            <img src={item.image} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galery;

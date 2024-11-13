import React from "react";
import styles from "./NewCollection.module.scss";
import collection1Img from "../../assets/images/collection1.png";
import collection2Img from "../../assets/images/collection2.png";
import collection3Img from "../../assets/images/collection3.png";

const NewCollection = () => {
  return (
    <section className="w-full h-max flex  justify-center relative">
      <div className="absolute top-0 left-0 w-full h-[50%] bg-secondary-light"></div>
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-secondary-dark"></div>
      <div className="max-w-container w-[90%] flex flex-col justify-between items-center py-32 space-y-28">
        <h2 className="uppercase md:2xl:text-5xl text-3xl z-10">
          New Collection
        </h2>
        <div className="flex justify-between gap-20 w-full overflow-hidden">
          <a href="#" className="block">
            <img
              src={collection1Img}
              className="h-auto transform transition duration-200 hover:scale-105"
              alt="Category 1"
            />
          </a>
          <a href="#" className="block">
            <img
              src={collection2Img}
              className="h-auto transform transition duration-200 hover:scale-105"
              alt="Category 2"
            />
          </a>
          <a href="#" className="block">
            <img
              src={collection3Img}
              className="h-auto transform transition duration-200 hover:scale-105"
              alt="Category 3"
            />
          </a>
        </div>
        <p className="z-10 text-center w-4/5 md:2xl:text-[2.5rem] text-3xl tracking-widest min-w-80 max-w-7xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </section>
  );
};

export default NewCollection;

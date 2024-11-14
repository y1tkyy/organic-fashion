import React from "react";
import styles from "./NewCollection.module.scss";
import collection1Img from "../../assets/images/collection1.png";
import collection2Img from "../../assets/images/collection2.png";
import collection3Img from "../../assets/images/collection3.png";

const NewCollection = () => {
  return (
    <section
      className={`w-full h-max flex justify-center  ${styles.background}`}
    >
      <div className="max-w-container w-full flex flex-col justify-between items-center md:py-32 py-16 md:space-y-28 space-y-12">
        <h2 className="uppercase md:2xl:text-5xl md:text-3xl text-xl z-10">
          New Collection
        </h2>
        <div className="flex justify-between md:gap-20 gap-10 w-full overflow-hidden">
          <a href="#" className="block">
            <img src={collection1Img} className="h-auto" alt="Category 1" />
          </a>
          <a href="#" className="block">
            <img src={collection2Img} className="h-auto" alt="Category 2" />
          </a>
          <a href="#" className="block">
            <img src={collection3Img} className="h-auto" alt="Category 3" />
          </a>
        </div>
        <p className="z-10 text-center w-4/5 md:2xl:text-[2.5rem] md:text-3xl text-sm tracking-widest min-w-80 max-w-7xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </section>
  );
};

export default NewCollection;

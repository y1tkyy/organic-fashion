import React from "react";
import styles from "./NewCollection.module.scss";
import collection1Img from "../../assets/images/collection1.png";
import collection2Img from "../../assets/images/collection2.png";
import collection3Img from "../../assets/images/collection3.png";
import { useSelector } from "react-redux";

const NewCollection = () => {
  const collectionData = useSelector(
    (state) => state.siteData.data.home?.newCollection
  );

  if (!collectionData) return null;

  const { title, collections, paragraph } = collectionData;

  return (
    <section
      className={`w-full h-max flex justify-center  ${styles.background}`}
    >
      <div className="max-w-container w-full flex flex-col justify-between items-center md:py-32 py-16 md:space-y-28 space-y-12">
        <h2 className="uppercase md:2xl:text-5xl md:text-3xl text-xl z-10">
          {title}
        </h2>
        <div className="flex justify-between md:gap-20 gap-10 w-full overflow-hidden">
          {collections.map((item, index) => (
            <a href={item.href} className="block" key={index}>
              <img src={item.src} className="h-auto" alt={item.alt} />
            </a>
          ))}
        </div>
        <p className="z-10 text-center w-4/5 md:2xl:text-[2.5rem] md:text-3xl text-sm tracking-widest min-w-80 max-w-7xl">
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default NewCollection;

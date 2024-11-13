import React from "react";
import styles from "./CategorySection.module.scss";
import category1Img from "../../assets/images/category1.png";
import category2Img from "../../assets/images/category2.png";
import category3Img from "../../assets/images/category3.png";
import category4Img from "../../assets/images/category4.png";
import category5Img from "../../assets/images/category5.png";

const CategorySection = () => {
  return (
    <section className="w-full">
      <h2 className="uppercase md:2xl:text-5xl text-3xl text-center mt-16 mb-12">
        Shop By Categories
      </h2>
      <div className="flex justify-between gap-4 w-full overflow-hidden">
        <a href="#" className="block">
          <img
            src={category1Img}
            className="h-auto scale-100 transform transition duration-200 hover:scale-105"
            alt="Category 1"
          />
        </a>
        <a href="#" className="block">
          <img
            src={category2Img}
            className="h-auto transform transition duration-200 hover:scale-105"
            alt="Category 2"
          />
        </a>
        <a href="#" className="block">
          <img
            src={category3Img}
            className="h-auto transform transition duration-200 hover:scale-105"
            alt="Category 3"
          />
        </a>
        <a href="#" className="block">
          <img
            src={category4Img}
            className="h-auto transform transition duration-200 hover:scale-105"
            alt="Category 4"
          />
        </a>
      </div>
      <div>
        <img
          src={category5Img}
          className="h-auto block mt-4 w-full"
          alt="Category 5"
        />
      </div>
    </section>
  );
};

export default CategorySection;

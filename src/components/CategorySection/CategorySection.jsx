import React from "react";
import styles from "./CategorySection.module.scss";
import { useSelector } from "react-redux";

const CategorySection = () => {
  const categoryData = useSelector(
    (state) => state.siteData.data.home?.categorySelection
  );

  if (!categoryData) return null;

  const { title, categories, breakImg } = categoryData;

  return (
    <section className="w-full flex items-center flex-col">
      <h2 className="uppercase md:2xl:text-5xl text-3xl text-center md:mt-16 md:mb-12 my-10">
        {title}
      </h2>
      <div className="flex justify-between gap-4 w-full max-w-[1920px] overflow-hidden">
        {categories.map((item, index) => (
          <a href={item.href} className="block" key={index}>
            <img
              src={item.src}
              className="h-auto transform transition duration-200 hover:scale-105"
              alt={item.alt}
            />
          </a>
        ))}
      </div>
      <div className="w-full">
        <img
          src={breakImg.src}
          className="h-auto block mt-4 w-full"
          alt={breakImg.alt}
        />
      </div>
    </section>
  );
};

export default CategorySection;

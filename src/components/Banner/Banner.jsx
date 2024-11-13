import React from "react";
import styles from "./Banner.module.scss";
import bannerImg from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <section className="w-full flex items-center justify-center h-max bg-secondary md:2xl:pb-40 pb-36 pt-5">
      <div className="flex max-w-container md:lg:w-[90%] w-full">
        <div className="w-2/5 flex items-center justify-center block pl-10">
          <img src={bannerImg} alt="Banner Flower Pot" className="h-auto" />
        </div>
        <div className="w-3/5 justify-center md:2xl:space-y-16 space-y-10 flex flex-col md:2xl:ml-24 ml-10">
          <h1 className="uppercase md:2xl:text-8xl text-5xl tracking-widest">
            Organic Fashion
          </h1>
          <p className="md:2xl:text-4xl text-xl md:2xl:max-w-4xl max-w-xl pr-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="hover:bg-secondary-dark w-fit duration-500 uppercase md:2xl:py-6 md:2xl:pr-24 md:2xl:pl-12 py-3 px-6 text-xl max-w-72 min-w-52 tracking-widest bg-buttons rounded-[60px] text-white">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

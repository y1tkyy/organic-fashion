import React from "react";
import styles from "./Banner.module.scss";
import bannerImg from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center h-max bg-secondary md:2xl:pb-40 md:pb-30 md:pt-5 pb-16">
      <h1 className="uppercase md:hidden md:2xl:text-8xl md:text-5xl text-[2.125rem] pb-3 tracking-widest text-center">
        Organic Fashion
      </h1>
      <div className="flex md:flex-row max-w-container md:lg:w-[90%] w-full  justify-end flex-row-reverse ">
        <div className="md:w-2/5 w-1/2 flex items-center justify-center md:pl-10 relative overflow-hidden">
          <img
            src={bannerImg}
            alt="Banner Flower Pot"
            className="md:h-auto md:block md:static absolute left-0 md:max-w-full max-w-[360px]"
          />
        </div>

        <div className="md:w-3/5 w-1/2 justify-center md:2xl:space-y-16 md:space-y-10 flex flex-col md:2xl:ml-24 md:ml-10 ml-8 pb-20">
          <h1 className="uppercase md:2xl:text-8xl hidden md:block text-5xl tracking-widest">
            Organic Fashion
          </h1>
          <p className="md:2xl:text-4xl md:text-xl text-sm md:2xl:max-w-4xl max-w-xl pr-2 pb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="hover:bg-secondary-dark w-fit duration-500 uppercase md:2xl:py-6 md:2xl:pr-24 md:2xl:pl-12 py-2 px-10 md:text-xl text-[13px] max-w-72 md:min-w-52 tracking-widest bg-buttons rounded-[60px] text-white">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

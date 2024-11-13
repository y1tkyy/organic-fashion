import React from "react";
import styles from "./AboutUs.module.scss";
import aboutUsImg from "../../assets/images/aboutus.png";

const AboutUs = () => {
  return (
    <section className="w-full flex items-center justify-center h-fit">
      <div className="flex max-w-container w-[90%] py-28">
        <div className="md:w-1/4 w-full flex items-center ">
          <img
            src={aboutUsImg}
            alt="AboutUsImg plant"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[70%] ml-24 flex flex-col ">
          <h2 className="uppercase md:2xl:text-5xl text-3xl tracking-widest font-bold">
            About Us
          </h2>
          <div className="space-y-2 my-14">
            <p className="md:2xl:text-4xl md:2xl:text-xl max-w-2xl md:2xl:max-w-6xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="md:2xl:text-4xl md:2xl:text-xl max-w-2xl md:2xl:max-w-6xl ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <button className="uppercase hover:bg-secondary-light duration-200 md:2xl:px-10 md:2xl:py-5 px-1 py-3 md:2xl:text-4xl text-xl max-w-[22rem] min-w-52 tracking-widest border-[5px] border-buttons rounded-[10px]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

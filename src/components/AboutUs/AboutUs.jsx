import React from "react";
import styles from "./AboutUs.module.scss";
import aboutUsImg from "../../assets/images/aboutus.png";

const AboutUs = () => {
  return (
    <section className="w-full flex items-center justify-center h-fit px-9">
      <div className="flex max-w-container md:py-28 py-10 gap-x-16">
        <div className="md:w-1/4 w-full flex items-center md:block hidden">
          <img
            src={aboutUsImg}
            alt="AboutUsImg plant"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full  flex flex-col md:items-start items-center space-y-6">
          <h2 className="uppercase md:2xl:text-5xl text-3xl tracking-widest font-bold md:text-left text-center">
            About Us
          </h2>
          <div className="md:space-y-2 space-y-10 my-14">
            <p className="md:2xl:text-4xl md:2xl:text-xl text-base max-w-2xl md:2xl:max-w-6xl md:text-left text-center">
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
            <div className="md:w-1/4 w-full flex items-center md:hidden container px-6 ">
              <img
                src={aboutUsImg}
                alt="AboutUsImg plant"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="md:2xl:text-4xl md:2xl:text-xl max-w-2xl md:2xl:max-w-6xl md:text-left  text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <button className="uppercase hover:bg-secondary-light duration-200 w-fit md:2xl:px-10 md:2xl:py-5 px-1 md:py-3 py-1 md:2xl:text-4xl md:text-xl text-base max-w-[22rem] min-w-52 tracking-widest border-[5px] border-buttons rounded-[10px]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

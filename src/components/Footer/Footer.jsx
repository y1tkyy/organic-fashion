import React from "react";
import styles from "./Footer.module.scss";
import footerImg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <section
      className={`w-full  flex items-center justify-center h-fit ${styles.background}`}
    >
      <div className=" flex w-full max-w-container my-16 md:flex-row flex-col">
        <div className="md:w-3/5 justify-center md:2xl:items-center flex flex-col md:2xl:px-40 md:py-24 md:px-16 px-12">
          <h2 className="hidden">About Us</h2>
          <form
            action=""
            className="flex flex-col h-full justify-center w-full"
          >
            <h3 className="uppercase md:2xl:text-5xl tracking-widest font-bold text-3xl md:text-left text-center">
              Follow Us
            </h3>
            <div className="flex flex-col space-y-2 my-12 items-center ">
              <label htmlFor="" className="hidden"></label>
              <input
                type="text"
                className="border-[5px] border-buttons w-full bg-secondary-light focus:border-secondary-dark duration-200 rounded-[10px] focus:outline-none placeholder:text-black text-black md:2xl:placeholder:text-4xl md:2xl:text-4xl placeholder:text-xl text-xl pb-11 pl-1"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="" className="hidden"></label>
              <input
                type="email"
                className="border-[5px] border-buttons w-full bg-secondary-light rounded-[10px] focus:border-secondary-dark duration-200 focus:outline-none placeholder:text-black text-black md:2xl:placeholder:text-4xl md:2xl:text-4xl placeholder:text-xl text-xl  pb-11 pl-1"
                id="email"
                name="email"
                placeholder="Enter a valid email address"
                required
                aria-describedby="emailHelp"
              />

              <label htmlFor="" className="hidden"></label>
              <textarea
                id="message"
                name="message"
                className="resize-none border-[5px] border-buttons w-full bg-secondary-light focus:border-secondary-dark duration-200 rounded-[10px] focus:outline-none placeholder:text-black text-black md:2xl:placeholder:text-4xl md:2xl:text-4xl placeholder:text-xl text-xl pb-2 pl-1"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            <input
              className="uppercase cursor-pointer md:m-0 m-auto px-20 py-5 w-fit hover:bg-secondary-dark duration-200 md:2xl:text-4xl text-xl tracking-widest bg-buttons rounded-[10px] text-white"
              type="submit"
            />
          </form>
        </div>
        <div className="md:w-2/5 flex items-center justify-center px-20">
          <img
            src={footerImg}
            alt="Banner Flower Pot"
            className="w-full h-full object-cover md:pt-0 pt-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;

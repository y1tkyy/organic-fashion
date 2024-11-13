import React from "react";
import styles from "./Footer.module.scss";
import footerImg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <section className="relative w-full  flex items-center justify-center h-fit">
      <div className="absolute top-0 left-0 w-[70%] h-full bg-secondary-light"></div>
      <div className="absolute top-0 right-0 w-[30%] h-full bg-secondary-dark"></div>
      <div className="relative flex w-[90%] max-w-container my-16">
        <div className="w-3/5 justify-center md:2xl:items-center flex flex-col md:2xl:px-40 py-24 px-16">
          <h2 className="hidden">About Us</h2>
          <form
            action=""
            className="flex flex-col h-full justify-center w-full"
          >
            <h3 className="uppercase md:2xl:text-5xl tracking-widest font-bold text-3xl">
              Follow Us
            </h3>
            <div className="flex flex-col space-y-2 my-12">
              <label htmlFor="" className="hidden"></label>
              <input
                type="text"
                className="border-[5px] border-buttons min-w bg-secondary-light focus:border-secondary-dark duration-200 rounded-[10px] focus:outline-none placeholder:text-black text-black md:2xl:placeholder:text-4xl md:2xl:text-4xl placeholder:text-xl text-xl pb-11 pl-1"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="" className="hidden"></label>
              <input
                type="email"
                className="border-[5px] border-buttons bg-secondary-light rounded-[10px] focus:border-secondary-dark duration-200 focus:outline-none placeholder:text-black text-black md:2xl:placeholder:text-4xl md:2xl:text-4xl placeholder:text-xl text-xl  pb-11 pl-1"
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
                className="resize-none border-[5px] border-buttons bg-secondary-light focus:border-secondary-dark duration-200 rounded-[10px] focus:outline-none placeholder:text-black text-black md:2xl:placeholder:text-4xl md:2xl:text-4xl placeholder:text-xl text-xl pb-2 pl-1"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            <input
              className="uppercase cursor-pointer px-24 py-5 w-fit hover:bg-secondary-dark duration-200 md:2xl:text-4xl text-xl tracking-widest bg-buttons rounded-[10px] text-white"
              type="submit"
            />
          </form>
        </div>
        <div className="w-2/5 flex items-center justify-center">
          <img
            src={footerImg}
            alt="Banner Flower Pot"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className="uppercase w-full flex items-center justify-center bg-secondary md:2xl:pb-20 pb-16 md:2xl:pt-20 pt-16 h-max">
      <div className="flex max-w-container w-full items-center ">
        <div className="w-2/5 flex justify-center text-[1rem] md:2xl:text-[2.25rem]">
          <a href="#">AltanSchool Web Courses</a>
        </div>
        <nav className="w-3/5 justify-center flex  text-[1rem] md:2xl:text-[2rem] pr-10">
          <ul className="flex justify-between w-full">
            <li>
              <a
                href="#"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

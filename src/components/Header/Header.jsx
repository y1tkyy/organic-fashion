import React, { useState } from "react";
import styles from "./Header.module.scss";
import MenuIcon from "../../assets/icons/menu.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerData = useSelector((state) => state.siteData.data.home?.header);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!headerData) return null;

  const { logo, nav } = headerData;

  return (
    <header className="uppercase w-full flex items-center justify-center bg-secondary md:2xl:pb-20 md:2xl:pt-20 md:py-16 py-8 h-max">
      <div className="flex max-w-container w-full items-center">
        <div className="md:w-2/5 w-4/5 flex justify-center text-[1rem] md:2xl:text-[2.25rem]">
          <a href={logo.link}>{logo.title}</a>
        </div>
        <div className="md:hidden flex w-1/5 items-center justify-center pr-5">
          <button onClick={toggleMenu} className="text-2xl">
            <img src={MenuIcon} alt="Menu Icon" />
          </button>
        </div>

        <nav className="md:w-3/5 w-1/5 justify-center md:flex text-[1rem] md:2xl:text-[2rem] pr-10 hidden">
          <ul className="flex justify-between w-full">
            {nav.links.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
        {isMenuOpen && (
          <nav className="absolute z-10 top-20 right-0 bg-secondary w-full p-5 md:hidden">
            <ul className="flex flex-col items-center space-y-4">
              {nav.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

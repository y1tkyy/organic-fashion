import React from "react";
import styles from "./Button.module.scss";

const Button = ({ type = "button", buttonText, className, ...props }) => {
  const baseClasses =
    "uppercase tracking-widest duration-500 text-base w-fit cursor-pointer";
  const buttonClass = `${baseClasses} ${className || ""}`;
  return type === "submit" ? (
    <input
      {...props}
      type="submit"
      value={buttonText}
      className={`${buttonClass} md:m-0 m-auto px-20 py-5 md:2xl:text-4xl text-xl bg-buttons rounded-[10px] text-white hover:bg-secondary-dark`}
    />
  ) : (
    <button {...props} className={buttonClass}>
      {buttonText}
    </button>
  );
};

export default Button;

import React from "react";
import classes from "./button.module.css";

const Button = (props) => {
  const { btn_color, outline, type } = props;
  return (
    <button
      className={`${classes.btn} ${outline && classes.outline}`}
      style={{ backgroundColor: btn_color }}
      type={type}
    >
      {props.children}
    </button>
  );
};

export default Button;

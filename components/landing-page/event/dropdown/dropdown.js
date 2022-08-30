import Image from "next/image";
import { useState } from "react";
import classes from "./dropdown.module.css";

function Dropdown(props) {
  const [active, setActive] = useState(false);
  return (
    <div className={classes.dropdown} onClick={() => setActive(!active)}>
      <div className={classes.label}>
        <h1>{props.title}</h1>
        <div className={`${classes.arrow} ${active && classes.active}`}></div>
      </div>
      <hr />

      <div className={`${classes.content} ${active && classes.content_active}`} >{props.children}</div>
    </div>
  );
}

export default Dropdown;

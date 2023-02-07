import Link from "next/link";
import Button from "../global/button/button";
import classes from "./benner.module.css";

function Benner() {
  return (
    <div className={classes.benner}>
      <div>
        <h2>HCIS Scholarship</h2>
        <h3>Programmer 2023</h3>
        <h5>Grade 10/IGCSE O-Level Students</h5>
        <Button outline={true}>
          <a href={"#event"}>Consult Now</a>
        </Button>
      </div>
    </div>
  );
}

export default Benner;

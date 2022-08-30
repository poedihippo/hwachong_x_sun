import Link from "next/link";
import Button from "../global/button/button";
import classes from "./benner.module.css";

function Benner() {
  return (
    <div className={classes.benner}>
      <div>
        <h2>We are excited to assist</h2>
        <h1>
          Hwa Chong International School <br />
          in launching the Full Scholarship program
          <br />
          For IB Diploma program
        </h1>
        <Button outline={true}>
          <a href={"#event"}>Learn More</a>
        </Button>
      </div>
    </div>
  );
}

export default Benner;

import { Fragment } from "react";
import Benner from "./benner";
import Event from "./event/event";
import classes from "./landingpage.module.css";
import Navigation from "./navigation";
import RegisterForm from "./register/register";

function LandingPage() {
  return (
    <Fragment>
      <Navigation />
      <section className={classes.container}>
        <Benner />
        <Event />
        <RegisterForm />
      </section>
    </Fragment>
  );
}

export default LandingPage;

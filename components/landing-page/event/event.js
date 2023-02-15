import Description from "./description";
import classes from "./event.module.css";
import Schedule from "./schedule/schedule";

function Event() {
  return (
    <section className={classes.event} id="event">
      <div className={classes.header}>
        <h1>
          We are excited to assist Hwa Chong International School in <br />
          launching the HCIS Scholarship Program 2023 for Indonesian students!
        </h1>
      </div>

      <Description />
      <Schedule />
    </section>
  );
}

export default Event;

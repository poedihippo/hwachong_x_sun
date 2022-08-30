import Image from "next/image";
import { Fragment } from "react";
import classes from "./schedule.module.css";

function Schedule() {
  return (
    <div className={classes.schedule}>
      <div className={classes.image}>
        <Image
          src={"/images/illustrator/Layer1.png"}
          width={120}
          height={120}
          layout="responsive"
          alt="layer"
        />
      </div>
      <div className={classes.description}>
        <div className={classes.title}>
          <h1>The application is OPEN NOW!</h1>
          <p>
            Submit your application to SUN Education and also check the
            important dates below:
          </p>
        </div>

        <div className={classes.image_mobile}>
          <Image
            src={"/images/illustrator/Layer1.png"}
            width={120}
            height={120}
            layout="responsive"
            alt="layer"
          />
        </div>

        <div className={classes.content}>
          {/* <h1>Scholarship Info Session</h1>
          <p>
            Saturday, 3 September 2022 <br />
            to hear from HCIS Admissions Team
          </p> */}
          <h1>Application Period</h1>
          <p>16 - 30 September 2022</p>
          <br />
          <p>
            Scholarship Award Result: <br />
            End of December 2022 (TBA)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

import React from "react";
import classes from "./navigation.module.css";
import Image from "next/image";

const Navigation = () => {
  return (
    <header className={classes.navigation}>
      <nav>
        <Image
          src={"/images/logo/Hwacong 1.png"}
          height={70}
          width={340}
          objectFit={"contain"}
          alt="hwacong"
        />
        <Image
          src={"/images/logo/x.png"}
          height={30}
          width={100}
          objectFit={"contain"}
          alt="x"
        />
        <Image
          src={"/images/logo/Sun.png"}
          height={70}
          width={180}
          objectFit={"contain"}
          alt="sun"
        />
      </nav>
    </header>
  );
};

export default Navigation;

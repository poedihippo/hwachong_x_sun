import { useEffect, useRef } from "react";
import Image from "next/image";
import classes from "./image.module.css";

function ImagePopup(props) {
  const { popup, setPopup } = props;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      // Alert if clicked on outside of element

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setPopup(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div className={classes.image_popup}>
      <div className={classes.close}>
        <Image
          src={"/images/icon/times.png"}
          width="30"
          height="30"
          alt="event benner"
        />
      </div>
      <div ref={wrapperRef} id="content">
        {props.children}
      </div>
    </div>
  );
}

export default ImagePopup;

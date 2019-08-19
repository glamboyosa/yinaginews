import React from "react";
import classes from "./ionicon.module.css";
const footer = () => (
  <footer>
    <span className={classes.span}>
      Made with <i className={["icon ion-md-heart", classes.icon].join(" ")} />{" "}
      by Timothy Ogbemudia, JavaScript Developer.
    </span>
  </footer>
);
export default footer;

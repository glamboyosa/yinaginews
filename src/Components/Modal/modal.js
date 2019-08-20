import React from "react";
import classes from "./modal.module.css";
const modal = props => (
  <div className={classes.Modal}>
    <button className={classes.div} onClick={props.clicked}>
      x
    </button>
    <p>{props.children}</p>
  </div>
);

export default modal;

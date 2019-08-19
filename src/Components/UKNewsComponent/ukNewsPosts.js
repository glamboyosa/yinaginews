import React from "react";
import classes from "./uknews.module.css";
const ukNewsPosts = props => (
  <React.Fragment>
    <div className={classes.div}>
      <h1>{props.title}</h1>
      {props.by ? <span>by {props.by}</span> : null}
      <img src={props.image} alt="articleimage" />
      <p>{props.content}</p>
      <a href={props.link}>Read full article here</a>
    </div>
  </React.Fragment>
);
export default ukNewsPosts;

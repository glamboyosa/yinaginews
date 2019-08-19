import React from "react";
import classes from "./homepost.module.css";
const homePosts = props => {
  return (
    <div className={classes.content}>
      <div className={classes.div}>
        <h1>{props.title}</h1>
        {props.by ? <span>by {props.by}</span> : null}
        <img src={props.image} alt="articleimage" />
        <p>{props.content}</p>
        <a href={props.link}>Read full article here</a>
      </div>
    </div>
  );
};
export default homePosts;

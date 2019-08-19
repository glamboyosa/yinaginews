import React from "react";
import classes from "./entertainment.module.css";
const homePosts = props => {
  return (
    <div>
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

import React from "react";
import { Link } from "react-router-dom";
import classes from "./nav.module.css";
const nav = () => {
  return (
    <header>
      <nav>
        <ul className={classes.mainNav}>
          <li>
            <Link className={classes.link} to="/">
              Yinyagi news
            </Link>
          </li>

          <li>
            <Link className={classes.link} to="/uk-news">
              UK News
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/us-news">
              US News
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/sports">
              Sports
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/entertainment">
              Entertainment & Lifestyle
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default nav;

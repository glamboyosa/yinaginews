import React, { Component } from "react";
import axios from "axios";
import classes from "./style.module.css";
import Spinner from "../../Components/UI/Spinner/Spinner";
import EntertainmentPosts from "../../Components/entertainmentComponent/entertainmentPosts";
class Entertainment extends Component {
  state = {
    news: null,
    loaded: false
  };
  componentDidMount() {
    axios
      .get(
        "/everything?q=entertainment&apiKey=43003c6359aa4341af71dcda5cc7b0e9"
      )
      .then(resp => {
        this.setState({
          news: resp.data.articles,
          loaded: true
        });
        console.log(this.state.news);
      });
  }
  render() {
    let news = <Spinner />;
    if (this.state.loaded) {
      news = this.state.news.slice(5, 13).map(el => {
        return (
          <EntertainmentPosts
            key={el.url}
            title={el.title}
            by={el.author}
            image={el.urlToImage}
            content={el.description}
            link={el.url}
          />
        );
      });
    }
    return <div className={classes.Content}>{news}</div>;
  }
}
export default Entertainment;

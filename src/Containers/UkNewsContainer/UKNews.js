import React, { Component } from "react";
import axios from "axios";
import classes from "./uknews.module.css";
import Spinner from "../../Components/UI/Spinner/Spinner";
import UKnewsPosts from "../../Components/UKNewsComponent/ukNewsPosts";
class UKNews extends Component {
  state = {
    news: null,
    loaded: false
  };
  componentDidMount() {
    axios
      .get(
        "/top-headlines?sources=bbc-news&apiKey=43003c6359aa4341af71dcda5cc7b0e9"
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
      news = this.state.news.slice(2, 10).map(el => {
        return (
          <UKnewsPosts
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
export default UKNews;

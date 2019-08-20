import React, { Component } from "react";
import axios from "axios";
import classes from "./style.module.css";
import { withRouter } from "react-router-dom";
import HomePosts from "../../Components/homeComponent/homePosts";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Modal from "../../Components/Modal/modal";
class Home extends Component {
  state = {
    news: null,
    loaded: false,
    error: false
  };
  componentDidMount() {
    axios
      .get("/top-headlines?sources=cnn&apiKey=43003c6359aa4341af71dcda5cc7b0e9")
      .then(resp => {
        this.setState({
          news: resp.data.articles,
          loaded: true
        });
        console.log(this.state.news);
      })
      .catch(e => this.setState({ error: e.message }));
  }

  reloadPage = () => {
    // console.log(this.props.history);
    window.location = "/";
  };
  render() {
    let news = <Spinner />;
    console.log(this.state.error);

    if (this.state.error) {
      news = <Modal clicked={this.reloadPage}>{this.state.error}</Modal>;
    }
    if (this.state.loaded) {
      news = this.state.news.slice(0, 8).map(el => {
        return (
          <HomePosts
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
export default withRouter(Home);

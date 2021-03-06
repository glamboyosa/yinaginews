import React, { Component } from "react";
import axios from "axios";
import classes from "./sports.module.css";
import Spinner from "../../Components/UI/Spinner/Spinner";
import SportsPosts from "../../Components/sportsComponent/sportspost";
import Modal from "../../Components/Modal/modal";
class Sports extends Component {
  state = {
    news: null,
    loaded: false,
    error: false
  };
  componentDidMount() {
    axios
      .get(
        "/everything?q=sports&domains=cnn.com&apiKey=43003c6359aa4341af71dcda5cc7b0e9"
      )
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
    window.location = "/sports";
  };
  render() {
    let news = <Spinner />;
    if (this.state.error) {
      news = <Modal clicked={this.reloadPage}>{this.state.error}</Modal>;
    }
    if (this.state.loaded) {
      news = this.state.news.slice(0, 8).map(el => {
        return (
          <SportsPosts
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
export default Sports;

import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import Repository from "../Repositorys/Repository";

class Repositorys extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const response = await axios.get(
      "https://api.github.com/users/edsonvieirademetrio/repos"
    );
    this.setState({ repos: response.data });
  };

  render() {
    const { repos } = this.state;
    return (
      <div className="repository-list">
        {repos.map(el => (
          <ul className="list" key={el.id}>
            <Repository repo={el} />
          </ul>
        ))}
      </div>
    );
  }
}

export default Repositorys;

import React, { Component } from "react";
import axios from "axios";
import "./style.css";
class Sidebar extends Component {
  state = {
    data: {},
    user: ""
  };

  componentDidMount() {
    this.getDataSidebar();
  }
  getDataSidebar = async () => {
    const response = await axios.get("https://api.github.com/users/edsonvieirademetrio");
    this.setState({ data: response.data });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="sidebar">
        <img src={data.avatar_url} alt="logo_github" className="avatar" />
        <div className="title-desc">
          <h1 className="profile-name">{data.name}</h1>
          <p className="profile-description">{data.bio}</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;

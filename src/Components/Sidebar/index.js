import React from "react";
import "./style.scss";

const Sidebar = ({ profile }) => (
  <div className="sidebar text-center justify-content-center">
    <div className="profile__avatar">      
      <img src={profile.avatar_url} alt="logo_github" className="avatar" />
    </div>
    <div className="title__desc">
      <h1 className="profile__name font-weight-bold">{profile.name}</h1>
      <p className="profile__description">{profile.bio}</p>
    </div>
  </div>
);

export default Sidebar;
import React from "react";
import "./style.scss";

const Sidebar = ({ profile }) => (
  <div className="sidebar text-center justify-content-center">
    <div className="row">
      <div className="col-4 col-sm-4 col-md-4 col-lg-12 col-xl-12 my-auto pr-0 pr-sm-0 pr-md-0 pr-lg-auto pr-xl-auto">
        <div className="profile__avatar ">      
          <img src={profile.avatar_url} alt="logo_github" className="avatar" />
        </div>
      </div>
      <div className="title__desc text-left text-sm-left text-md-left text-lg-center text-xl-center col-8 col-sm-8 col-md-8 col-lg-12 col-xl-12 my-auto pt-4 pt-sm-4 pt-md-4 pt-lg-auto pt-xl-auto">
        <h1 className="profile__name font-weight-bold">{profile.name}</h1>
        <p className="profile__description">{profile.bio}</p>
      </div>
    </div>
  </div>
);

export default Sidebar;
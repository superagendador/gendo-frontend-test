import React from "react";
import "./style.scss";
import iconStar from './images/star.png';
import iconFork from './images/fork.png';



const Repository = ({ repo }) => (
  <div className="card__respository--item">
    <a href={repo.html_url} target="blank">
      <h2 className="card__repository--title font-weight-bold">{repo.name}</h2>
    </a>
    <p className="card__repository--description">{repo.description}</p>
    <div className="row">
      <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 pr-3">
        <span className="card__repository--icon"><img src={iconStar} /></span>
        <span className="card__repository--number">{repo.stargazers_count}</span>
      </div>
      <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 pr-3">
        <span className="card__repository--icon"><img src={iconFork} /></span>
        <span className="card__repository--number">{repo.forks_count}</span>
      </div>
    </div>
  </div>
);

export default Repository;
import React from "react";
import "./style.scss";
import iconStar from './images/star.png';
import iconFork from './images/fork.png';



const Repository = ({ repo }) => (
  <div className="card__respository--item">
    <h2 className="card__repository--title font-weight-bold">{repo.name}</h2>
    <p className="card__repository--description">{repo.description}</p>
    <div className="row">
      <div className="col-1 pr-3 text-middle">
        <span><img src={iconStar} /></span>
        <span>{repo.stargazers_count}</span>
      </div>
      <div className="col-1 pr-3">
        <span><img src={iconFork} /></span>
        <span>{repo.forks_count}</span>
      </div>
    </div>
  </div>
);

export default Repository;
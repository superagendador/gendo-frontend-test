import React, { Component } from "react";
import axios from "axios";
import "./style.scss";
import Repository from "../Repositorys/Repository";
import InitialForm from "../InitialForm"
import Sidebar from "../Sidebar";

class Repositorys extends Component {
  state = {
    user:"",
    repos: [],
    profile: [],
    controlState: false,
    error: ""
  };

  getUser = user =>{

    this.setState({user})

  }
 
  getData = async () => {

    const { user } = this.state


    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );    
    this.setState({ repos: response.data, controlState: true });
    this.getDataSidebar()
  };

  getDataSidebar = async () => {

    const { user } = this.state
    
    const response = await axios.get(`https://api.github.com/users/${user}`);
    this.setState({ profile: response.data, controlState: true });
    console.log(response)
  };

  render() {
    const { user, repos, profile, error, controlState} = this.state
    if(controlState){
      return (      
        <div className="repository-list container-fluid">  
          <div className="row">
            <nav className="col-2">              
              <Sidebar profile={profile} />
            </nav>
            <main className="col-10 text-left">
              {repos.map(el => (
                <div className="card__repository" key={el.id}>
                  <Repository repo={el} />
                </div>
              ))}
            </main>
          </div>                
        </div>
      );
    }

    return(
      <div className="repository-list">
          <InitialForm
            getUser={this.getUser}
            user={user}
            error={error}
            btnAction={this.getData}
          />        
        </div>
    )
  }
}

export default Repositorys;

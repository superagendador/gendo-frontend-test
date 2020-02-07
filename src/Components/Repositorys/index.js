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
    error: "",
    search: null,
    reposCount: "",
    starred: false,
  };

  searchRepo=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  getUser = user =>{
    this.setState({user})
  }
 
  getData = async () => {
    const { user } = this.state
    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    const responseStarred = await axios.get(
      `https://api.github.com/users/${user}/starred`
    );
    if(this.state.starred == true)    {
      this.setState({ repos: responseStarred.data, controlState: true });
    }else{
      this.setState({ repos: response.data, controlState: true });
    }
    this.getDataSidebar()
  };

  getDataSidebar = async () => {
    const { user } = this.state    
    const response = await axios.get(`https://api.github.com/users/${user}`);
    this.setState({ profile: response.data, controlState: true, reposCount: response.data.public_repos });
  };

  onRepos = async () =>{
    this.setState({ starred:false });
    this.getData()
  }

  onStarred = async () => {
    this.setState({ starred:true });
    this.getData()

  }

  render() {
    const { user, repos, profile, error, controlState, reposCount} = this.state
    if(controlState){
      return (      
        <div className="repository-list container-fluid">  
          <div className="row">
            <nav className="col-2">              
              <Sidebar profile={profile} />
            </nav>
            <main className="col-10 text-left">
              <div className="repo__tab row py-2" >
                <div className="repo__tab--link col-2 text-center" onClick={this.onRepos}>
                  Repos <span className="repo__tab--count px-2">{reposCount}</span>
                </div>
                <div className="repo__tab--link col-2 text-center" onClick={this.onStarred}>
                  Starred 
                </div>
              </div>
              <div className="repo__input--search py-3">
                <input type="text" placeholder="Filter by name" onChange={(e)=>this.searchRepo(e)} />
              </div>
              {repos.filter((el)=>{
                if(this.state.search == null)
                    return el
                else if(el.name.toLowerCase().includes(this.state.search.toLowerCase()) ){
                    return el
                }
              }).map(el => (
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
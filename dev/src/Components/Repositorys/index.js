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
    search: null,
    reposCount: "",
    starred: false,
    starredNumber: '',
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
    const responseStarredNumber = await axios.get(
      `https://api.github.com/users/${user}/starred`
    );
    let starredNumber = responseStarredNumber.data.length 
    if(this.state.starred === true)    {
      this.setState({ repos: responseStarred.data, controlState: true, starredNumber: starredNumber });
      const btnOn = document.querySelector('#second')
      const btnOff = document.querySelector('#first')
      btnOn.classList.add('active')
      btnOff.classList.remove('active')
    }else{
      this.setState({ repos: response.data, controlState: true, starredNumber: starredNumber });
      const btnOn = document.querySelector('#first')
      const btnOff = document.querySelector('#second')
      btnOn.classList.add('active')
      btnOff.classList.remove('active')
    }
    this.getDataSidebar()
  };

  getDataSidebar = async () => {
    const { user } = this.state    
    const response = await axios.get(`https://api.github.com/users/${user}`);
    this.setState({ profile: response.data, controlState: true, reposCount: response.data.public_repos });
  };

  onRepos = async (e) =>{    
    this.setState({ starred:false });
    this.getData()

  }

  onStarred = async (e) => {
    this.setState({ starred:true });
    this.getData() 
  }


  render() {
    const { user, repos, profile, error, controlState, reposCount, starredNumber} = this.state
    if(controlState){
      return (      
        <div className="repository-list container-fluid">  
          <div className="row">
            <nav className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">              
              <Sidebar profile={profile} />
            </nav>
            <main className="repo__tab--main text-left col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 pl-lg-5 pl-xl-5">
              <div className="repo__tab row" >
                <div id="first" className="repo__tab--link col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center" onClick={this.onRepos}>
                  Repos <span className="repo__tab--count px-2">{reposCount}</span>
                </div>
                <div id="second" className="repo__tab--link col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center" onClick={this.onStarred}>
                  Starred <span className="repo__tab--count px-2">{starredNumber}</span>
                </div>
              </div>
              <div className="repo__input--search py-3">
                <input type="text" placeholder="&#xf002; Filter by name" onChange={(e)=>this.searchRepo(e)} style={{fontFamily: 'Open Sans, FontAwesome'}} />
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
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

class ShowProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/api/projects')
      .then(res => {
        this.setState({
          projects: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowProjectList');
      })
  };


  render() {
    const projects = this.state.projects;
    console.log("PrintProject: " + projects);
    let projectList;

    if(!projects) {
      projectList = "there is no project record!";
    } else {
      projectList = projects.map((project, k) =>
        <ProjectCard project={project} key={k} />
      );
    }

    return (
      <div className="ShowProjectList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Projects List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-project" className="btn btn-outline-warning float-right">
                + Add New Project
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {projectList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProjectList;
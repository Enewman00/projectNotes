import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8080/api/projects/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showProjectDetails-API-response: " + res.data);
        this.setState({
          project: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowProjectDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8080/api/projects/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowProjectDetails_deleteClick");
      })
  };


  render() {

    const project = this.state.project;
    let ProjectItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ project.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ project.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ project.isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ project.publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ project.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ project.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowProjectDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Project List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Project's Record</h1>
              <p className="lead text-center">
                  View Project's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { ProjectItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,project._id)}>Delete Project</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-project/${project._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Project
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Project</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Project</button> */}

        </div>
      </div>
    );
  }
}

export default showProjectDetails;
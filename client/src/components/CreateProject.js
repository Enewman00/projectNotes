import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';



class CreateProject extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title
        }

        axios
            .post('http://localhost:8080/api/projects', data)
            .then(res => {
                this.setState({
                    title: '',
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.error("Error in CreateProject!");
                console.error("Error: " + JSON.stringify(err));
            });
    };


    render() {
        return (
            <div className='CreateProject'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <br/>
                            <Link to="/" className='btn btn-outline-warning float-left'>
                                Show Project List
                            </Link>
                        </div>
                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text-center'>Add Project</h1>
                            <p className='lead text-center'>
                                Create New Project
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Title of the Project'
                                        name='title'
                                        className='form-control'
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                    

                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default CreateProject;
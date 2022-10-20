import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import { useState, useEffect } from "react";


//components
import CreateProject from './components/CreateProject';
import ShowProjectList from './components/ShowProjectList';
import ShowProjectDetails from './components/ShowProjectDetails';
import UpdateProjectInfo from './components/UpdateProjectInfo';


//functions
// import {getTest} from './functions/test'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<ShowProjectList />} />
            <Route path='/create-project' element={<CreateProject />} />
            <Route path='/edit-project/:id' element={<UpdateProjectInfo />} />
            <Route path='/show-project/:id' element={<ShowProjectDetails />} />
        </Routes>
      </BrowserRouter>
  
      // <div className="App">
      //   <h1>{data}</h1>
      // </div>
    );
  };
}

  


export default App;

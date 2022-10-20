import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProjectCard = (props) => {
    const  project  = props.project;

    return(
        <div className="card-container">
            {/* <img src="https://commapress.co.uk/projects/the-project-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" /> */}
            <div className="desc">
                <h2>
                    <Link to={`/show-project/${project._id}`}>
                        { project.title }
                    </Link>
                </h2>
                <h3>{project.author}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
};

export default ProjectCard;
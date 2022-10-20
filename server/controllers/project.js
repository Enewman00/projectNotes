const Project = require('../models/Project');

// @route GET project/test
// @description tests project route
// @access Public
exports.getTest = async (req, res) => {
    res.send('Project Route Testing!');
}

// @route GET api/projects
// @description Get all projects
// @access Public
exports.getProject = async (req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(404).json({ noprojectsfound: 'No Projects found' }));
}

// @route GET /projects/:id
// @description Get single project
// @access Public
exports.getProjectById = async (req, res) => {
    Project.findById(req.params.id)
        .then(project => res.json(project))
        .catch(err => res.status(404).json({ noprojectfound: 'No Project Found' }));
}


// @route POST  /projects
// @description add/save project
// @access Public
exports.createProject = async (req, res) => {
    Project.create(req.body)
        .then(project => res.json({ msg: 'Project added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this project' }));
}



// @route PUT /projects/:id
// @description Update project
// @access Public
exports.updateProject = async (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then(project => res.json({ msg: 'Updated Successfully' }))
        .catch(err => 
            res.status(400).json({ error: 'Unable to update the Project' })
        );
}


// @route delete /projects/:id
// @description Delete project by id
// @access Public
exports.removeProject = async (req, res) => {
    Project.findByIdAndRemove(req.params.id, req.body)
        .then(project => res.json({ msg: 'Project entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such project' }));
}
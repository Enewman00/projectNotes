const express = require('express');
const router = express.Router();


// Load Project Model
const Project = require('../../models/Project');

// Import controllers
const {getTest, getProject, getProjectById, createProject, updateProject, removeProject} = require('../../controllers/project');


// Import middlewares




// Api Routes

// @route GET project/test
// @description tests project route
// @access Public
router.get('/test', getTest);

// @route GET api/projects
// @description Get all projects
// @access Public
router.get('/', getProject);


// @route GET /projects/:id
// @description Get single project
// @access Public
router.get('/:id', getProjectById);


// @route POST  /projects
// @description add/save project
// @access Public
router.post('/', createProject);


// @route PUT /projects/:id
// @description Update project
// @access Public
router.put('/:id', updateProject);


// @route delete /projects/:id
// @description Delete project by id
// @access Public
router.delete('/:id', removeProject);



module.exports = router;
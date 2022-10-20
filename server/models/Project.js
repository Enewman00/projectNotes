const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }
});


module.exports = Project = mongoose.model('project', ProjectSchema);
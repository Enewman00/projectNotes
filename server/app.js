// Import Modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db/db');


// App
const app = express();


// DB 
connectDB();
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("Db connected"))
// .catch((err) => console.log("Db connection error:", err));



// Middleware
app.use(morgan('dev'));
app.use(cors({origin:true, credentials: true}));
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('Hello world!'));


// Routes
const projectRoutes = require('./routes/api/project');
app.use('/api/projects', projectRoutes);



// Port
const port = process.env.PORT || 8080;


// Listener
const server = app.listen(port, () => console.log(`Server is running on ${port}`));

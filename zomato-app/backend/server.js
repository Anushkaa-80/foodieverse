require('dotenv').config();
//to access the env variable we need to install dotenv and require it in server.js or it will show undefined.
const app= require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

app.listen(3000,()=>{ 
    console.log("Server running on port 3000")
})
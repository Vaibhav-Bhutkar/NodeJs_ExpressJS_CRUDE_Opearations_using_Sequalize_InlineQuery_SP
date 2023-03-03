import express from 'express';
import db from '../models';
//Route added as below
//import roleRoute from "../routes/roles";
const roleRoute = require("../routes/InlineQuery/roles");
const sequalizeRoleRoute = require("../routes/Sequalize/roles");
const spRoleRoute = require("../routes/storedprocedures/roles");

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];

const app = express();


//Middleware 
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello VB");
})

const port = process.env.PORT || 5000;

//----Listen to port and start server without db sync
app.listen(port, () => {
    console.log("Server Started");
});

app.use("/v1/api", roleRoute);
app.use("/v1/api", sequalizeRoleRoute);
app.use("/v1/api", spRoleRoute);


//----To Sync with DB
// db.sequelize.sync().then(() => {
//     app.listen(port, () => {
//         console.log("Server Started");
//     })
// });
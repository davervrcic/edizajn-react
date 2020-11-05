const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "daver",
    password:"Infodax123***",
    database: "projectsdb",

});

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req,res)=> {

    const sqlSelect = "SELECT * FROM projects";
   db.query(sqlSelect, (err, result)=> {
       res.send(result);
   });
    
    });


app.post("/api/upload", (req,res)=> {
    if(req.files === null) {
        return res.status(400).json({msg: 'no file uploaded'});
    }

    const file = req.files.file;

    file.mv(`$(__dirname)/client/public/uploads/$(file.name)`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    });

} );
    

app.post("/api/insert", (req,res)=> {

    const projectName = req.body.projectName;
    const projectYear = req.body.projectYear;
    const projectType = req.body.projectType;
    const projectUrl = req.body.projectUrl;
    const projectImage = req.body.projectImage;

   const sqlInsert = "INSERT INTO projects (projectName, projectYear, projectType, projecUrl, projectImage ) VALUES (?,?,?,?,?)";
   db.query(sqlInsert, [projectName, projectYear, projectType, projectUrl, projectImage], (err, result)=> {
       console.log(err);
   });
    
    });

app.delete("/api/delete/:projectName", (req,res)=> {
        const name = req.params.projectName;
        const sqlDelete = "DELETE FROM projects WHERE projectName = ?";

        db.query(sqlDelete, name, (err, result) => {
           if (err) console.log(err);
        });

    });

    /**app.put("/api/update", (req,res)=> {
        const name = req.body.projectName;
        const year = req.body.projectYear;
        const type = req.body.projectType;
        const url = req.body.projectUrl;
        const image = req.body.projectImage;
        const sqlUpdate = "UPDATE projects SET projectName = ? WHERE projectName = ?";

        db.query(sqlUpdate, [name, year, type, url, image], (err, result) => {
           if (err) console.log(err);
        });

    });**/
    

app.listen(3001, () => {
    console.log("runnig on port 3001");
})
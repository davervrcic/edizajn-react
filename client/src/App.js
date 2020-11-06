import React, {useState, useEffect,} from "react";
import FileUpload from "./components/FileUpload";
import './App.css';
import Axios from "axios";

const App = () => {  

  const [projectName, setProjectName] = useState();
  const [projectYear, setProjectYear] = useState();
  const [projectUrl, setProjectUrl] = useState();
  const [projectType, setProjectType] = useState();
  const [projectImage, setProjectImage] = useState();
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response)=> {
      setProjectsList(response.data)
    });
  }, []);

  const submitProject = () => {
    Axios.post("http://localhost:3001/api/insert", 
            {projectName: projectName, projectYear: projectYear, projectUrl: projectUrl, projectType: projectType, projectImage: projectImage});

            setProjectsList([...projectsList, {projectName: projectName, projectYear: projectYear, projectUrl: projectUrl, projectType: projectType, projectImage: projectImage},]);
  };

  const deleteProject = (project) => {
    Axios.delete(`http://localhost:3001/api/delete/${project}`);
  };

 return (

    
    <div className="App">

      <h1>ADD PROJECT</h1>
      <div className="form">
        <label>Project Name:</label>
        <input type="text" name="projectName" onChange={(e)=> {
          setProjectName(e.target.value)

        }}></input>

        <label>Project Year:</label>
        <input type="text" name="projectYear" onChange={(e)=> {
          setProjectYear(e.target.value)

        }}></input>

        <label>Project Url:</label>
        <input type="text" name="projectUrl" onChange={(e)=> {
          setProjectUrl(e.target.value)

        }}></input>

        <label>Project Type:</label>
        <input type="text" name="projectType" onChange={(e)=> {
          setProjectType(e.target.value)

        }}></input>

        <label>Project Image:</label>
        <input type="text" name="projectImage" onChange={(e)=> {
          setProjectImage(e.target.value)

        }}></input>


  <div className="container mt-4">
          <h4 className="display-4 text-center mb-4">
            <i className="fab fa-react"/>Image upload
         </h4>

         <FileUpload/>
  </div>

        

        <button onClick={submitProject}>Submit</button>

        {projectsList.map((val)=> {
          return (
            <div className="card">            
              <h1>{val.projectName}</h1>
              <p>{val.projectYear}</p>
              <p>{val.projectType}</p>
              <p>{val.projectUrl}</p>
              <p>{val.projectImage}</p>   

              <button onClick={() => {deleteProject(val.projectName)}}>Delete</button>
                 
            </div>

          )
        })}
      </div>
    </div>
  );
      }

export default App;

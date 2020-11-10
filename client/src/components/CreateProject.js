import React, { useState, useEffect } from "react";

import "../App.css";
import Axios from "axios";

const CreateProject = () => {
  const [projectName, setProjectName] = useState();
  const [projectYear, setProjectYear] = useState();
  const [projectUrl, setProjectUrl] = useState();
  const [projectType, setProjectType] = useState();
  const [projectImage, setProjectImage] = useState();
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setProjectsList(response.data);
    });
  }, []);

  const submitProject = () => {
    Axios.post("http://localhost:3001/api/insert", {
      projectName: projectName,
      projectYear: projectYear,
      projectUrl: projectUrl,
      projectType: projectType,
      projectImage: projectImage,
    });

    setProjectsList([
      ...projectsList,
      {
        projectName: projectName,
        projectYear: projectYear,
        projectUrl: projectUrl,
        projectType: projectType,
        projectImage: projectImage,
      },
    ]);
  };
  
  return (
    <div className="App">
    
    
            

          {projectsList.map((val) => {
            return (
              
                

                <div className="border hidden">
                  <div className="dot top left" />
                  <div className="dot top right" />
                  <div className="dot bottom left" />
                  <div className="dot bottom right" />
                  <a className="ref" href={val.projectUrl} target="_blank" rel='noreferrer noopener' style={{backgroundImage: 'url("media/work/harisdubica.jpg")'}}>
                    <div className="h1-label w10-6">{val.projectYear}</div>
                    <h3>{val.projectName}</h3>
                    <p>{val.projectType}</p>
                  </a>
         </div>
                
              
            );
          })}
        
    
    </div>
  );
};

export default CreateProject;


        
      

        
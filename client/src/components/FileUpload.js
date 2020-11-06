import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose file');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try{
            const res = await axios.post('http://localhost:3001/api/upload', formData, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            });

            const {fileName, filePath} = res.data;

            setUploadedFile({ fileName, filePath });

            setMessage('File Uploaded');

        } catch(err) {
            if (err.response.status === 500) {
                console.log("problem with a server");
            } else {
                console.log(err.response.data.msg);
            }
        }

    };

    
    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                     <div className="custom-file mb-4">
                        <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
                        <label className="custom-file-label" htmlFor="customFile">{filename}</label>
                        
                    </div>
                   
                    <input type="submit" value="upload" className="btn btn-primary btn-block mt-4"></input>
            </form>

            {uploadedFile ? ( <div className="row mt-5">
                <div className="col-md-6 m-auto">
                <h3 className="text-center">{ uploadedFile.fileName}</h3>
                <img style={{ width: '100%' }} src= { uploadedFile.filePath } alt=''/>
                </div>
            </div> ): null}
            
        </Fragment>
    )
}

export default FileUpload;

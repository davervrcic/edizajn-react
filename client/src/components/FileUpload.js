import React, { Fragment } from 'react'

const FileUpload = () => {
    return (
        <Fragment>
            <form>
                     <div className="custom-file mb-4">
                        <input type="file" className="custom-file-input" id="customFile"/>
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                    </div>

                    <input type="submit" value="upload" className="btn btn-primary btn-block mt-4"></input>
            </form>
            
        </Fragment>
    )
}

export default FileUpload;

import './DropZone.css'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function DropZone()
{
    const [files, setFiles] = useState([]);
    const onDrop = useCallback(acceptedFiles => {
        if(acceptedFiles?.length)
        {
            setFiles(prev => [
                ...prev, ...acceptedFiles.map(file => Object.assign(file, {preview: URL.createObjectURL(file)}))
            ])
        }
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className='Dropzone'>
            <div className='dropbox' {...getRootProps()}>
                <CloudUploadIcon style={{'fontSize':'60px'}}/>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            <ul>
                {files.map(file => (
                    <li key={file.name}>
                        <img src={file.preview}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DropZone;
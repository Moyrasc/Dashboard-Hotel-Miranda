import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useDispatch } from "react-redux";
import { newRoom } from "../../features/slices/roomsSlice";
import { FormContainer } from "../Users/UsersStyled";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginFileMetadata)

const NewRoom = () => {
    const [files, setFiles] = useState([])
    const dispatch = useDispatch()
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
    const handleButton = async () => {
        files.map(async file => {
            const fileConvert = await convertToBase64(file.file)
            dispatch(newRoom(fileConvert))
        })
        console.log(files)
    }

    return (
        <>
            <FormContainer>
                <div className="btn-save">
                    <button onClick={handleButton}>Enviar</button>
                </div>
                {/* <FilePond files={files} allowFileEncode={true} allowReorder={true} allowMultiple={true} onupdatefiles={(files)=>files.forEach((file)=>dispatch(newRoom(file.file)))} name="files" 
        labelIdle='Upload your images.'/> */}
                {/* <FilePond files={files} allowFileEncode={true} allowReorder={true} allowMultiple={true} onupdatefiles={(files)=>files.forEach((file)=>dispatch(newRoom(file.file.getFileEncodeBase64String())))} name='filepond' server={"/rooms/newRoom"} allowFileMetadata={true}
        labelIdle='Upload your images.'/> */}
                <FilePond files={files} allowFileEncode={true} allowReorder={true} allowMultiple={true} onupdatefiles={setFiles} name='files' server={"/rooms/newRoom"} imagePreviewHeight={400} imageCropAspectRatio={"1:1"} imageResizeTargetWidth={50}
                    imageResizeTargetHeight={50} imageResizeMode={"cover"} labelIdle='Upload your images.' />

            </FormContainer>
        </>
    )
}
export default NewRoom
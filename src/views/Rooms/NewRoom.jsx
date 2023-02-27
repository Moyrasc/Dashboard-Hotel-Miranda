import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import { useDispatch } from "react-redux";
import { newRoom } from "../../features/slices/roomsSlice";
import { FormContainer } from "../Users/UsersStyled";
import { Input, InputContainer } from "../Login/LoginStyled";
import { ContainerNewRoom } from "./RoomsStyled";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginFileMetadata)

const NewRoom = () => {
    const [files, setFiles] = useState([])
    const [newRoomForm, setNewRoomForm] = useState({
        id: '',
        name: '',
        floor: '',
        roomNumber: '',
        offer: 0 ,
        price: 0,
        cancellation:'',
        description:'',
        type: '',
        facilities:'',
        photos: []
    })
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
        
    //     const newRoomForm = {
    //         id: '1',
    //         name: 'Room Suite',
    //         floor: "Floor-1",
    //         roomNumber: "130",
    //         offer: 30,
    //         price: 145,
    //         cancellation:"",
    //         description:"",
    //         type: 'Double bed',
    //         facilities:"",
    //         photos: []
    // }
        files.map(async file => {
            const fileConvert = await convertToBase64(file.file)
            newRoomForm.photos.push({img: fileConvert})
            
        })
        dispatch(newRoom(newRoomForm))
        console.log(files)
        
    }

    return (
        <ContainerNewRoom>
            <FormContainer>
                <InputContainer>
                    <label>Room Name</label>
                        <Input type="text" value={newRoomForm.name} onChange={e => setNewRoomForm(e.target.value)}/>
                </InputContainer>
                <InputContainer>
                    <label>Room Floor</label>
                        <Input type="text" value={newRoomForm.floor} onChange={e => setNewRoomForm(e.target.value)}/>
                </InputContainer>
                <InputContainer>
                    <label>Room Number</label>
                        <Input type="number" value={newRoomForm.roomNumber} onChange={e => setNewRoomForm(e.target.value)}/>
                </InputContainer>
                <InputContainer>
                    <label>Offer</label>
                        <Input type="number" value={newRoomForm.offer} onChange={e => setNewRoomForm(e.target.value)}/>
                    <label >Price</label>
                        <Input type="number" value={newRoomForm.price} onChange={e => setNewRoomForm(e.target.value)}/>
                </InputContainer>
                <InputContainer>
                    <label>Cancellation</label>
                        <textarea name="textarea" rows="5" cols="30" className="info" style={{marginBottom: "0.5rem"}} defaultValue={newRoomForm.cancellation} onChange={e => setNewRoomForm(e.target.value)}/>
                </InputContainer>
                <InputContainer>
                    <label>Description</label>
                        <textarea name="textarea" rows="5" cols="30" className="info" defaultValue={newRoomForm.description} onChange={e => setNewRoomForm(e.target.value)}/>
                </InputContainer>
                
                
                {/* <FilePond files={files} allowFileEncode={true} allowReorder={true} allowMultiple={true} onupdatefiles={(files)=>files.forEach((file)=>dispatch(newRoom(file.file)))} name="files" 
                labelIdle='Upload your images.'/> */}
                {/* <FilePond files={files} allowReorder={true} allowMultiple={true} onupdatefiles={(files)=>files.forEach((file)=>dispatch(newRoom(file.file.getFileEncodeBase64String())))} name='filepond' server={"/rooms/newRoom"} allowFileMetadata={true}
                labelIdle='Upload your images.'/> */}
                
                
                
                <div className="btn-save">
                    
                    <button onClick={handleButton}>Enviar</button>
                </div>
            </FormContainer>
            <FormContainer style={{marginLeft: "1rem"}}>
            <FilePond files={files} allowFileEncode={true} allowReorder={true} allowMultiple={true} onupdatefiles={setFiles} name='files' server={"/rooms/newRoom"} imagePreviewHeight={100} imageCropAspectRatio={"1:1"} imageResizeTargetWidth={100} imageResizeMode={"cover"} labelIdle='Upload your images.' />
            </FormContainer>
        </ContainerNewRoom>
    )
}
export default NewRoom
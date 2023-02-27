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
    const handleNameChange = (e) => {
        setNewRoomForm({
            ...newRoomForm,
            name:e.target.value
        })
    }
    const handleFloorChange = (e) => {
        setNewRoomForm({
            ...newRoomForm,
            floor:e.target.value
        })
    }
    const handleRoomNumberChange = (e) => {
        setNewRoomForm({
            ...newRoomForm,
            roomNumber:e.target.value
        })
    }
    const handleTypeChange = (e) => {
        setNewRoomForm({
            ...newRoomForm,
            type:e.target.value
        })
    }
    const handleOfferChange = (e) => {
        setNewRoomForm({
            ...newRoomForm,
            offer:e.target.value
        })
    }
    const handlePriceChange = (e) => {
        setNewRoomForm({
            ...newRoomForm,
            price:e.target.value
        })
    }
    const handleCancellationChange = (e) => {
        setNewRoomForm({
            ...newRoomForm,
            cancellation:e.target.value
        })
    }
    const handleDescriptionChange = (e) => {
        setNewRoomForm({
            ...newRoomForm,
            description:e.target.value
        })
    }
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
            newRoomForm.photos.push({img: fileConvert})
            
        })
        dispatch(newRoom(newRoomForm))
        console.log(files)
        setNewRoomForm({
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

        
    }

    return (
        <ContainerNewRoom>
            <FormContainer>
                <InputContainer>
                    <label>Room Name</label>
                        <Input type="text" value={newRoomForm.name} onChange={handleNameChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Room Floor</label>
                        <Input type="text" value={newRoomForm.floor} onChange={handleFloorChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Room Number</label>
                        <Input type="number" value={newRoomForm.roomNumber} onChange={handleRoomNumberChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Room Type</label>
                        <Input type="text" value={newRoomForm.type} onChange={handleTypeChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Offer</label>
                        <Input type="number" value={newRoomForm.offer} onChange={handleOfferChange}/>
                    <label >Price</label>
                        <Input type="number" value={newRoomForm.price} onChange={handlePriceChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Cancellation</label>
                        <textarea name="textarea" rows="5" cols="30" className="info" style={{marginBottom: "0.5rem"}} defaultValue={newRoomForm.cancellation} onChange={handleCancellationChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Description</label>
                        <textarea name="textarea" rows="5" cols="30" className="info" defaultValue={newRoomForm.description} onChange={handleDescriptionChange}/>
                </InputContainer>
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
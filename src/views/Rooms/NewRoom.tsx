import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import { newRoom } from "../../features/slices/roomsSlice";
import { FormContainer } from "../Users/UsersStyled";
import { Input, InputContainer } from "../Login/LoginStyled";
import { ContainerNewRoom } from "./RoomsStyled";
import { useAppDispatch } from "../../hooks/hooks";
import { Room } from "../../Interfaces/RoomInter";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginFileMetadata)

const NewRoom = () => {
    const [files,] = useState<Room[]>([])
    const [newRoomForm, setNewRoomForm] = useState<Room>({
        id: 0,
        name: '',
        roomFloor: '',
        roomNumber: '',
        offer: 0 ,
        price: 0,
        cancellation:'',
        description:'',
        typeRoom: '',
        amenities:'',
        photo: {},
        status:''
    })
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoomForm({
            ...newRoomForm,
            name:e.target.value
        })
    }
    const handleFloorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoomForm({
            ...newRoomForm,
            roomFloor:e.target.value
        })
    }
    const handleRoomNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoomForm({
            ...newRoomForm,
            roomNumber:e.target.value
        })
    }
    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoomForm({
            ...newRoomForm,
            typeRoom:e.target.value
        })
    }
    const handleOfferChange = (e: any) => {
        setNewRoomForm({
            ...newRoomForm,
            offer:e.target.value
        })
    }
    const handlePriceChange = (e: any) => {
        setNewRoomForm({
            ...newRoomForm,
            price:e.target.value
        })
    }
    const handleCancellationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoomForm({
            ...newRoomForm,
            cancellation:e.target.value
        })
    }
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoomForm({
            ...newRoomForm,
            description:e.target.value
        })
    }
    const dispatch = useAppDispatch()
    const convertToBase64 = (file: any) => {
        return new Promise<null |string |ArrayBuffer>((resolve, reject) => {
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
            const fileConvert = await convertToBase64(file.photo);
            (typeof fileConvert === 'string') && setNewRoomForm({...newRoomForm, photo: {img: fileConvert}})
            
            
        })
        dispatch(newRoom(newRoomForm))
        console.log(files)
        setNewRoomForm({
        id: 0,
        name: '',
        roomFloor: '',
        roomNumber: '',
        offer: 0 ,
        price: 0,
        cancellation:'',
        description:'',
        typeRoom: '',
        amenities:'',
        photo: {},
        status:''
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
                        <Input type="text" value={newRoomForm.roomFloor} onChange={handleFloorChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Room Number</label>
                        <Input type="number" value={newRoomForm.roomNumber} onChange={handleRoomNumberChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Room Type</label>
                        <Input type="text" value={newRoomForm.typeRoom} onChange={handleTypeChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Offer</label>
                        <Input type="number" value={newRoomForm.offer} onChange={handleOfferChange}/>
                    <label >Price</label>
                        <Input type="number" value={newRoomForm.price} onChange={handlePriceChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Cancellation</label>
                        <textarea name="textarea" className="info" style={{marginBottom: "0.5rem"}} defaultValue={newRoomForm.cancellation} onChange={()=>handleCancellationChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Description</label>
                        <textarea name="textarea"  className="info" defaultValue={newRoomForm.description} onChange={()=>handleDescriptionChange}/>
                </InputContainer>
                <div className="btn-save">
                    
                    <button onClick={handleButton}>Enviar</button>
                </div>
            </FormContainer>
            <FormContainer style={{marginLeft: "1rem"}}>
            {/* <FilePond files={files} allowFileEncode={true} allowReorder={true} allowMultiple={true} onupdatefiles={setFiles} name='files' server={"/rooms/newRoom"} imagePreviewHeight={100} imageCropAspectRatio={"1:1"} imageResizeTargetWidth={100} imageResizeMode={"cover"} labelIdle='Upload your images.' /> */}
            </FormContainer>
        </ContainerNewRoom>
    )
}
export default NewRoom
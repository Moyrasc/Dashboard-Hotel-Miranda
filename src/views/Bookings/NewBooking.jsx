import React,{useState} from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import { useDispatch } from "react-redux";
import { newBooking } from "../../features/slices/bookingsSlice";
import { FormContainer } from "../Users/UsersStyled";
import { Input, InputContainer } from "../Login/LoginStyled";
import { ContainerNewRoom } from "../Rooms/RoomsStyled";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginFileMetadata)


const NewBooking = () => {
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
        const newBookingForm = {
            id: '1',
            guest: 'Rahel Broune',
            checkIn: "12/30/2022",
            checkOut: "1/10/2023",
            type: 'Double bed',
            price: 145,
            specialRequest: "",
            description:"",
            facilities:"",
            photos: []
    }
        files.map(async file => {
            const fileConvert = await convertToBase64(file.file)
            newBookingForm.photos.push({img: fileConvert})
            
        })
        dispatch(newBooking(newBookingForm))
        console.log(files)
    }
    return(
        <ContainerNewRoom>
            <FormContainer>
                <InputContainer>
                    <label>Guest</label>
                        <Input type="text"/>
                </InputContainer>
                <InputContainer>
                    <label>Check In</label>
                        <Input type="date"/>
                </InputContainer>
                <InputContainer>
                    <label>Check Out</label>
                        <Input type="date"/>
                </InputContainer>
                <InputContainer>
                    <label>Type Room</label>
                        <Input type="text" />
                    <label >Price</label>
                        <Input type="number" />
                </InputContainer>
                <InputContainer>
                    <label>Special Request</label>
                        <textarea name="textarea" rows="5" cols="30" className="info" style={{marginBottom: "0.5rem"}}/>
                </InputContainer>
                <InputContainer>
                    <label>Description</label>
                        <textarea name="textarea" rows="5" cols="30" className="info"/>
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
            <FilePond files={files} allowFileEncode={true} allowReorder={true} allowMultiple={true} onupdatefiles={setFiles} name='files' server={"/bookings/newBooking"} imagePreviewHeight={100} imageResizeTargetWidth={100} imageCropAspectRatio={"1:1"}  imageResizeMode={"cover"} labelIdle='Upload your images.' />
            </FormContainer>
        </ContainerNewRoom>
    )
}

export default NewBooking
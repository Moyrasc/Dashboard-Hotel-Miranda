import React,{useState} from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import { newBooking } from "../../features/slices/bookingsSlice";
import { FormContainer } from "../Users/UsersStyled";
import { Input, InputContainer } from "../Login/LoginStyled";
import { ContainerNewRoom } from "../Rooms/RoomsStyled";
import { useAppDispatch } from "../../hooks/hooks";
import { Booking } from "../../Interfaces/BookingInter";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginFileMetadata)


const NewBooking = () => {
    const [files, setFiles] = useState<Booking[]>([])
    const [newBookingForm, setNewBookingForm] = useState<Booking>({
            id: 0,
            guest: '',
            orderDate:'',
            checkin: "12/30/2022",
            checkout: "1/10/2023",
            typeRoom: '',
            amenities:[""],
            roomId:0,
            price: 145,
            specialRequest: "",
            description:"",
            photo: {},
            state: ""
    })
    const handleGuestChange = (e: Event) => {
        setNewBookingForm({
            ...newBookingForm,
            guest:(e.target as HTMLInputElement).value
        })
    }
    const handleCheckInChange = (e: Event ) => {
        setNewBookingForm({
            ...newBookingForm,
            checkin:(e.target as HTMLInputElement).value
        })
    }
    const handleCheckOutChange = (e: Event) => {
        setNewBookingForm({
            ...newBookingForm,
            checkout:(e.target as HTMLInputElement).value
        })
    }
    const handleTypeChange = (e: Event) => {
        setNewBookingForm({
            ...newBookingForm,
            typeRoom:(e.target as HTMLInputElement).value
        })
    }
    const handlePriceChange = (e: any) => {
        setNewBookingForm({
            ...newBookingForm,
            price:e.target.value
        })
    }
    const handleSpecialRequestChange = (e: Event) => {
        setNewBookingForm({
            ...newBookingForm,
            specialRequest:(e.target as HTMLInputElement).value
        })
    }
    const handleDescriptionChange = (e: Event) => {
        setNewBookingForm({
            ...newBookingForm,
            description:(e.target as HTMLInputElement).value
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
            (typeof fileConvert === 'string') && setNewBookingForm({...newBookingForm, photo: {img: fileConvert}})
            
            
        })
        dispatch(newBooking(newBookingForm))
        console.log(files)
    }
    return(
        <ContainerNewRoom>
            <FormContainer>
                <InputContainer>
                    <label>Guest</label>
                        <Input type="text" value={newBookingForm.guest} onChange={() =>handleGuestChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Check In</label>
                        <Input type="date" value={newBookingForm.checkin} onChange={() =>handleCheckInChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Check Out</label>
                        <Input type="date" value={newBookingForm.checkout} onChange={() =>handleCheckOutChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Type Room</label>
                        <Input type="text" value={newBookingForm.typeRoom} onChange={() =>handleTypeChange}/>
                    <label >Price</label>
                        <Input type="number" value={newBookingForm.price} onChange={handlePriceChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Special Request</label>
                        <textarea name="textarea" className="info" style={{marginBottom: "0.5rem"}} defaultValue={newBookingForm.specialRequest} onChange={() =>handleSpecialRequestChange}/>
                </InputContainer>
                <InputContainer>
                    <label>Description</label>
                        <textarea name="textarea"  className="info" defaultValue={newBookingForm.description} onChange={() =>handleDescriptionChange}/>
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
            {/* <FilePond files={files} allowFileEncode={true} allowReorder={true} allowMultiple={true} onupdatefiles={setFiles} name='files' server={"/bookings/newBooking"} imagePreviewHeight={100} imageResizeTargetWidth={100} imageCropAspectRatio={"1:1"}  imageResizeMode={"cover"} labelIdle='Upload your images.' /> */}
            </FormContainer>
        </ContainerNewRoom>
    )
}

export default NewBooking
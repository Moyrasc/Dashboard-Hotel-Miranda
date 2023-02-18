import React from "react";
import { Input, InputContainer } from "../Login/LoginStyled";
import { FormContainer, SelectUser, UserContainer } from "./UsersStyled";

const NewUser = () => {

    return(
        <UserContainer>
            <FormContainer>
                <InputContainer>
                <form encType="multipart/formdata/" name="upload-image">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="avatar"/>
                </form>
                
                <label>Full Name</label>
                <Input type="text" />
                <label>Job Position</label>
                <SelectUser name="Job Desk">
                    <option defaultValue="Manager">Manager</option>
                    <option defaultValue="Reception">Reception</option>
                    <option defaultValue="RoomService">Room Service</option>
                </SelectUser>
                <label>Email</label>
                <Input type="email"/>
                <label>Password</label>
                <Input type="password" />
                <label>Phone Number</label>
                <Input type="tel" pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}"/>
                <label>Start Date</label>
                <Input type="date"/>
                <label>Job Description</label>
                <textarea name="textarea" rows="5" cols="30" placeholder="Write job description here..."/>
                </InputContainer>
                <div className="btn-save">
                    <button>Save User</button>
                </div>
            </FormContainer>
            
        </UserContainer>
    )
}

export default NewUser
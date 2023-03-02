import React, { useState } from "react";
import { LoginContainer,LoginCard, InputContainer, Input, Button, ButtonContainer } from "./LoginStyled";
import logo from '../../assets/icons/logo2.png'
import { useUser } from "../../Context/userContext";
import { useNavigate } from "react-router";
import { ErrorMsg } from "../../components/Error/ErrorStyled";
import Error from "../../components/Error/Error";

const User = {
    email : "admin@admin.com",
    password: "12345"
}
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {dispatch} = useUser()
    const [error, setError] = useState(false)
    const navigate = useNavigate()

// const handleSubmit = (e) =>{
//     e.preventDefault()
//     if(email !== User.email){
//         setError(true)
//         return
//     }
//     if(password !== User.password){
//         setError(true)
//         return
//     }
//     setError('')
//     setUser({email, password})
//     navigate('/')
//     }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(email === User.email && password === User.password){
            dispatch({type: 'login', value:{username:"",email:'admin@admin.com'}})
            setError('')
            navigate('/dashboard')
        }else {
            setError(true)
        }
    }
    return (
        
            <LoginContainer>
                <LoginCard>
                    <div className="header">
                    <img src={logo} alt="logo" className="logo"/>
                    <div className="titles">
                    <h2 className="title"> Hotel</h2>
                    <h4 className="subtitle">Admin Dashboard</h4>
                    </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputContainer>
                        <label>E-mail</label>
                            <Input type="text" className='input-user' data-cy="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="admin@admin.com"></Input>    
                        </InputContainer>
                        <InputContainer>
                        <label>Password</label>
                            <Input type="password" className='input-pass' data-cy="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="12345"></Input>       
                        </InputContainer>
                        {error && <Error><ErrorMsg>Invalid data</ErrorMsg></Error>}
                        <ButtonContainer>
                            <Button data-cy="login">Login</Button>
                        </ButtonContainer>
                        
                    </form>
                </LoginCard>
            </LoginContainer>
    );
};

export default Login;

import React from 'react'
import { Btn } from './ButtonStyled'


const Button = (props)=> {
    return (
        <Btn primary={props.primary} onClick= {props.onClick} id={props.id}>
            {props.label}
        </Btn>
    )
}
export default Button
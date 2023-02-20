import React, { useState } from 'react'
import { SwitchContainer } from './SwitchStyled'

const Switch = (props) => {
    const [active, setActive] = useState(props.items[0].label)

    const handleClick = (item) => {
        setActive(item.label)
        props.handleSwitcher(item.value)
    }

    return (
        <SwitchContainer>
            <ul>
                {props.items.map(item => {
                    return <li key={item.label} onClick={() => handleClick(item)} className={`${active === item.label && 'active'}`}>{item.label}</li>
                })}
            </ul>
        </SwitchContainer>
    )
}

export default Switch
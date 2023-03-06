import React, { useState } from 'react'
import { SwitchContainer } from './SwitchStyled'


interface Item {
    label: string
    value: string
}
interface Props {
    items: Item[]
    handleSwitcher: (item: string) => void
}
const Switch = (props: Props) => {
    const [active, setActive] = useState(props.items[0].label)

    const handleClick = (item: Item) => {
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
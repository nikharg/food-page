import React, { useState } from 'react'
import MenuItem from '../components/MenuItem'
import Navbar from '../components/Navbar'

const Menu = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <Navbar counter={counter}/>
            <div className='menu-container'>
                <MenuItem counter={counter} setCounter={setCounter}/>
            </div>
        </>
    )
}

export default Menu
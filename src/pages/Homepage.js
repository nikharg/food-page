import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()
    return (
        <>
        <Navbar/>
        <div className="homepage">
            <p className='title'>Welcome to Food's <br />Kitchen</p>
            <button className='btn' onClick={()=>navigate('/menu')}>GO TO MENU</button>
        </div>
        </>
    )
}

export default Homepage


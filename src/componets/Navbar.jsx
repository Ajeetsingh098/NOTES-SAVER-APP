
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-row gap-10 justify-center p-4 bg-gray-200 text-xl font-bold text-black '>
            <NavLink
                to="/">
                Home
            </NavLink>
            <NavLink
                to="/Paste">
                Notes
            </NavLink>
        </div>
    )
}

export default Navbar

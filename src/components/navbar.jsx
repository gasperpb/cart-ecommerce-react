import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../components/navbar.css"
import addmobile from "../assets/addmobile.webp"
import addweb from "../assets/addweb.webp"


export const Navbar = () => {
    return (
        <div className=" bg-black flex justify-center">
            <div className="flex sm:hidden mx-auto">
                <img src={addmobile} alt="" />
            </div>
            <div className="hidden sm:flex mx-auto">
                <img src={addweb} alt="" />

                <div className='navbar'>
                </div>
            </div>
            <div className='links'>
                <Link to="/">Shop</Link>
                <Link to="/cart"><ShoppingCart size={32} /></Link>
            </div>
        </div>
    )
}

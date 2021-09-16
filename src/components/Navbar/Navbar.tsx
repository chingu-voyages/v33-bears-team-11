import { Link } from "react-router-dom"
import './Navbar.css'
import React from 'react'

const Header = () => {
    return (
        <nav className="nav">
            <ul className="nav-links">
                <Link to ="/"><li>Home</li></Link>
                <Link to ="/Search"><li>Search</li></Link>
                <Link to ="/Favorites"><li>Favorites</li></Link>
                <Link to ="about"><li>About</li></Link>
                <Link to ="login"><li>Login</li></Link>
                <Link to ="register"><li>Register</li></Link>
                <Link to ="details"><li>PetDetails</li></Link>
            </ul>
        </nav>
    )
}

export default Header

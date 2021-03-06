import { Link } from "react-router-dom"

import React from 'react'

const Header = () => {
    return (
        <nav>
            <ul className="nav-links">
                <Link to ="/"><li>Home</li></Link>
                <Link to ="/Search"><li>Search</li></Link>
                <Link to ="/Favorites"><li>Favorites</li></Link>
                <Link to ="about"><li>About</li></Link>
                <Link to ="login"><li>Login</li></Link>
            </ul>
        </nav>
    )
}

export default Header

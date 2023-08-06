import React from "react"
import nav_logo from "../Images/troll-face.png"

export default function NavBar(){
    return(
        <nav >
            <img src = {nav_logo} className = "header-img" />
            <h2>Meme Generator</h2>
        </nav>
    )
}
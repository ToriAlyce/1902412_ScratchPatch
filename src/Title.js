import React, { Component } from 'react'
import "./Title.css"
import { Link } from 'react-router-dom';
import Image from "./Componenets/Image"


class Title extends Component {
    render() {
        return (
            <section>
            <header class = "sticky-header">
                <h1>Scratch Patch</h1>
                <nav class="menuDisplay">
                    <Link to='/1902412_ScratchPatch'>Home</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Blogs'>Blogs</Link>
                    <Link to='/Art'>NetArt</Link>
                </nav>
            </header>
            </section>
        )
    }
}

export default Title;
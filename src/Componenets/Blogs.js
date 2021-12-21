import React, { Component } from 'react'
import "../css/Blogs.css"
import Ticket from '../Images/BLOGS_PAGE.png'
import { Link } from 'react-router-dom';

export class Blogs extends Component {
    render() {
        return (
            <section>
                <img id="img" src={Ticket} alt="Ticket"/>
                <nav class="blogDisplay">
                    <Link class="lk left-lk" to='/Theory'>Theoretical Blog</Link>
                    <Link class="lk" to='/Artwork'>Artwork Analyses</Link>
                    <Link class="lk" to='/Tech'>Technical Reflections</Link>
                    <Link class="lk" to='/Create'>Creative Reflections</Link>
                </nav>
            </section>
        )
    }
}

export default Blogs

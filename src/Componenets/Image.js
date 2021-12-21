import React, { Component } from 'react'

import "../css/Image.css"
import "../scratch"
import Ticket from '../Images/HOMPAGE.png'

export class Image extends Component {

render() 
    {
        
        
        return (
            <section>
                <img id="img" src={Ticket} alt="Ticket"/>
                <h1 class="head5 ">Welcome to Scratch Patch!</h1>
                <p class="para2">This site is an interactive internet artwork focusing on exploring the layers that the internet can create and how there will always be new layers to explore as we dive deeper into the web. This will also include the layers involved in this course and make this website possible and how relation is key to creating these layers.</p>

                <p class="para3">This website was developed as a project for my Interactive Media 4 Course (WSOA4175A)</p>

                <p class="para4">Please feel free to explore the site and enjoy!</p>

            </section>
            
        )

        
        
    }
}



export default Image

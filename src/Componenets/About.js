import React, { Component } from 'react'
import Ticket from '../Images/ABOUT_PAGE.png'
import "../css/About.css"

export class About extends Component {
    render() {
        return (
            <section>
                <img id="img" src={Ticket} alt="Ticket"/>
                <p class="para22">Hi, my name is Tori Mitchell, I am a 4th-year digital arts student and I am the creative designer of this Scratch Patch-themed website. This website is intended as a piece of internet art interlacing with theory work and content covered for my Interactive Media Course (WSOA4175A).</p>

                <p class="para33">This website is intended to explore the layers that everything has with regards to the internet, layers in society, and the layers that will be incorporated into my website and my final internet art piece.</p>

                <p class="para44">The best way I thought to approach this concept was from the idea of a scratch-off ticket and how you never really know what to expect and just like in life, society,
and the internet you never know what you are going to be uncovering by the next click. Hopefully, you enjoy this site and all its content! Thank you for visiting! :)</p>
            </section>
        )
    }
}

export default About

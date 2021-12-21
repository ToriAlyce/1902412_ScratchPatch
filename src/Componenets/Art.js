import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../css/Art.css"
import Ticket from '../Images/BigTicket_Netart.png'

export class Art extends Component {
    render() {

        function clickOne() {
            window.location.reload();
        }

        function clickTwo() {
            
        }
            
            document.addEventListener('mousemove', function (e) {
                const body = document.querySelector('.b2');
            const bubbles = document.createElement('span');
            bubbles.className = "image1";
                bubbles.style.left = -75 + e.offsetX+'px';
                bubbles.style.top = -75 + e.offsetY+'px';
                if(body!=null)
                {
                    body.appendChild(bubbles);
                }
            });
        
        
        
        
        return (
            <section>
                <li class="Clear" onClick= { clickOne }><span class="poen">Refresh</span></li>
                <Link class="Clear2" to='/Reflections'><span class="poen">Explanation</span></Link>
                <img id="img" src={Ticket} alt="Ticket"/>
                <div class="b2" id = "b2"></div>
            </section>
            
        )
    }
}

export default Art

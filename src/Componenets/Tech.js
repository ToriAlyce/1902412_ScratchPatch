import React, { Component } from 'react'
import "../css/Tech.css"

export class Tech extends Component {
    render() {
        return (
            <section class="white">
                <div>
                <h1 class="head2 headdiv">Technical Reflection 1</h1>
                </div>
                
                <p class="paragraph1 marg">
                The technical element to my website's overall design was the most crucial as I had come up with the creative design and layout first before I began to build my site. I now needed to be able to replicate it and get it working correctly otherwise the creative vision of my site would fall short.
                </p>
                <p class="paragraph1">
                This was the main concern when it came to the technical element of my website and the main feature, what I needed to get to work on was the scratch code. After looking at many sources online it was very difficult for me to finally string together a code that got the scratch feature to work. It is still not working as I would like and I would definitely try to recode it in a more functional way. This is in terms of creating more than one scratch layer for the user to interact with, so that that they really feel as though they are digging through the content and uncovering more layers of art as they go through the site.
                </p>
                <p class="paragraph1">
                I also was struggling with how I was going to layer my content as the scratch feature does not work on the paragraph-tagged text, as well as the user is not able to interact with the content unless the scratch card is completely removed. That is why I needed to create a ‘Clear Card’ button so that the user can scroll down on the content as well as click on links. Hopefully, I will soon be able to figure out a much better way of blending the content and the scratch feature together.
                </p>
                <p class="paragraph1">
                Overall I feel as though I have successfully created a scratch feature that works with the current design of my website as it allows my creative vision for my site to be able to be featured.
                </p>
                <p class="paragraph1"><h3 class="paragraph1">References</h3>
                wScratchPad.js on https://github.com/websanova/wScratchPad , was where I was able to help figure out a functioning code for my scratch feature.
                </p>




                <div>
                <h1 class="head3 headdiv">Technical Reflection 2</h1>
                </div>
                
                <p class="paragraph1">
                Overall, I am not happy with my sight. I struggled with the technical application and how React works and how I am supposed to link everything together. I can't get images to display, my pc was really struggling to build the react app so I was only able to get it to work and push it to GitHub on Tuesday morning (9th of Nov). So I need to go back and properly sit and interact with Andres Lectures as I did not grasp how to implement everything properly as I did not give myself enough time to go through the work and learn.
                </p>
                <p class="paragraph1">
                As for future implementation (This site will bounce back, ill show you, I can make it work!) I have a lot planned that I would have loved this site to be like, still sticking to my original Scratch Patch site from assignment one, I want to make the same site but enhance it and improve it based on the feedback received for assignment one.
                </p>
                <p class="paragraph1">
                Such as making the site more responsive to different screen sizes, changing the backgrounds used for the scratch pads as they make the words difficult to read. Adding animations into the site as well as making a better navbar for the user.
                </p>
                <p class="paragraph1">
                As for my Internet artwork, I have a new idea of letting the user upload the images and layer them themselves to be scratched away, possible then be able to share their own layered scratch pads with friends and family. I found a youtube tutorial explaining how you can add an upload image option and display it, so I have to develop a way of being able to implement that along with the scratchpad code. I don't know how it's going to go as I have struggled a lot trying to get the scratchpad to display properly, but I feel if a go through the work properly ill be able to figure out how to do it.
                </p>
                <p class="paragraph1">
                My poor time management shot me in the foot for this project and I really wish I focused more on the site and trying to understand the lectures. This is very embarrassing and I apologise for not doing better, I will improve by the next assignment.
                </p>

                <div>
                <h1 class="head3 headdiv">Technical Reflection 3</h1>
                </div>
                
                <p class="paragraph1">
                The technical element is the part of the project I struggled with the most, as I am not the best coder out there. I only started coding in my 2nd year at Wits, so every coding language or framework is a new challenge for me. Overall, I am pleased that I at least got my navigation of the website working well and still can showcase concepts of my original Scratch Patch website.
                </p>
                <p class="paragraph1">
                The first biggest challenge of using React.js was trying to get the scratch patch feature to work on the website. The original code didn't work as it had on my previous site, so I had to look for other resources, eventually finding one that works almost as well. However, I could not get this new code to allow me to add different images to each scratch patch layer. I experimented with adding separate divs and trying to separate the code and scratch cards into individual components. But, I could not get any of this to work, so I made the design decision to have my scratch patch interaction feature only on the internet artwork page. As for the rest of my site, I tried to still include the scratch patch theme into all parts of my website to make it look cohesive. 
                </p>
                <p class="paragraph1">
                In terms of responsiveness, that is where my site is technically lacking again, it works well on a normal laptop screen but, I could not get it to function properly on different screen sizes. I had trouble getting media queries to work properly to make it responsive and after a while decided to leave them out of the project altogether. I know that using a % when sizing code helps it respond better on different screens so I tried to use % as much as possible. My scratch patch cards, however, did not work well in being responsive as I had to use px in some areas of code or the scratch patch would break.  I am concerned about it as I was not able to fix the responsiveness and it ruins the overall scratch card illusion if it is not aligned properly, messing with the presentation of my internet artwork. 
                </p>
                <p class="paragraph1">
                I'll end this technical reflection on a more positive note, I am very happy that I got an overall better understanding of how React.js works and how to use it compared to my Assignment 2 submission. I am very proud I was able to recreate the basics of my initial scratch patch website again in my react application. As well as at least getting my internet artwork's scratch card to work. Overall I think I learned a lot by working on this project and know that with more practice I'll get the hang of React.js. 
                </p>
            </section>
        )
    }
}

export default Tech

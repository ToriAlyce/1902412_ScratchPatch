import React, {Component} from "react";
import ImageOne from './Imageone';


class Blog_7 extends Component {
    render(){
        return(
            <div>
                <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '5vh', fontSize:'35px', textAlign:'center'}}>Blog 7: Technical Reflection 2</h1>
                <p style={{fontSize:'20px',padding:'1%'}}>
                Overall, I am not happy with my sight. I struggled with the technical application and how React works and how I 
                am supposed to link everything together. I can't get images to display, my pc was really struggling to build 
                the react app so I was only able to get it to work and push it to GitHub on Tuesday morning (9th of Nov). So I need to 
                go back and properly sit and interact with Andres Lectures as I did not grasp how to implement everything properly 
                as I did not give myself enough time to go through the work and learn.
                </p>
                <p style={{fontSize:'20px', padding:'1%'}}>
                As for future implementation (This site will bounce back, ill show you, I can make it work!) I have a lot planned 
                that I would have loved this site to be like, still sticking to my original Scratch Patch site from assignment one, 
                I want to make the same site but enhance it and improve it based on the feedback received for assignment one. 
                <ImageOne/>
                </p>
                <p style={{fontSize:'20px', padding:'1%'}}>
                Such as making the site more responsive to different screen sizes, changing the backgrounds used for the scratch 
                pads as they make the words difficult to read. Adding animations into the site as well as making a better navbar 
                for the user. 
                </p>

                <p style={{fontSize:'20px', padding:'1%'}}>
                As for my Internet artwork, I have a new idea of letting the user upload the images and layer them themselves to 
                be scratched away, possible then be able to share their own layered scratch pads with friends and family. I found a 
                youtube tutorial explaining how you can add an upload image option and display it, so I have to develop a way of being 
                able to implement that along with the scratchpad code. I don't know how it's going to go as I have struggled a lot 
                trying to get the scratchpad to display properly, but I feel if a go through the work properly ill be able to figure 
                out how to do it. 
                </p>
                
                <p style={{fontSize:'20px', padding:'1%'}}>
                My poor time management shot me in the foot for this project and I really wish I focused more on the site and 
                trying to understand the lectures. This is very embarrassing and I apologise for not doing better, I will 
                improve by the next assignment. 
                </p>
            </div>
        )
    }
}

export default Blog_7;
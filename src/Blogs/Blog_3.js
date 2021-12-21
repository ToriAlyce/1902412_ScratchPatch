import React, {Component} from "react";

class Blog_3 extends Component {
    render(){
        return(
            <div>
                <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '5vh', fontSize:'35px', textAlign:'center'}}>Blog 3: Technical Reflection 1</h1>
                <p style={{fontSize:'20px',padding:'1%'}}>
                The technical element to my website's overall design was the most crucial as I had come up with the 
            creative design and layout first before I began to build my site. I now needed to be able to replicate 
            it and get it working correctly otherwise the creative vision of my site would fall short.
                </p>
                <p style={{fontSize:'20px', padding:'1%'}}>
                This was the main concern when it came to the technical element of my website and the main feature, 
            what I needed to get to work on was the scratch code. After looking at many sources online it was very 
            difficult for me to finally string together a code that got the scratch feature to work. It is still not 
            working as I would like and I would definitely try to recode it in a more functional way. This is in terms 
            of creating more than one scratch layer for the user to interact with, so that that they really feel as 
            though they are digging through the content and uncovering more layers of art as they go through the site.
                </p>
                <p style={{fontSize:'20px', padding:'1%'}}>
                I also was struggling with how I was going to layer my content as the scratch feature does not work on the 
            paragraph-tagged text, as well as the user is not able to interact with the content unless the scratch card 
            is completely removed. That is why I needed to create a ‘Clear Card’ button so that the user can scroll down 
            on the content as well as click on links. Hopefully, I will soon be able to figure out a much better way of 
            blending the content and the scratch feature together.
                </p>

                <p style={{fontSize:'20px', padding:'1%'}}>
                Overall I feel as though I have successfully created a scratch feature that works with the current design 
            of my website as it allows my creative vision for my site to be able to be featured.
                </p>

                <h2>References</h2>

                <p style={{fontSize:'20px'}}>
                wScratchPad.js on https://github.com/websanova/wScratchPad , was where I was able to help figure 
            out a functioning code for my scratch feature. 
                </p>
            </div>
        )
    }
}

export default Blog_3;
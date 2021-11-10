import React from 'react';
import "./App.css";
import Scratchcard from './Scratchcard';
import Welcome from './Homepage';
import Intro from './introduction';
import Blog_1 from './Blog_1';
import Blog_2 from './Blog_2';
import Blog_3 from './Blog_3';
import Blog_4 from './Blog_4';
import Blog_7 from './Blog_7';
import Blog_6 from './Blog_6';
import Blog_5 from './Blog_5';
import Netart from './Netart';
import Blog_8 from './Blog_8';

function App() {
    return (
    <div className='App'>
        <Scratchcard/>
        <Welcome/>
        <Intro/>
        <Blog_1/>
        <Blog_2/>
        <Blog_3/>
        <Blog_4/>
        <Blog_5/>
        <Blog_6/>
        <Blog_7/>
        <Blog_8/>
        <Netart/>
    </div> 
    );
}

export default App; 
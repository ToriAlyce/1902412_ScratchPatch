import React, { Component } from 'react';
import "./App.css";
import Image from './Componenets/Image';

/*import Welcome from './Homepage';
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

import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import Navbar from './Componenets/Navbar';*/
import Title from './Title';
import { Route, Routes } from 'react-router-dom';
import About from './Componenets/About';
import Art from './Componenets/Art'
import Blogs from './Componenets/Blogs.js';
import Theory from './Componenets/Theory.js';
import Create from './Componenets/Create.js';
import Tech from './Componenets/Tech.js';
import Artwork from './Componenets/Artwork.js';
import Reflections from './Componenets/Reflections.js';

class App extends Component{
    render() {
        return (
            <div className="App">
                <div id="Title">
                    <Title/>
                </div>
               <Routes>
                   <Route path='/1902412_ScratchPatch' element={<Image/>}/>
                   <Route path='/About' element={<About/>}/>
                   <Route path='/Art' element={<Art/>}/>
                   <Route path='/Blogs' element={<Blogs/>}/>
                   <Route path='/Theory' element={<Theory/>}/>
                   <Route path='/Create' element={<Create/>}/>
                   <Route path='/Tech' element={<Tech/>}/>
                   <Route path='/Artwork' element={<Artwork/>}/>
                   <Route path='/Reflections' element={<Reflections/>}/>
               </Routes>
            </div>
        );
        //<Welcome/>
        //<Intro/>
        //<Blog_1/>
        //<Blog_2/>
       //<Blog_3/>
        /*<Blog_4/>
        <Blog_5/>
        <Blog_6/>
        <Blog_7/>
        <Blog_8/>
        <Netart/>*/
    }
}

export default App; 
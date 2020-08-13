import React from 'react';
import './components.js/components.css'
import './components.js/global.css'
import './components.js/layout.css'
import './components.js/sample-wallpaper.css'
import Navbar from './components.js/navbar';
import Search from './components.js/searchbar';

function App() {
  return(
  <div>
    
    <Navbar></Navbar>

   
    <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
     
          <Search></Search>
        
        <div className="sample-wallpaper">
          
          <article className="wallpaper">
            <img src="./img/venom-1.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>

          
          <article className="wallpaper">
            <img src="./img/hulk-1.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>

          
          <article className="wallpaper">
            <img src="./img/venom-2.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>
        </div>
      </div>
    </header>
  </div>
  
    
    
  )

}
export default App;

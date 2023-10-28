
import { useState } from 'react';
import './Header.css';

const Header = () => {

const [showModal , setShowModal]= useState(false)

  return (
    <header className='flex'>


       <button className='menu' 
       onClick={() => {setShowModal(true)}}>
        show model
      </button>



            <div/>




      < nav>
      <ul className='flex'>
          <li><a href="About">About</a></li>
          <li><a href="Articles">Articles</a></li>
          <li><a href="Projects">Projects</a></li>
          <li><a href="Speaking">Speaking</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </nav>

      <button>
        light
      </button>



{showModal && (

  
<div className="fixed">
<ul className='modal'>
    <li><a href="">About</a></li>
    <li><a href="">Articles</a></li>
    <li><a href="">Projects</a></li>
    <li><a href="">Speaking</a></li>
    <li><a href="">Uses</a></li>
  </ul>
</div>

) }

    
    </header>
  );
}

export default Header;

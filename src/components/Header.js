import React from 'react';
import {Link as Scrollto} from 'react-scroll'
// images
import logo from "../assets/mylogo.svg"

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img src={logo} alt=''/>
        </a>
        {/* button */}
        <Scrollto to="contact"><button className='btn btn-sm'>Work with Me</button></Scrollto>
      </div>
    </div>
  </header>;
};

export default Header;

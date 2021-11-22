import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbarstyle.css';
import { IconContext } from 'react-icons';
import FormsOne from '../Forms/FormsOne';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo1 from './logo1.png'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [isLogged, setIsLogged] = useState('data' in localStorage);

  // const showSidebar = () => { setSidebar(!sidebar); console.log("hbjzxvb");}

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={() => setSidebar(true)} />
          </Link>
        </div>
        <span className='menu-sth btnTopLandingPage' style={{ fontFamily: 'MediumFont' }}>
          <FormsOne isLogged={isLogged} setIsLogged={setIsLogged} /> 
        </span>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={() => setSidebar(false)}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if (item.title === 'My profile' && isLogged === false) return null;
              return (
                <li key={index} className={item.CName}>
                  <Link to={item.path}>
                    {item.icons}
                    <span className='menu-sth' style={{ fontFamily: 'MediumFont', fontSize: '20px' }}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div>
            
            {/* <span className='menu-sth' style={{fontFamily:'MediumFont'}}>
            <FormsOne setIsLogged={setIsLogged} /></span> */}
            <span className='menu-sth' style={{ fontFamily: 'MediumFont' }}>
            <FormsOne isLogged={isLogged} setIsLogged={setIsLogged} /> 
            <ToastContainer />
            </span>
            <a target="_blank" href="https://www.facebook.com/springfest.iitkgp" className="sficon1">
            <img src={logo1} className="sficon1" alt="India Map"  />
            </a>
           </div>
            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
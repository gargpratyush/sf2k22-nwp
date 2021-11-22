import React, { useState } from 'react';
import './landingPage.css';
import text from './hitch-hike-txt.png';
import MapApp from '../Map/MapApp.js';
import GallerySlider from '../Gallerypage/GallerySlider';
//import Footer from '../Footerpage/Footer';
import Contactus from '../Contactus/Footer';
import grass from './grass.png';
import unicorn from './unicorn.png';
import woman from './woman.png';
import tree1 from './tree1.png';
import tree2 from './tree2.png';
import tree3 from './tree3.png';
import tree4 from './tree4.png';
import tree5 from './tree5.png';
import tree6 from './tree6.png';
import FormsOne from '../Forms/FormsOne';

const LandingPage = (props) => {

    const [isLogged, setIsLogged] = useState('data' in localStorage);
    return (
        <div className="return">

            <div className="landing-page">
                {/* <span className='menu-sth btnTopLandingPage' style={{ fontFamily: 'MediumFont' }}>
                    {(isLogged) ? <FormsOne setIsLogged={setIsLogged} /> : <FormsOne setIsLogged={setIsLogged} />}
                </span> */}
                <img src={text} alt="Hitch Hike" className='hitch-hike-txt' />
                <img src={grass} alt="grass" className="landing_page_grass" />
                <img src={unicorn} alt="unicorn" className="landing_page_unicorn" />
                <img src={woman} alt="woman" className="landing_page_woman" />
                <img src={tree1} alt="tree1" className="landing_page_tree1" />
                <img src={tree2} alt="tree2" className="landing_page_tree2" />
                <img src={tree3} alt="tree3" className="landing_page_tree3" />
                <img src={tree4} alt="tree4" className="landing_page_tree4" />
                <img src={tree5} alt="tree5" className="landing_page_tree5" />
                <img src={tree6} alt="tree6" className="landing_page_tree6" />
            </div>

            <div>
                <GallerySlider />
            </div>

            <div>
                <MapApp setCity={props.setCity} />
            </div>



            <div >

                    <Contactus/>
            </div>

        </div>
    );
}

export default LandingPage;

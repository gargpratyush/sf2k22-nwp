// import React from 'react'
// import './stylesheet2.css'
// import { Link } from 'react-router-dom'
// import EnglishPoetry from './Events_Cards/EnglishPoetry.png'
// import HindiPoetry from './Events_Cards/HindiPoetry.png'
// import IMeMyself from './Events_Cards/IMeMyself.png'
// import notes from './Events_Cards/Notes.png'
// import Nrityakala from './Events_Cards/Nrityakala.png'
// import Panache from './Events_Cards/Panache.png'
// import PictureTale from './Events_Cards/PictureTale.png'
// import SFIdol from './Events_Cards/SFIdol.png'
// import ShakeLeg from './Events_Cards/ShakeLeg.png'
// import Shuffle from './Events_Cards/SHUFFLE.png'
// import Tango from './Events_Cards/TANGO.png'
// import SFLogo from './SFLogo.png'
// import { LocationCity } from '@material-ui/icons'
// import mainBg from './Event_City_Bg/mainbackground.png'
// import blueBg from './Event_City_Bg/bluebackground.png' 
// import dataevents from './../Services/data.json'

// function EventsPage(city) {

//     return (
//         <div className="external">
//         <div className="horizontal-scroll-wrapper"
//          style={{ background: `url(${mainBg}), url(${city.city.imagebg}), url(${blueBg}`, backgroundSize: "auto 100%" }}>

//           <div className="city-desc">
//             <h1>
//             {city.city.name}
//             </h1>
//             <p>
//             {city.city.desc}
//             </p>
//           </div>

//           <div className="card-container">
//             <div></div>
//             <div className="img-wrapper" id="EnglishPoetry">
//             <Link to ="/dashboard" onClick={() => {
//                                 city.setEvent(dataevents[2]);
//                             }} >
//                 <img src={EnglishPoetry} alt="English Poetry Slam"/>
//                 <p>English Poetry Slam</p>
//             </Link>
//             </div>

//             <div className="img-wrapper" id="notes">
//             <Link to ="/dashboard">
//                 <img src={notes} alt="Notes Less Travelled"/>
//                 <p>Notes Less Travelled</p>
//               </Link>
//             </div>

//             <div className="img-wrapper" id="SFIdol">
//             <Link to ="/dashboard">
//                 <img src={SFIdol} alt="SF Idol"/>
//                 <p>SF Idol</p>
//              </Link>
//             </div>

//             <div className="img-wrapper" id="Nrityakala">
//             <Link to ="/dashboard">
//                 <img src={Nrityakala} alt="Nrityakala"/>
//                 <p>Nrityakala</p>
//               </Link>
//             </div>

//             <div className="img-wrapper" id="IMeMyself">
//             <Link to ="/dashboard">
//                 <img src={IMeMyself} alt="I Me Myself"/>
//                 <p>I Me Myself</p>
//                 </Link>
//             </div>

//             <div className="img-wrapper wide" id="PictureTale">
//             <Link to ="/dashboard">
//                 <img src={PictureTale} alt="Picture Tale"/>
//                 <p>A Picture Tale</p>
//                 </Link>
//             </div>

//             <div className="img-wrapper wide" id="HindiPoetry">
//             <Link to ="/dashboard">
//                 <img src={HindiPoetry} alt="Hindi Poetry"/>
//                 <p>Hindi Poetry Slam</p>
//                 </Link>
//             </div>

//             <div className="img-wrapper" id="Tango">
//             <Link to ="/dashboard">
//                 <img src={Tango} alt="Two for A Tango"/>
//                 <p>Two for A Tango</p>
//                 </Link>
//             </div>

//             <div className="img-wrapper wide" id="ShakeLeg">
//             <Link to ="/dashboard">
//                 <img src={ShakeLeg} alt="Shake A Leg"/>
//                 <p>Shake A Leg</p>
//                 </Link>
//             </div>

//             <div className="img-wrapper" id="Shuffle">
//             <Link to ="/dashboard">
//                 <img src={Shuffle} alt="Shuffle"/>
//                 <p>Shuffle</p>
//                 </Link>
//             </div>

//             <div className="img-wrapper" id="Panache">
//             <Link to ="/dashboard">
//                 <img src={Panache} alt="Panache"/>
//                 <p>Panache</p>
//                 </Link>
//             </div>

//           </div>
//         </div>
//         <div className="logo"><img href="google.com" src={SFLogo} alt="Spring Fest Logo"/>Try scrolling←</div>
//       </div>
//     )
// }

// export default EventsPage
import React, {useRef} from 'react'
import './stylesheet2.css'
import { Link } from 'react-router-dom'
import EnglishPoetry from './Events_Cards/EnglishPoetry.png'
import HindiPoetry from './Events_Cards/HindiPoetry.png'
import IMeMyself from './Events_Cards/IMeMyself.png'
import notes from './Events_Cards/Notes.png'
import Nrityakala from './Events_Cards/Nrityakala.png'
import Panache from './Events_Cards/Panache.png'
import PictureTale from './Events_Cards/PictureTale.png'
import SFIdol from './Events_Cards/SFIdol.png'
import ShakeLeg from './Events_Cards/ShakeLeg.png'
import Shuffle from './Events_Cards/SHUFFLE.png'
import Tango from './Events_Cards/TANGO.png'
import SFLogo from './SFLogo.png'
import { LocationCity } from '@material-ui/icons'
import mainBg from './Event_City_Bg/mainbackground.png'
import blueBg from './Event_City_Bg/bluebackground.png'
import dataevents from './../Services/data.json'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import './Font/Poppins-Regular.ttf';

function EventsPage(city) {

  
  const onWheel = e => {
    e.preventDefault();
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRef = useRef(null);

  return (
    <div className="external"  
    ref={scrollRef}
    onWheel={onWheel}>
      <div className="horizontal-scroll-wrapper"
        style={{ background: `url(${mainBg}), url(${city.city.imagebg}), url(${blueBg}`, backgroundSize: "",
         backgroundRepeat: "no-repeat"}}>

        <div className="city-desc">
          <h1>
            {city.city.name}
          </h1>
          <p>
            {city.city.desc}
          </p>
        </div>

        <div className="card-container">
          <div></div>
          <div className="img-wrapper" id="EnglishPoetry" >
            <Link to="/eventspage/English Poetry Slam"
              onClick={() => {
                city.setEvent(dataevents[2]);
              }} >
              <img src={EnglishPoetry} alt="English Poetry Slam" />
              <p>English Poetry Slam</p>
            </Link>
          </div>

          {/* <div className="img-wrapper" id="notes">
            <Link to="/eventspage/Notes Less Travelled">
              <img src={notes} alt="Notes Less Travelled" />
              <p style={{fontFamily: "RegularFont"}} >Notes Less Travelled</p>
            </Link>
          </div> */}

          <div className="img-wrapper" id="SFIdol">
            <Link to="/eventspage/SF Idol">
              <img src={SFIdol} alt="SF Idol" />
              <p>SF Idol</p>
            </Link>
          </div>

          <div className="img-wrapper" id="Nrityakala">
            <Link to="/eventspage/Nrityakala">
              <img src={Nrityakala} alt="Nrityakala" />
              <p>Nrityakala</p>
              .
            </Link>
          </div>

          <div className="img-wrapper" id="IMeMyself">
            <Link to="/eventspage/I Me Myself">
              <img src={IMeMyself} alt="I Me Myself" />
              <p>I Me Myself</p>
            </Link>
          </div>

          <div className="img-wrapper" id="Nukkad">
            <Link to="/eventspage/Nukkad">
              <img src={SFIdol} alt="Nukkad" />
              <p>Nukkad</p>
            </Link>
          </div>

          <div className="img-wrapper wide" id="PictureTale">
            <Link to="/eventspage/A Picture Tale">
              <img src={PictureTale} alt="Picture Tale" />
              <p>A Picture Tale</p>
            </Link>
          </div>

          <div className="img-wrapper" id="HilarityEnsues">
            <Link to="/eventspage/Hilarity Ensues">
              <img src={IMeMyself} alt="Hilarity Ensues" />
              <p>Hilarity Ensues</p>
            </Link>
          </div>

          <div className="img-wrapper wide" id="HindiPoetry">
            <Link to="/eventspage/Hindi Poetry Slam">
              <img src={HindiPoetry} alt="Hindi Poetry" />
              <p>Hindi Poetry Slam</p>
            </Link>
          </div>

          <div className="img-wrapper" id="Tango">
            <Link to="/eventspage/Two for A Tango">
              <img src={Tango} alt="Two for A Tango" />
              <p>Two for A Tango</p>
            </Link>
          </div>

          <div className="img-wrapper wide" id="ShakeLeg">
            <Link to="/eventspage/Shake A Leg">
              <img src={ShakeLeg} alt="Shake A Leg" />
              <p>Shake A Leg</p>
            </Link>
          </div>

          <div className="img-wrapper" id="Shuffle">
            <Link to="/eventspage/Shuffle">
              <img src={Shuffle} alt="Shuffle" />
              <p>Shuffle</p>
            </Link>
          </div>

          <div className="img-wrapper" id="Panache">
            <Link to="/eventspage/Panache">
              <img src={Panache} alt="Panache" />
              <p>Panache</p>
            </Link>
          </div>

        </div>
      </div>
      <div className="scroll-instruction">Try scrolling←</div>
      <div className="back-btn"><Link to="/" style={{color: "white"}}><FontAwesomeIcon icon={faArrowCircleLeft} ></FontAwesomeIcon></Link></div>
    </div>
  )
}

export default EventsPage

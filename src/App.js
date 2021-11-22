// import React, { useState, useRef } from 'react';
// import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'
// import LandingPage from './components/LandingPage/LandingPage';
// import './App.css';
// import EventsPage from './components/EventsPage/EventsPage';
// import Dashboard   from './components/Events/Dashboard';
// import FormsOne from './components/Forms/FormsOne'

// // import Navbar from "./components/Navbar/Navindex";
// import Navbar from './components/Navbar/Navbar';
// import Map from './components/Map/Map';
// import Footer from './components/Footerpage/Footer';
// // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// // import Contact from './pages/contact';

// // import SignIn from './pages/signin';


// function App() {

//   const [city, setCity] = React.useState(
//     localStorage.getItem('city-mode') === 'true'
//   );

//   React.useEffect(() => {
//     localStorage.setItem('city-mode',city);
//   }, [city]);

//   const [event, setEvent] = useState();
  

//   return (
//     <div className="App">
      
//       <Router>
//       <Navbar/>
     
//        <Switch>
//         <Route exact path="/">
//           <LandingPage setCity={setCity}/>
//         </Route>
//         <Route exact path="/eventspage">
//           <EventsPage city={city} setEvent= {setEvent}/>
//         </Route>
//         <Route exact path ="/dashboard">
//           <Dashboard event={event}/>
//         </Route>
      
//         <Route exact path ="/FormsOne">
//           <FormsOne />
//         </Route>
//         <Route exact path ="/Citymap">
//           <Map />
//         </Route>
//         <Route exact path ="/Foot">
//           <Footer />
//         </Route>
      
        
//         </Switch>
//       </Router>
//       {/* <Router>
//       <Navbar />
//       <Switch>
//       <Route path="/contact" component={Contact} />
//         <Route path="/signin" component={FormsOne} />

//       </Switch>
//       </Router> */}
//     </div>
//   );
// }

// export default App;
import React, { useState, useRef } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';
import EventsPage from './components/EventsPage/EventsPage';
import Dashboard from './components/Events/Dashboard';
import FormsOne from './components/Forms/FormsOne'

// import Navbar from "./components/Navbar/Navindex";
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import Footer from './components/Contactus/Footer';
import eventData from './components/Services/data.json';
import ProfileDash from './components/ProfileDash/ProfileDash';
import Knowmore from './components/Knowmore/Knowmore';


function App() {

  // const [city, setCity] = React.useState(
  //   localStorage.getItem('city-mode') === 'true'
  // );

  // React.useEffect(() => {
  //   localStorage.setItem('city-mode', city);
  // }, [city]);

  // const [event, setEvent] = useState();

  const [city,setCity] = useState({});
  const retrievedData = localStorage.getItem("currentState");
  const city2 = JSON.parse(retrievedData);

  const [event, setEvent] = useState();
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LandingPage setCity={setCity} />
          </Route>
          <Route exact path="/eventspage">
            <EventsPage city={city2} setEvent={setEvent} />
          </Route>
          
          <Route exact path="/FormsOne">
            <FormsOne />
          </Route>
          <Route exact path="/Citymap">
            <Map setCity={setCity} />
          </Route>
          <Route exact path="/Contact">
            <Footer />
          </Route>
          <Route exact path="/Knowmore">
            <Knowmore />
          </Route>


          <Route exact path="/profile">
            <ProfileDash comp="info" />
          </Route>
          <Route exact path="/profile/registeredEvents">
            <ProfileDash comp="regevs" />
          </Route>
          <Route exact path="/profile/certificates">
            <ProfileDash comp="certifs" />
          </Route>

          {eventData.events.map((eventItem, index) => (
            <Route exact path={`/eventspage/${eventItem.name}`} >
              <Dashboard content={eventItem} comp="Abt" /> {/*console.log(eventItem.name)*/} 
            </Route>

          )
          )}
          {eventData.events.map((eventItem, index) => (

            <Route exact path={`/eventspage/${eventItem.name}/rules`}>
              <Dashboard content={eventItem} comp="Rules" />
            </Route>

          )
          )}
          {eventData.events.map((eventItem, index) => (

            <Route exact path={`/eventspage/${eventItem.name}/submission`}>
              <Dashboard content={eventItem} comp="Sub" />
            </Route>

          )
          )}
          {eventData.events.map((eventItem, index) => (

            <Route exact path={`/eventspage/${eventItem.name}/register`} key="Register">
              <Dashboard content={eventItem} comp="Reg" />
            </Route>
          )
          )}
        </Switch>
      </Router>

    </div>
  );
}

export default App;

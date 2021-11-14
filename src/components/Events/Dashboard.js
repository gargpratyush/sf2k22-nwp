import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router, Link, useHistory } from "react-router-dom";

// import Button from 'react-bootstrap/Button';
//import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Judgement from "./pages/Judgement/judgement";
import About from "./pages/About/About";
import Rules from "./pages/Rules/rules";

import Register from "./pages/register/register";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
//var data = require('../Services/data.json')
import "./Dashboard.css";
// import './pages/About/about.scss'
// import './pages/Judgement/judgement.scss'
// import './pages/Rules/rules.scss'


// const App = (props) => (
//   <div className="backgroundimg">
//     {props.head}
//     <Nav name={props.name} />
//     <div className="container1">
//       <Route exact path={"/event/"+props.name} component={() => <About name={props.name} />} />
//       <Route exact path={"/event/"+props.name+"/rules"} component={() => <Rules name={props.name} />} />
//       <Route exact path={"/event/"+props.name+"/judgement"} component={() => <Judgement name={props.name} />} />
//       <Route exact path={"/event/"+props.name+"/register"} component={Register} />
//     </div>
//   </div>
// );

const Dashboard = (props) => {
  let history = useHistory();
  console.log(props);

  const regevs = (props.auth) ? Object.keys(JSON.parse(localStorage.getItem('reg_events'))) : []
  const evs = (props.auth) ? JSON.parse(localStorage.getItem('events')) : {}
  const [reged, setReged] = useState((props.auth) ? regevs.includes(String(evs[props.name])) : false)

  const renderComp = () => {
    switch (props.comp) {
      case "abt":
        return (<About about={props.content.about} name={props.content.name} />);
      case "Rules":
        return (<Rules rules={props.content.rules} />);
      case "Sub":
        return (<Judgement name={props.content.name} mail={props.content.mail} />);
      case "Reg":
        return (<Register name={props.content.name} />);
      default:
        return (<About about={props.content.about} name={props.content.name} />);
    }
  }

  console.log(props.content);
  return (
    <div className="backgroundimg app">
      <div className="back-btn dash-back-btn"  ><Link to="/eventspage" style={{color: "white"}}><FontAwesomeIcon icon={faArrowCircleLeft} ></FontAwesomeIcon></Link></div>
      <Link className="zone-button" style={{ position: "fixed" }} to={"/"}>
        <img src="/favicon.ico" alt="homepage" height='50px' />
      </Link>
      <Nav eventName={props.content.name} />

        <div className="container1">

        {
          renderComp()
        }
        </div>

      </div>



  )
}

export default Dashboard;
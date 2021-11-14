import React, {useState} from "react";
import { Route,Switch,BrowserRouter, Link, useHistory} from "react-router-dom";

// import Button from 'react-bootstrap/Button';
//import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import AccDetails from "./pages/AccDetails/AccDetails";
import RegisteredEvents from './pages/RegisteredEvents/RegisteredEv';
import Certificates from './pages/Certificates/Certificates';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';

//var data = require('../Services/data.json')
import "./index.css";
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

const Event = (props) => {
  const data = JSON.parse(localStorage.getItem('data'));
  var regevs = JSON.parse(localStorage.getItem('reg_events'));
  // const regevs = {"5":{"group_id":7550,"type":"group","name":"Two For A Tango","members":[{"member_name":"Somya Gupta","member_sfid":"SF16802","reg_id":7715,"group_id":7550},{"member_name":"Yashi Agrawal","member_sfid":"SF18961","reg_id":7716,"group_id":7550}]},"10":{"reg_id":7549,"type":"solo","name":"SF Idol","iscert":0}};
  // const data = {"id":16802,"name":"Somya Gupta","dob":"18-11-2001","email":"somyagupta777@gmail.com","alt_email":"","fb_link":null,"college":"IIT Kharagpur","yop":2025,"mobile":"9971860682","por":"","addr":"D-56, Hauz Khas","city":"New Delhi","state":"Delhi","multiplier":0,"status":1,"sf_id":"SF16802","gender":"F","is_ca":0,"is_final_ca":0,"is_fb_user":0,"payment_status":0,"verify_status":0,"card_issued":0,"remember_token":null,"created_at":"2021-02-19 17:04:10","updated_at":"2021-02-19 17:04:10","updated_by":null,"reg_complete":1,"payment_allowance":1,"is_caA":0,"ca_list":null,"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE2ODAyLCJpc3MiOiJodHRwczovL21haW5hcGkuc3ByaW5nZmVzdC5pbi9hcGkvdXNlci9sb2dpbi9wYXNzd29yZCIsImlhdCI6MTYzNDU1MTk5NSwiZXhwIjoxNjM0NTU1NTk1LCJuYmYiOjE2MzQ1NTE5OTUsImp0aSI6Ik1jVEt6T1hpY0JhV2lrMW0ifQ.K_jY6Ow7WAaXZqNPtMs18bUQPVW-uHFw6T9WCUZiv4A"};
    

  const renderComp = () => {
    switch (props.comp) {
      case "info":
        return(<AccDetails data={data} />);
      case "regevs":
        return(<RegisteredEvents />);
      // case "certifs":
      //   return(<Certificates />);
      default:
        return(<AccDetails />);
    }
  }
  return (
  <div className="p-backgroundimg app">
    <div className="back-btn dash-back-btn" ><Link to="/" style={{color: "white"}}><FontAwesomeIcon icon={faArrowCircleLeft} ></FontAwesomeIcon></Link></div>
    <Link className="zone-button" style={{position:"fixed"}} to={"/"}>
      <img src="/favicon.ico" alt="homepage" height='50px' />
    </Link>
    <Nav name={"A Picture Tale"} />
    <div className="p-container1">
      {renderComp()}
    </div>
  </div>

)}

export default Event


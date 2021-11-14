import React from 'react'
import { NavLink, Link, useHistory } from "react-router-dom";
import { BorderColor, ContactSupport, Gavel, MeetingRoom, ArrowBackIos } from '@material-ui/icons';

import { Router } from '@material-ui/icons';
import { BrowserRouter } from 'react-router-dom';
function Sidebar({props}) {
    let history = useHistory();
    console.log(props, props.eventName);
    return (
        <><>
                    <div className="event-header active">
                <button className="event-back" >
                    {/* <ArrowBackIos></ArrowBackIos> */}
                </button> 
                <div></div>
                <div className="event-logo" style={{transform:"translateY(-2rem)"}}>
                    <NavLink to="/"><p style={{ textTransform: "capitalize"}}><span>Dashboard</span></p></NavLink>
                </div>
                <nav className="event-main-nav">
                    <ul className="event-hover-slide event-unstyled">
                        <NavLink activeClassName="active" exact to={`/eventspage/${props.eventName}`}>
                            <li className="navitems" style={{height:"10vh", marginTop:"0px", borderBottom:" solid 1px #c4a546"}} >
                                <p style={{height:"10vh", marginTop:"0px"}}>&nbsp;<ContactSupport style={{fontSize: "3rem",  transform: "translate(0,-1.5rem)", height: "48px", width: "48px"}} className="icons active" /><span className='options'>About</span></p>
                            </li>
                        </NavLink>
                        <NavLink activeClassName="active" to={`/eventspage/${props.eventName}/submission`}>
                            <li className="navitems" style={{height:"10vh", marginTop:"0px",borderBottom:" solid 1px #c4a546"}}>
                                <p style={{height:"10vh" , marginTop:"0px"}}>&nbsp;<Gavel style={{fontSize: "3rem",  transform: "translate(0,-1.5rem)", height: "48px", width: "48px"}} className="icons active" /><span className='options'>Submission</span></p>
                            </li>
                        </NavLink>
                        <NavLink activeClassName="active" to={`/eventspage/${props.eventName}/rules`}>
                            <li className="navitems" style={{height:"10vh",borderBottom:" solid 1px #c4a546"}}>
                                <p style={{height:"10vh", marginTop:"0px"}}>&nbsp;<BorderColor style={{fontSize: "3rem",  transform: "translate(0,-1.5rem)", height: "48px", width: "48px"}} className="icons active" /><span className='options'>Rules</span></p>
                            </li>
                        </NavLink>
                        <NavLink activeClassName="active" to={`/eventspage/${props.eventName}/register`}>
                            <li className="navitems" style={{height:"10vh"}}>
                                <p style={{height:"10vh", marginTop:"0px"}}>&nbsp;<MeetingRoom style={{fontSize: "3rem",  transform: "translate(0,-1.5rem)", height: "48px", width: "48px"}} className="icons active" /><span className='options'>Register</span></p>
                            </li>
                        </NavLink>
                       
                    </ul>
                </nav>
                </div>
            </>

        </>
    );
}

export default Sidebar

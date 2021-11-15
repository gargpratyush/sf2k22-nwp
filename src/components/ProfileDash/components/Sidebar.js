import React from 'react'
import { NavLink, Link, useHistory } from "react-router-dom";
import { InfoOutlined,  NoteAddOutlined, ArrowBackIos,VerifiedUserOutlined } from '@material-ui/icons';

import { Router } from '@material-ui/icons';
import { BrowserRouter } from 'react-router-dom';
function Sidebar({ props }) {
    return (
        <><>
                    <div className="event-header active">
                <button className="event-back" >
                    {/* <ArrowBackIos></ArrowBackIos> */}
                </button> 
                <div></div>
                <div className="event-logo" style={{transform:"translateY(-2rem)"}}>
                    <NavLink exact to="/"><p style={{ textTransform: "capitalize" }}> <span>Dashboard</span></p></NavLink>
                </div>
                <nav className="event-main-nav">
                    <ul className="event-hover-slide event-unstyled">
                        <NavLink activeClassName="active" to="/profile/registeredEvents">
                            <li className="navitems" style={{height:"10vh", marginTop:"0px", borderBottom:" solid 1px #c4a546"}} >
                                <p style={{height:"10vh", marginTop:"0px"}}>&nbsp;<NoteAddOutlined style={{fontSize: "3rem",  transform: "translate(0,-1.5rem)", height: "48px", width: "48px"}} className="icons active" /><span className='options'>Events</span></p>
                            </li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/profile">
                            <li className="navitems" style={{height:"10vh", marginTop:"0px",borderBottom:" solid 1px #c4a546"}}>
                                <p style={{height:"10vh" , marginTop:"0px"}}>&nbsp;<InfoOutlined style={{fontSize: "3rem",  transform: "translate(0,-1.5rem)", height: "48px", width: "48px"}} className="icons active" /><span className='options'>Account Details</span></p>
                            </li>
                        </NavLink>
                        {/* <NavLink activeClassName="active" to="/profile/certificates">
                            <li className="navitems" style={{height:"10vh",borderBottom:" solid 1px #c4a546"}}>
                                <p style={{height:"10vh", marginTop:"0px"}}>&nbsp;<VerifiedUserOutlined fontSize="large" className="icons active" /><span className='options'>Certificates</span></p>
                            </li>
                        </NavLink> */}
                       
                       
                    </ul>
                </nav>
                </div>
            </>

        </>
    );
}

export default Sidebar

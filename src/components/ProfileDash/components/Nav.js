import React from "react";
import "./nav.css";
import Sidebar from "./Sidebar";


const Nav = (props) => {

  return (
    <div>
      <Sidebar props={props} />
    </div>
  );

}

export default Nav;

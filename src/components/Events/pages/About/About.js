import { Card } from "@material-ui/core";
import React from "react";

import './about.css'




const AboutPage = (props) => {
  
  return (
    <div className="judgement-wrapper">
    <Card className="content-box effect-h1" style={{backgroundColor:"#2326309f" ,color:"white"  }}>
      <div>
        <h1 className="hover hover-1" style={{textAlign:"center"}}>About {props.name}</h1>
      </div>
      <ul  style={{textAlign:"center"}}>
        <p style={{fontSize:"1.1rem"}}>{props.about}</p>
      </ul>
    </Card>
    </div>
  )
};

export default AboutPage;

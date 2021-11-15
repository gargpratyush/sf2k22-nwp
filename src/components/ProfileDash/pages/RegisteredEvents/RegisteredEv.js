import { Card } from "@material-ui/core";
import React, { useState } from 'react';
import Regev from "./Regev";

import './about.css'
import { toast } from "react-toastify";



const AboutPage = (props) => {
  const data = JSON.parse(localStorage.getItem('data'));
  var regevs = JSON.parse(localStorage.getItem('reg_events'));
  const [refresh, setRefresh] = useState(false);
  const [regevElement, setRegevElement] = useState(regevs? (Object.keys(regevs).map((regev) =>
    <Regev
      eid={regev}
      refresh={refresh}
      setRefresh={setRefresh}
    />)):<div style={{fontSize: "larger"}}>You haven't registered for any events yet.</div>)
  if (refresh) {
    regevs = JSON.parse(localStorage.getItem('reg_events'));
     if (regevs != undefined) {
      setRegevElement(Object.keys(regevs).map((regev) =>
        <Regev
          eid={regev}
          refresh={refresh}
          setRefresh={setRefresh}
        />))
     }
     else {
      setRegevElement(
        <div style={{fontSize: "larger"}}>You haven't registered for any events yet.</div>
      )
     }
      setRefresh(false);
  }

  return (
    <div style={{width: "80%", zIndex: "1"}} className="prof-outer-content">
      <Card className="p-content-box p-effect-h1" style={{ backgroundColor: "#2326309f", color: "white"}}>
        <div style={{ textAlign: "center" }}>
          <h1 className="p-hover p-hover-1">Registered Events</h1>
        </div>
        {regevElement}
      </Card>
    </div>
  )
};

export default AboutPage;

import { Card } from "@material-ui/core";
import React, { useState } from 'react';
import Regev from "./Regev";

import './about.css'
import { toast } from "react-toastify";



const AboutPage = (props) => {
  const data = JSON.parse(localStorage.getItem('data'));
  var regevs = JSON.parse(localStorage.getItem('reg_events'));
  const [refresh, setRefresh] = useState(false);
  const [regevElement, setRegevElement] = useState(Object.keys(regevs).map((regev) =>
    <Regev
      eid={regev}
      refresh={refresh}
      setRefresh={setRefresh}
    />))
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
    <div className="p-db-contain">
      <Card className="p-db-content-box p-db-effect-h1" style={{ backgroundColor: "#2326309f", color: "white", textAlign: "left", borderRadius: "1.5rem" }}>
        <div style={{ textAlign: "left" }}>
          <h1 className="hover hover-1">Registered Events</h1>
        </div>

      </Card>
      <Card className="p-db-content-box p-db-effect-h1" style={{ backgroundColor: "#2326309f", color: "white", borderRadius: "1.5rem" }}>
        {regevElement}
      </Card>
    </div>
  )
};

export default AboutPage;

import React from "react";
//import "./rules.css";
import data from "../../../Services/data.json"
//import data from "../../json files/data.json";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    listStyleType: "decimal",
    margin: "10px",
  },
})



const Rules = () => {
  const classes = useStyles();
  const data = JSON.parse(localStorage.getItem('data'));
  var regevs = JSON.parse(localStorage.getItem('reg_events'));
  //  const regevs = {"5":{"group_id":7550,"type":"group","name":"Two For A Tango","members":[{"member_name":"Somya Gupta","member_sfid":"SF16802","reg_id":7715,"group_id":7550},{"member_name":"Yashi Agrawal","member_sfid":"SF18961","reg_id":7716,"group_id":7550}]},"10":{"reg_id":7549,"type":"solo","name":"SF Idol","iscert":0}};

  return (
    <div>
      <Card className="content-box effect-h1" style={{ backgroundColor: "#2326309f", color: "white", borderRadius: "1.5rem" }}>
        <h1 className="hover hover-1" >Certificates</h1>

        {Object.keys(regevs).map((regev) =>
        (<div className="certificate-div">
          <h4 className="certificate-div-eventname">{regevs[regev].name}</h4>
          {(regevs[regev].iscert) ?
                /*<Certi 
                  name={data.name}
                  college={data.college}
                  event={regevs[regev].name}
                />*/<></> :
            <div className="certificate-div-text">Certificate not available</div>}
        </div>)
        )}


      </Card>
    </div>
  )
};

export default Rules;

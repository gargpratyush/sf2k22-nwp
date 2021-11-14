import React from "react";
import "./rules.css";
import data from "../../../Services/data.json"
//import data from "../../json files/data.json";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    listStyleType: "decimal",
    margin: "10px",
  },
})

//let eventName = "Nukkad"
// let rules = {}
// let rules_prelims = {}
// let rules_prefinals = {}
// let rules_finals = {}

// for (var event in data) {
//   const prop = Object.keys(data[event])
//   rules[event] = prop.includes('rules') ? data[event].rules : []
//   rules_prelims[event] = prop.includes('rules_prelims') ? data[event].rules_prelims : []
//   rules_prefinals[event] = prop.includes('rules_prefinals') ? data[event].rules_prefinals : []
//   rules_finals[event] = prop.includes('rules_finals') ? data[event].rules_finals : []
// }

//console.log([rules, rules_prelims, rules_prefinals, rules_finals])
const Rules = (props) => {
 const classes = useStyles();
  // let eventName = props.name

  return (
    <div>
      <Card className="db-content-box db-effect-h1" style={{backgroundColor:"#2326309f" ,color:"white"  }}>
        <h1 className="hover hover-1">Rules</h1>
        <ul className={classes.list}>
        {props.rules.map(rule => (
          <li>{rule}</li>
        ))}
        </ul>
        <p>
        There is no theme for prelims. The theme for the final round shall be released online two weeks before the event.
        </p>
      </Card>
    </div>
  )
};

export default Rules;

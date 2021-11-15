import React, {useState, useEffect} from "react";
import {Formik, Form, Field} from 'formik'
import './judgement.css';
import { Card } from "@material-ui/core";
import { HTTP } from "../../../Services/config";
import {toast} from "react-toastify";

// let judgement = []

// for (var event in data) {
//   judgement[event] = data[event].JC;
// }


const Judgement = ({data}) => {
  // useEffect(
  //   () => {
  //     async function getSubmission(){
  //       HTTP.post("api/user/get_submission", {
  //         token: JSON.parse(localStorage.getItem("data")).token,
  //         event_id: JSON.parse(localStorage.getItem("events"))[eventName]
  //       }, {
  //         headers: {
  //           'Content-Type': "application/json"
  //         }
  //       }).then(res => {
  //         const data = res.data;
  //         console.log(data)
  //         if(data.code === 0){
  //           setLink(data.message || "");
  //         }
  //       }).catch(err => {
  //         console.log(err);
  //       })
  //     } 
  //     if(link === null){
  //       setLink("");
  //       getSubmission();
  //     }
  //   }
  
  return (
    <div classname="prof-outer-content" style={{maxWidth:"90%", zIndex: "1"}} >
     {/* <Card className="content-box effect-h1" style={{backgroundColor:"#2326309f" ,color:"white", textAlign:"left"  }}>
      <div style={{textAlign:"left"}}>
        <h1 className="hover hover-1">Account Details</h1>
      </div>
      
    </Card> */}
    <Card className="p-content-box p-effect-h1" style={{backgroundColor:"#2326309f" ,color:"white" }}>
      <h1 class="p-hover p-hover-1">{data.name}</h1>

      <div class="profile-card-college">
      {data.college} ({data.yop})
      </div>
      <h3 class="profile-sf-id">{data.sf_id}</h3>
      <div class="profile-card-text">
        <div class="profile-card-text-title">Place: </div>
        <div class="profile-card-text-content">{data.city}, {data.state}</div>
      </div>

      <div class="profile-card-text">
        <div class="profile-card-text-title">Date of Birth: </div>
        <div class="profile-card-text-content">{data.dob}</div>
      </div>

      <div class="profile-card-text">
        <div class="profile-card-text-title">Email: </div>
        <div class="profile-card-text-content">
        {data.email}
        </div>
      </div>

      <div class="profile-card-text">
        <div class="profile-card-text-title">Phone: </div>
        <div class="profile-card-text-content">{data.mobile}</div>
      </div> 
    </Card>
    </div>
  )
};

export default Judgement;

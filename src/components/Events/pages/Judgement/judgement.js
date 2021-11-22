import React, {useState, useEffect} from "react";
import {Formik, Form, Field} from 'formik'
import './judgement.css';
import data from "../../../Services/data.json"
import { Card } from "@material-ui/core";
import { HTTP } from "../../../Services/config";
import {toast} from "react-toastify";

let judgement = []

for (var event in data) {
  judgement[event] = data[event].JC;
}

const Judgement = (props) => {
  const [link, setLink] = useState(null);
  let eventName = "A picture Tale";
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

  // let isOffline;

  // if(props.mode=="Online")
  // isOffline=false;
  // else{
  //   isOffline = (props.offlinecities.find(cityname => cityname == props.city))?true:false;
  // }

  let subElem = <></>;
  // if(!isOffline){
  //    subElem=(
  //     <>
  //     <ul>
  //       {/*
  //         judgement[eventName].map((item, i) => (
  //           <li key={i}>
  //             <span className="padd">{item[0]}</span><span>{item[1]}</span>
  //           </li>
  //         ))
  //       */}
  //       <li key='1'>
  //           Mail the pdf format of your picture tale to "{props.mail}". The format of the mail is mentioned below:
  //           <br/>Subject - HITCH HIKE || {props.name.toUpperCase()}
  //           <br/>Mail body: {"{"}
  //           <br/><span className="submit-tab">Name:</span>
  //           <br/><span className="submit-tab">Contact Number:</span>
  //           <br/><span className="submit-tab">College Name:</span>
  //           <br/><span className="submit-tab">City:</span>
  //           <br/><span className="submit-tab">SF ID:</span>
  //           <br/>{"}"}
  //       </li>
  //       <li ley='2'>
  //         Top entries shall be published from the official Spring Fest Instagram handle as well as our website.
  //         <ul>
  //           <li>Post your entry on your instagram account, your account should be public.</li>
  //           <li>Participants need to tag @iitkgp.springfest in the post.</li>
  //           <li>The hashtags #sf2k22 and #Hitchhike need to be used in the caption.</li>
  //         </ul>
  //       </li>
  //     </ul></>
  //   )}
  //   else{
  //     subElem=(
  //         <ul style={{listStyleType:"none", textAlign: "center"}}>
  //           <li>The events will be held offline here</li>
  //           <li>You will be notified soon.</li>
  //         </ul>
  //       ) 
  //   }
    subElem=(
      <ul style={{listStyleType:"none", textAlign: "center"}}>
        {/* <li>The events will be held offline here</li> */}
        <li style={{fontSize:"1.2rem"}}>You will be notified soon.</li>
      </ul>
    )
  
  
  return (
    <div className="judgement-wrapper">
    <Card className="content-box effect-h1" style={{backgroundColor:"#2326309f" ,color:"white" }}>
      <div>
        <h1 className="hover hover-1">Submission</h1>
      </div>
      {subElem}
      {/* <span>{link === "" || link === null ? "" : "Submitted Link: " + link}</span>
      {(props.reged) ?(<Formik
        initialValues={{link: ""}}
        onSubmit={(values) => {
          const linkexp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
          const regex = new RegExp(linkexp);
          if(!values.link.match(regex)){
            toast.error("url not valid", {position: toast.POSITION.TOP_RIGHT});
            return;
          }
          const payload = {
            token: JSON.parse(localStorage.getItem("data")).token,
            event_id: JSON.parse(localStorage.getItem("events"))[eventName],
            submit_link: values.link
          }
          console.log(payload);
          HTTP.post("api/user/submission", payload, {
            headers: {
              'Content-Type': "application/json"
            }
          }).then(res => {
            if(res){
              const data = res.data;
              console.log(data);
              if(data.code === 0){
                toast.success(data.message, {position: toast.POSITION.TOP_RIGHT})
              }
              else{
                toast.error("error submitting link", {position: toast.POSITION.TOP_RIGHT});
              }
            }
          }).catch(err => {
            console.log(err);
            toast.error("error submitting link", {position: toast.POSITION.TOP_RIGHT});
          })
        }}
      >
        <Form>
          <div className="event-email">
            <Field 
              type='text' 
              id='link' 
              name='link'
              placeholder='Drive link' 
              className="event-input event-text"
            />
          </div>
          <input className="event-submit" type="submit" value="Submit" />
        </Form>
      </Formik>): null}
      {/* <form onSubmit={() => {alert("Link submitted successfully.")}}>
        <input type="text" value={link} onChange={(val) => setLink(val)} />
        <input type="submit" value="Submit" />
      {/* </form> */} 
    </Card>
    </div>
  )
};

export default Judgement;

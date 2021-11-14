import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eventList from '../../../Services/data.json';
// import AddMember from './AddMember.js'
import { toast } from "react-toastify";
import axios from 'axios';

const Regev = (props) => {
  const data = JSON.parse(localStorage.getItem('data'));
  var regevs = JSON.parse(localStorage.getItem('reg_events'));
  const [addMem, setAddMem] = useState(false)

  // const regevs = {"5":{"group_id":7550,"type":"group","name":"Two For A Tango","members":[{"member_name":"Somya Gupta","member_sfid":"SF16802","reg_id":7715,"group_id":7550},{"member_name":"Yashi Agrawal","member_sfid":"SF18961","reg_id":7716,"group_id":7550}]},"10":{"reg_id":7549,"type":"solo","name":"SF Idol","iscert":0}};
  // const data = {"id":16802,"name":"Somya Gupta","dob":"18-11-2001","email":"somyagupta777@gmail.com","alt_email":"","fb_link":null,"college":"IIT Kharagpur","yop":2025,"mobile":"9971860682","por":"","addr":"D-56, Hauz Khas","city":"New Delhi","state":"Delhi","multiplier":0,"status":1,"sf_id":"SF16802","gender":"F","is_ca":0,"is_final_ca":0,"is_fb_user":0,"payment_status":0,"verify_status":0,"card_issued":0,"remember_token":null,"created_at":"2021-02-19 17:04:10","updated_at":"2021-02-19 17:04:10","updated_by":null,"reg_complete":1,"payment_allowance":1,"is_caA":0,"ca_list":null,"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE2ODAyLCJpc3MiOiJodHRwczovL21haW5hcGkuc3ByaW5nZmVzdC5pbi9hcGkvdXNlci9sb2dpbi9wYXNzd29yZCIsImlhdCI6MTYzNDU1MTk5NSwiZXhwIjoxNjM0NTU1NTk1LCJuYmYiOjE2MzQ1NTE5OTUsImp0aSI6Ik1jVEt6T1hpY0JhV2lrMW0ifQ.K_jY6Ow7WAaXZqNPtMs18bUQPVW-uHFw6T9WCUZiv4A"};
  const sfid = data.sf_id;
  const type = regevs[String(props.eid)].type;
  const name = regevs[String(props.eid)].name;
  const mem = eventList.events.find(eventItem => eventItem.name === name).teamsize;
  const grpid = (type === 'group') ? regevs[String(props.eid)].group_id : "";
  const leadersfid = (type === 'group') ? "NWP".concat(String(regevs[String(props.eid)].leadersfid)) : "";
  const members = (type === 'group') ? regevs[String(props.eid)].members.map((m) => m.member_name) : null;

  const dereg_team = () => {
    const conf = window.confirm("Do you surely want to deregister?")
    if (conf === false) return
    axios.post("https://mainapi.springfest.in/api/event/deregister_team", {
      event_id: props.eid,
      token: data.token,
      group_id: grpid
    }).then((resp) => {
      console.log(resp.data)
      if (resp.data.code === 0) {
        toast.success("Successfully deregistered", {position: toast.POSITION.TOP_CENTER})
        //alert("Successfully deregistered")
        axios.post("https://mainapi.springfest.in/api/user/get_registered_events", {
          token: JSON.parse(localStorage.getItem('data')).token
        }).then((resp2) => {
          const msg = resp2.data.message
          const keys = Object.keys(msg)
          console.log(msg)
          var regevs = {}
          for (var i=0; i<keys.length; i++) {
            var evs = msg[keys[i]]
            for (var j=0; j<evs.length; j++) {
              if (i === 1)
                  regevs[evs[j].event_id] = { 
                      reg_id: evs[j].reg_id, 
                      type: keys[i], 
                      name: evs[j].event_name,
                      iscert: evs[j].is_cert
                  }
              else if (i === 0)
                  regevs[evs[j].event_id] = { 
                      group_id: evs[j].group_id, 
                      type: keys[i], 
                      name: evs[j].event_name, 
                      members: evs[j].members,
                      iscert: evs[j].is_cert.is_cert,
                      leadersfid: evs[j].leader_id.leader_id
                  }
            }
          }
          localStorage.setItem('reg_events', JSON.stringify(regevs))
          props.setRefresh(true)
        }).catch((err) => {
          console.log(err)
        })
      }
      else toast.error(resp.data.message, {position: toast.POSITION.TOP_CENTER}) //alert(resp.data.message)
      }).catch((err) => {
        console.log(err)
      })
    }

    const dereg_mem = (param) => {
      const conf = window.confirm("Do you surely want to deregister?")
      if (conf === false) return
      axios.post("https://mainapi.springfest.in/api/event/deregister_member", {
        event_id: props.eid,
        token: data.token,
        type: param,
        group_id: grpid
      }).then((resp) => {
        console.log(resp.data)
        if (resp.data.code === 0) {
          toast.success("Successfully deregistered", {position: toast.POSITION.TOP_CENTER})
          //alert("Successfully deregistered")
          axios.post("https://mainapi.springfest.in/api/user/get_registered_events", {
            token: JSON.parse(localStorage.getItem('data')).token
          }).then((resp2) => {
            const msg = resp2.data.message
            const keys = Object.keys(msg)
            console.log(msg)
            var regevs = {}
            for (var i=0; i<keys.length; i++) {
              var evs = msg[keys[i]]
              for (var j=0; j<evs.length; j++) {
                if (i === 1)
                    regevs[evs[j].event_id] = { 
                        reg_id: evs[j].reg_id, 
                        type: keys[i], 
                        name: evs[j].event_name,
                        iscert: evs[j].is_cert
                    }
                else if (i === 0)
                    regevs[evs[j].event_id] = { 
                        group_id: evs[j].group_id, 
                        type: keys[i], 
                        name: evs[j].event_name, 
                        members: evs[j].members,
                        iscert: evs[j].is_cert.is_cert,
                        leadersfid: evs[j].leader_id.leader_id
                    }
              }
            }
            localStorage.setItem('reg_events', JSON.stringify(regevs))
            props.setRefresh(true)
          }).catch((err) => {
            console.log(err)
          })
        }
        else alert(resp.data.message)
      }).catch((err) => {
        console.log(err)
      })
    }

  return (
    <div class="event-div-group">
      <div class="event-heading-line">
        <div><h3 class="event-div-group-eventname">
          {name} ({type})
        </h3></div>
        <div>
        <Link to={`/eventspage/${name}/submission`} style={{ color: "whitesmoke", textDecoration: "none" }} ><div class="event-link">Submission Page &rarr;</div></Link></div>
      </div>
      {(type === 'group') ?
        (<div class="event-div-group-text">
          <ol>
            {members.map((mem) => <li>{mem}</li>)}
          </ol>
          {/* {((sfid === leadersfid) && (members.length < mem[1])) ? <button class="event-button" onClick={() => {setAddMem(true)}}>+ Add Members</button> : ""} */}
          {(sfid === leadersfid) ? <button class="event-button" onClick={()=>{dereg_team()}}>Deregister Team</button> : ""}
          {((sfid !== leadersfid) && (members.length > mem[0])) ? <button onClick={()=>{dereg_mem("group")}}>Leave Group</button> : ""}
        </div>) :
        <button class="event-button" onClick={() => {dereg_mem("solo")}} >Deregister</button>
      }
      {/* <AddMember 
        name={name} 
        addMem={addMem} 
        setAddMem={setAddMem}
        refresh={props.refresh}
        setRefresh={props.setRefresh}
      /> */}
    </div>
  );
}

export default Regev;
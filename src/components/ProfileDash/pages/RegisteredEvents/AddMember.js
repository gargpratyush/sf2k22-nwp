import React from "react";
import { Formik, Form, Field } from "formik";
import Modal from "react-modal";
import { Card } from "@material-ui/core";
import { toast } from 'react-toastify';
import axios from 'axios';
//import "./AddMember.css";
Modal.setAppElement("body");

const data = JSON.parse(localStorage.getItem("data"));
//const events = require("../../Services/data.json")

function AddMember(props) {
  const eventsid = JSON.parse(localStorage.getItem("events"))[props.name];
  console.log(eventsid);
  console.log(localStorage.getItem("reg_events"));
  const members = JSON.parse(localStorage.getItem("reg_events"))[String(eventsid.id)].members

  const iv = {
    MemId: ""/*,
    MemEmail: "",*/
  };
  const os = (values) => {
    //alert("You have successfully registered")
    console.log(values)
    var event_reg = members.map((mem) => { return { sf_id: mem.member_sfid, email: 'a' } })
    event_reg.push({ sf_id: values.MemId, email: 'a' })

    if (!(values.MemId/* && values.MemEmail*/)) {
      toast.warning("The field is empty.", { position: toast.POSITION.TOP_CENTER });
      return;
    }
    const req = {
      event_id: eventsid,
      token: data.token,
      event_reg: event_reg,
    };
    console.log(req)
    axios.post("https://mainapi.springfest.in/api/event/add_member", req)
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.code === 0) {
          toast.success("New member successfully added", { position: toast.POSITION.TOP_CENTER });
          axios.post("https://mainapi.springfest.in/api/user/get_registered_events", {
            token: data.token,
          })
            .then((resp2) => {
              const msg = resp2.data.message;
              const keys = Object.keys(msg);
              console.log(msg);
              var regevs = {};
              for (var i = 0; i < keys.length; i++) {
                var evs = msg[keys[i]];
                for (var j = 0; j < evs.length; j++) {
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
              localStorage.setItem("reg_events", JSON.stringify(regevs));
              props.setAddMem(false);
              props.setRefresh(true)
            })
            .catch((err) => {
              console.log(err);
            });
        } else toast.error("Some problem occured", { position: toast.POSITION.TOP_CENTER });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /*const vl = values => {
    let errors = {}
    for (var i=1; i<values.members; i++) {
      if (!values.MemId[i-1]) {
        errors.MemId[i-1] = "Some field is(/are) empty."
        break
      }
    }
    return errors
  }*/

  return (
    <Modal
      isOpen={props.addMem}
      style={{
        overlay: {
          position: "fixed",
          zIndex: 100,
        },
        content: {
          margin: "100px calc(50vw - 200px)",
        },
      }}
    >
      <div>
        <button onClick={() => props.setAddMem(false)}>Back</button>
        <Formik initialValues={iv} onSubmit={os}>
          <Form>
            <Card
              className="p-db-content-box p-db-effect-h1"
              style={{
                backgroundColor: "#2326309f",
                color: "white"
              }}>
              <span>
                <div>
                  <h1 className="p-hover p-hover-1">Add Member</h1>
                </div>
                <div className="p-evd-container">
                  <div className='p-evd-input-container'>
                    <label
                      className="p-evd-label"
                      htmlFor={"MemId"}>
                      Member ID
                    </label>
                    <Field
                      component='input'
                      name={"MemId"}
                      type='text'
                      placeholder={"Member Id"}
                      className='p-evd-input'
                      id={"MemId"}
                    />
                  </div>
                </div>
                <div className='outer'>
                  <button
                    type='submit'
                    className='button_slide slide_right'
                  >
                    Register!
                  </button>
                </div>
              </span>
            </Card>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
}

export default AddMember;

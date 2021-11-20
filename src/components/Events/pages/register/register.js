import React, { useRef, useState } from "react";
import "./Register.css";
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Card } from "@material-ui/core";
// import {HTTP} from '../../../Services/config'
import { toast } from 'react-toastify';
import '../About/about.css';

const axios = require('axios')
const data = ('data' in localStorage) ? JSON.parse(localStorage.getItem('data')) : [] ;
const events = require("../../../Services/data.json")
var regev = (('reg_events' in localStorage) ? localStorage.getItem('reg_events') : [] );

const eventsObj = {
  'A Mighty Pen': 17,
  'A Picture Tale': {
    id: 27,
    teamsize: [1, 1],
  },
  'BIZTECH': 32,
  'Beat IT': 65,
  'Bran-D': 38,
  'Centrifuge': 6,
  'Chefs Corner': 55,
  'Dumb C': 19,
  'English Poetry Slam': {
    id: 24,
    teamsize: [1, 1]
  },
  'Hindi Poetry Slam': {
    id:67,
    teamsize:[1,1]
  },
  'I Me Myself': {
    id: 16,
    teamsize: [1, 1]
  },
  'Impromptu': 18,
  'India Calling': 23,
  'Jumble The Good Word': 21,
  'Mary Bucknel Trophy': 29,
  'Mr. and Ms. SPRING FEST': 72,
  'National Level Debate': 20,
  'Navyata': 70,
  'Notes Less Travelled': {
    id: 75,
    teamsize: [1, 1],
  },
  'Nrityakala': {
    id: 76,
    teamsize: [1, 1]
  },
  'Paint It': 35,
  'Panache': {
    id: 41,
    teamsize: [1, 1],
  },
  'Rangmanch': 14,
  'Rapmania': 77,
  'Retrowave': 78,
  'SF Idol': {
    id: 10,
    teamsize: [1, 1],
  },
  'SFM': 68,
  'Shake A Leg': {
    id: 1,
    teamsize: [1, 1],
  },
  'Sketch It': 36,
  'SpEnt': 44,
  'Stash N Show': 71,
  'Top It to Win It': 57,
  'Two For A Tango': {
    id: 5,
    teamsize: [2, 2],
  },
}
localStorage.setItem("events", JSON.stringify(eventsObj))

function Signup(props) {
  // console.log("props", props)
  const eventsid = ('events' in localStorage) ? JSON.parse(localStorage.getItem("events")) : [] ;
   regev = (('reg_events' in localStorage) ? localStorage.getItem('reg_events') : [] );
  // console.log(eventsid)
  const eventName = props.name
  const formRef = useRef()
  const [smin, smax] = eventsObj[eventName].teamsize;
  // console.log("smin", smin);
  // console.log("smax",smax);
  const [isLogged, setLogged] = useState('data' in localStorage);
  console.log("regev",regev);
  const [reged, setReged] = useState((isLogged) ? ((regev.includes(String(props.name)) ? true : false)) : false);
  console.log("reged",reged);
 console.log("isLogged",isLogged);
 
  var opt = []
  for (var i = smin; i <= smax; i++) opt.push(i)
  // console.log("smax1", smax)

  const initialValues = {
    numberOfMembers: smin,
    UserId: data.sf_id,
    MemId: Array(smax).fill(""),
    MemEmail: Array(smax).fill("")
  }


  // const validationSchema = Yup.object({
  //   numberOfMembers: Yup.string().required('Required'),
  //   MemId: Yup.array().of(
  //     Yup.object().shape({
  //       memberId: Yup.string().required('Required',)
  //     })
  //   )
  // })

  function onChangeMembers(e, field, values, setValues) {
    const MemId = [...values.MemId]
    const numberOfMembers = e.target.value || 0;
    const previousNumber = parseInt(field.value || '0')
    if (previousNumber < numberOfMembers) {
      for (let i = previousNumber; i < numberOfMembers; i++) {
        MemId.push({ memberId: '' })
      }
    }
    else {
      for (let i = previousNumber; i >= numberOfMembers; i--) {
        MemId.splice(i, 1);
      }
    }

    setValues({ ...values, MemId })

    field.onChange(e);
  }

  function onSubmit(values) {
    // console.log("ab")
    // console.log('form values', values)
    var token1 = data.token;
    var event_reg = [{ sf_id: data.sf_id , email: "abc@gmail.com" }];
    for (var i = 1; i < values.numberOfMembers; i++) {
      event_reg.push({ sf_id: values.MemId[i - 1], email: "abc@gmail.com" });
      if (!(values.MemId[i - 1])) {
        toast.error("Some field is(/are) empty.",{ position: toast.POSITION.TOP_CENTER });
        return
      }
    }
    
    // axios.post('https://mainapi.springfest.in/api/user/login/password',
    //   {
    //     "email": "test@test.test",
    //     "password": "12345678"
    //   }).then((response) => {
    //     token1 = response.data.message.token;
    //     axios.get("https://mainapi.springfest.in/api/event/get_events").then((resp1) => {
    //       // console.log("resp1.data.message", resp1.data.message)
    //     })
    // const token1=data.token
        const req={
          event_id: eventsObj[eventName].id,
          // token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEyODk0LCJpc3MiOiJodHRwczovL21haW5hcGkuc3ByaW5nZmVzdC5pbi9hcGkvdXNlci9sb2dpbi9wYXNzd29yZCIsImlhdCI6MTYzNTkyODI2MywiZXhwIjoxNjM1OTMxODYzLCJuYmYiOjE2MzU5MjgyNjMsImp0aSI6IkMyZ0JkZ1Nhc1Rtbm5QaG0ifQ.mHoTu9ZXilg7-3yrThDJbCWoIcpbZfsuYOX3CP4YAQ8",
          token: data.token,
          event_reg: event_reg
        }
        // console.log("req",req)
        axios.post("https://mainapi.springfest.in/api/event/register", req).then((resp) => {
          console.log("resp.data", resp.data)
          if (resp.data.code === 0) {
            toast.success("You have successfully registered for " + eventName, { position: toast.POSITION.TOP_CENTER })
            setReged(true);
            axios.post("https://mainapi.springfest.in/api/user/get_registered_events", {
              token: data.token
            }).then((resp2) => {
              console.log("resp2", resp2)
              const msg = resp2.data.message
              const keys = Object.keys(msg)
              console.log(msg)
              var regevs = {}
              for (var i = 0; i < keys.length; i++) {
                var evs = msg[keys[i]]
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
              localStorage.setItem('reg_events', JSON.stringify(regevs))
              console.log("props setReged", props)
              console.log("Regevs",regevs)
              setReged(true)
            }).catch((err) => {
              console.log(err)
            })
          }
          else
            toast.error("Some problem occured, Please refresh the page and try again.", { position: toast.POSITION.TOP_CENTER })
        }).catch((err) => {
          console.log(err)
        })
      // })
  }
  if (!reged && isLogged ) {
    return (
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
        innerRef={formRef}
      >
        {({ errors, values, touched, setValues }) => {
          // console.log("values", values)
          return (<div className="judgement-wrapper">
            <Card className="content-box  effect-h1" style={{ backgroundColor: "#2326309f", color: "white" }}>
              <span>
              <Form>
                <div>
                  <h1 className="hover hover-1" style={{textAlign: "center"}}>Register for {props.name}</h1>
                </div>
                {
                  (smax === 1) ? null : <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div> <ul><p>
                      Note: You will be considered as team leader.
                      If anyone other than you is supposed to be
                      the leader, ask him to register.
                    </p></ul>
                    </div>
                    <div >
                      <Field name='numberOfMembers'>
                        {({ field }) => {
                          // console.log('field', field)
                          return (
                            <div className='evd-dropdown'>
                              <select {...field} onChange={e => onChangeMembers(e, field, values, setValues)} id='numberOfMembers' name='numberOfMembers' placeholder='Number of members' className="evd-dropdown" >
                                <option value="">Number of Members</option>
                                {opt.map(i =>
                                  <option key={i} value={i}>{i}</option>
                                )}
                              </select>
                              {errors.numberOfMembers && touched.numberOfMembers ? <div className="error-in-red">{errors.numberOfMembers}</div> : null}
                            </div>
                          )
                        }
                        }
                      </Field>
                    </div>
                    <div className="evd-container">
                      <div className='evd-input-container'>
                        <label className="evd-label">Your User ID</label>
                        <Field component='input' name='UserId' type='text' className='evd-input' placeholder='User' id='UserId' readOnly />
                      </div>
                    </div>
                    <Field>
                      {(props) => {
                        var othmem = []
                        for (var i = 1; i < props.form.values.numberOfMembers; i++)
                          othmem.push(
                            <div className="evd-container">
                              <div className='evd-input-container'>
                                <label className="evd-label" htmlFor={'MemId' + String(i - 1)}>Member {i + 1} ID</label>
                                <Field component='input' type='text' className='evd-input' id={'MemId' + String(i - 1)}
                                  name={'MemId[' + String(i - 1) + ']'} />
                              </div>
                            </div>
                          )
                        return othmem
                      }}
                    </Field>
                    {/* <FieldArray name='members'>
                {() => (values.MemId.map((member, i) => {
                  console.log("values", values)
                  const memberErrors = errors.MemId?.length && errors.MemId[i] || {};
                  const memberTouched = touched.MemId && touched.MemId[i] || {};
                  return (
                    <div className="evd-container">
                      <div key={i} className='evd-input-container'>
                      <label className="evd-label">Member {i+1} ID</label>
                        <Field component='input' name={`members.${i}.memberId`} type='text' className='evd-input' />
                      </div>
                      <ErrorMessage name={`members.${i}.memberId`} component='div' className='error-in-red' />
                    </div>  
                  )
                }))}
              </FieldArray> */}
                  </div>
                }
                <div style={{textAlign: "center"}}>
                  <button type='submit' className='register-btn-evd'>Register!</button>
                </div>
                </Form>
              </span>
            </Card></div>
          )
        }
        }
      </Formik>
    )
  }
  else if (!isLogged) {
    return (<div className="judgement-wrapper">
      <Card className="content-box  effect-h1" style={{backgroundColor:"#2326309f" ,color:"white"  }}>
        <div>
          <h1 className="hover hover-1" style={{textAlign: "center"}} >Register for {props.name} </h1>
        </div>
        <ul>
          <h3 style={{textAlign: "center"}}>You need to login first to register for this event. </h3>
        </ul>
      </Card></div>
    )
    // <h2 className="alreadyReg"></h2>
  }
  else if (reged && isLogged) {
    return (<div className="judgement-wrapper">
      <Card className="content-box  effect-h1" style={{backgroundColor:"#2326309f" ,color:"white"  }}>
        <div>
          <h1 className="hover hover-1" style={{textAlign: "center"}}>Register for {props.name}</h1>
        </div>
        <ul>
          <h2 style={{textAlign: "center"}}> You have already registered for this event. </h2>
        </ul>
      </Card></div>
    )
    // return <h2 className="alreadyReg">You already registered for this event. </h2>
  }
}
// export default EvRegistration


export default Signup;


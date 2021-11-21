import React,{useState} from 'react'
import './footerstyle.css';
import './footerpopupstyle.css';
import headsdata, { Data } from './headsdata';
import './headsdata.js'
import Subheadsdata from './Subheadsdata';
import './Subheadsdata.js'
function Footer() {
    
    return (
        <section className="Footer">
            <div className="footer-container">
            <h1 className="footer-heads-heading">
                CONTACT US
            </h1>
                <div className="footer-row">
                    
                {headsdata.map((headsdata,index)=>{
                return(
                <>
                <div className="col-md-3 col-sm-6">
                <div className="footer-our-team">
                
                <div className="headscard-pic">
                <img src={headsdata.picture} alt="team-member"  className="img-fluid"/>
                </div>
                <div className="headscard-content">
                <h3 className="headscard-title">{headsdata.title}</h3>
                <span className="headscard-post">{headsdata.post}</span>
                <ul className="headscard-social">
                <li><a target="_blank" href={headsdata.fb} className="fa fa-facebook"></a></li>
                <li><a target="_blank" href={headsdata.linkedin} className="fa fa-linkedin"></a></li>
                </ul>
                
                </div>
                
                </div>
                
                </div>
                
                </>
                
                )})}
                
                </div>
                
                
            </div>
            <h5 className="contact-line"></h5>
            <div className="creditdiv">
                <div className="creditheading">Website Credits</div>
                <div className="buttons">
                
                {Subheadsdata.map((Subheadsdata,index)=>{
                return(
                <>
               
                {/* <h3 className="headscard-title">{Subheadsdata.title}</h3> */}
                {/* <li><a target="_blank" href={Subheadsdata.fb} >{Subheadsdata.title}</a></li> */}
                <a target="_blank" href={Subheadsdata.linkedin} className="subheadlinkedid" ><div className="subheadsbutton">{Subheadsdata.title}</div></a>
                
                
                </>
                
                )})}</div>
            </div>
            
            
            {/* <div className="footer-credits-container">

                <p id="trigger">Website Credits<br/></p>
                <div className="footer-credits-popup" id="popup">
                        <h1 className="footer-credits-popup-heading">
                            Website Credits
                        </h1>
                        <p className="footer-credits-popup-details">
                            Aditya Chari<br/>Akshat Tiwari<br/>Amardeep Sinha<br/>Dhananjaya Swain<br/>Gaurav Patidar<br/>Kartik Khanna<br/>
                            Pratyush Garg<br/>Rajdeep Das<br/>Roopak Priydarshi<br/>Sambhav Jena<br/>Somya Gupta<br/>Suraj Gupta<br/>Yashi Agrawal
                        </p>
                </div> */}
            <div className="footer-credits-links"><a target="_blank" href="https://www.facebook.com/springfest.iitkgp" className="fa fa-facebook"/><a target="_blank" href="https://www.instagram.com/iitkgp.springfest/?hl=en" className="fa fa-instagram"/>
            <a target="_blank" href="https://twitter.com/springfest_kgp?lang=en" className="fa fa-twitter"/><a target="_blank" href="https://www.linkedin.com/in/sfiitkgp/" className="fa fa-linkedin"/></div>
            {/* </div> */}

       </section>
    )
    }
export default Footer


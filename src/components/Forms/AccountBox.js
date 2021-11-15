import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LoginFormOne from './LoginFormOne';
import { motion } from "framer-motion";
import SignupFormOne from './SignupFormOne.js';
import { AccountContext } from "./AccountContext ";
import img from '../Map/images/background.png';
import Modal from 'react-modal';
import zIndex from '@material-ui/core/styles/zIndex';
import { ToastContainer, toast } from 'react-toastify';

Modal.setAppElement('body');

const BoxContainer = styled.div`
  width: 300px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
  background-color: #080e1c;
  font-family: Poppins;
  color: #ffffff;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(80deg);
  top: -400px;
  left: -70px;
  background-image: url(${img});
  `;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  font-family: Poppins;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  font-family: Poppins;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  background-color: #080e1c;
  font-family: Poppins;
  color: #080e1c;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)",
    },
    collapsed: {
        width: "160%",
        height: "700px",
        borderRadius: "58%",
        transform: "rotate(68deg)",
    },
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

export default function AccountBox(props) {
    const history = useHistory();
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    useEffect(() => {
        props.setLogged(props.isLogged);
    })

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    };

    const contextValue = { switchToSignup, switchToSignin };

    return (
        <AccountContext.Provider value={contextValue}>
            <Modal isOpen={props.isOpen}
                onRequestClose={() => props.setModal(false)}
                style={{
                    content:
                    {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "340px",
                        minHeight: "540px",
                        display: "inline-block",
                        flex: "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "19px",
                        border: "none",
                        // boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        backgroundColor: "rgba(255, 255, 255, 0.00)",

                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                        zIndex: "1000",
                        opacity: "1",
                    },
                    overlay: {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        zIndex: "15",
                    }
                }}
            >
                <BoxContainer>
                    <TopContainer>
                        <BackDrop
                            initial={false}
                            animate={isExpanded ? "expanded" : "collapsed"}
                            variants={backdropVariants}
                            transition={expandingTransition}
                        />
                        <div onClick={() => props.setModal(false)}
                            style={{
                                fontFamily: 'Poppins, Sans SC',
                                color: "white",
                                zIndex: "5000",
                                position: "absolute",
                                top: "0.6rem"
                            }}
                        >
                            <svg
                                width="32"
                                height="32"
                                style={{
                                    fill: "white",
                                    // paddingLeft: "5px",
                                    paddingTop: "5px"
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z" />
                            </svg>
                        </div>

                        {active === "signin" && (
                            <HeaderContainer style={{
                                transform: `translate(${0}px, ${2}rem)`
                            }}>
                                <HeaderText >Welcome</HeaderText>
                                <HeaderText>Back</HeaderText>
                                <SmallText>Please sign-in to continue!</SmallText>
                            </HeaderContainer>
                        )}
                        {active === "signup" && (
                            <HeaderContainer style={{
                                transform: `translate(${0}px, ${2}rem)`
                            }} >
                                <HeaderText >Create</HeaderText>
                                <HeaderText>Account</HeaderText>
                                <SmallText>Please sign-up to continue!</SmallText>
                            </HeaderContainer>
                        )}
                    </TopContainer>
                    <InnerContainer>
                        {active === "signin" && <LoginFormOne setLogged={props.setLogged} setModal={props.setModal} />}
                        {active === "signup" && <SignupFormOne setLogged={props.setLogged} setModal={props.setModal} />}
                    </InnerContainer>
                </BoxContainer>
            </Modal>
            {/* <ToastContainer /> */}
        </AccountContext.Provider >
    );
}
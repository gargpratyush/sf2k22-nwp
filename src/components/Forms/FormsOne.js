import React, { useState } from "react";
import styled from 'styled-components';
import AccountBox from './AccountBox.js';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
Modal.setAppElement('body');

const Container = styled.div`
color: #ffffff;
width: 100%;
height : 100%;
display: flex;
flex-direction: column;
 align-items: center;
justify-content: center;
`;

export default function FormsOne(props) {
   
    return (
        <Container>
                <AccountBox setIsLogged={props.setIsLogged} /> 
                <ToastContainer style={{zIndex: "2000000"}}/>
        </Container >
    );
}
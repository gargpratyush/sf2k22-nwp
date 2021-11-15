import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
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
display: flex
flex-direction: column;
 align-items: center;
justify-content: center;
`;

export default function FormsOne(props) {
    const history = useHistory();
    const [modalIsOpen, setModal] = useState(false);

    return (
        <Container>
            {(!props.isLogged) ?
                (
                    <button
                        style={{
                            backgroundColor: '#060b26',
                            borderRadius: '10px',
                            color: 'white',
                            padding: '10px',
                            marginBottom: '450px'
                        }}
                        onClick={() => setModal(true)}>
                        Sign In / Sign Up
                    </button>
                ) :
                (
                    <button
                        style={{
                            backgroundColor: '#060b26',
                            borderRadius: '10px',
                            color: 'white',
                            padding: '10px',
                            marginBottom: '450px'
                        }}
                        onClick={() => {
                            props.setIsLogged(false)
                            localStorage.removeItem('data')
                            localStorage.removeItem('reg_events')
                            localStorage.removeItem('events')
                            if (history.location.pathname.search("profile") >= 0)
                                history.push("/");
                            }}>
                        Logout
                    </button>
                )
            }
            <AccountBox isOpen={modalIsOpen} setModal={setModal} isLogged={props.isLogged} setLogged={props.setIsLogged} />
        </Container >
    );
}
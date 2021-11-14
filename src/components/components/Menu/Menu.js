import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { PopUp } from "./popup.js";

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Login In/Sign Up
      </a>
      <a href="/cities&events" tabIndex={tabIndex} >
        <span aria-hidden="true"></span>
        Cities and Events
        </a>
      <a href="/" tabIndex={tabIndex} >
        <span aria-hidden="true"></span>
        Contact Us
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-dark justify-content-between ">
             <Link to="/">
              <img src={logo} className="navbar-brand"></img>
            </Link>
            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
            <Link  to = "/"className="nav-link">
            <TextContainer>
            Products
            </TextContainer >
            </Link>
            </li>
            </ul>
            <Link to ="/cart" className="ml-auto">
           <ButtonContainer className="btn btn-primary"> 
            <span className="mr-2">
            <i className="fab fa-opencart"></i>
            </span>
            My cart
            </ButtonContainer>
            </Link>


            </nav>

            
        );
    }
}
const ButtonContainer =  styled.button   
`
background-color:white;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;`
;

const TextContainer = styled.text `color : white`;


export default Navbar;
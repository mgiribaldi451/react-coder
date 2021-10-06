import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import React from 'react'
import { Link } from 'react-router-dom'
//import { GiShoppingCart } from "react-icons/gi";


const Menu = () => {

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                        <Link exact to = '/'>
                        <Navbar.Brand >Mi tienda</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link  to = '/'>
                                    <span className="nav-link">Home </span>
                                </Link>
                                <Link  to ='/categoria/buzos'>
                                    <span className="nav-link"> Buzos </span> 
                                </Link>
                                <Link  to = '/categoria/camisetas'>
                                <span className="nav-link"> Camisetas </span>  
                                </Link>
                                <Link  to = '/categoria/camperas'>
                                <span className="nav-link"> Camperas </span> 
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Link exact to = '/cart'>
                        <CartWidget />
                        </Link>
                    
                </Container>

            </Navbar>
        </>
    )
}


export default Menu;
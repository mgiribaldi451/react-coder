import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/images.png';


const Menu = () => {

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Link className='a-none' exact to='/'>
                        <img className='logo-style' src={logo} />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='a-none' to='/categoria/buzos'>
                                <span className="nav-link"> Buzos </span>
                            </Link>
                            <Link className='a-none' to='/categoria/camisetas'>
                                <span className="nav-link"> Camisetas </span>
                            </Link>
                            <Link className='a-none' to='/categoria/camperas'>
                                <span className="nav-link"> Camperas </span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className='a-none' exact to='/cart'>
                        <CartWidget />
                    </Link>

                </Container>

            </Navbar>
        </>
    )
}


export default Menu;
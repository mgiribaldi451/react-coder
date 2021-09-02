import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
//import { GiShoppingCart } from "react-icons/gi";


const Menu = () => {

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="ligth">
                <Container>
                    <Navbar.Brand href="#home">Menu-practico2</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Producto 1</Nav.Link>
                            <Nav.Link href="#link">Producto 2</Nav.Link>
                            <Nav.Link href="#link">Producto 3</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget/>
            </Navbar>
        </>
    )
}


export default Menu;
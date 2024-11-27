import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import 'bootstrap/dist/css/bootstrap.css';

const WebNav = ()=>{
    return(
        <navbar expand="lg" className="bg-body-tertiary">
            <container>
                <Navbar.Brand>Dan Cosgrove</Navbar.Brand>
                <Nav>
                <Nav.link>About me</Nav.link>
                <Nav.link>Contact</Nav.link>
                <Nav.link>texting</Nav.link>
                </Nav>
                </container>
        </navbar>
    )
}

export default WebNav
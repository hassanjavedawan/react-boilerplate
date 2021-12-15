import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link as Links } from "react-scroll";

export default function Menu() {
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 600) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark-v" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/assets/logo-hr.png"
                        width="160"
                        height="33"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        {/* <Nav.Link target='_blank' href="https://www.pinksale.finance/#/launchpad/0x09C14E72487bA8d5173f81477e8F09158801245b?chain=BSC">
                            Join Presale
                        </Nav.Link> */}
                        <Nav.Link href="/whitepaper.pdf" target='_blank'>
                            Whitepaper
                        </Nav.Link>
                        <Nav.Link href="https://stake.yearnlab.com/" target='_blank'>
                            Stake
                        </Nav.Link>
                        <Nav.Link href="/governance" target='_blank'>
                            Vote
                        </Nav.Link>
                        <Nav.Link href="https://create.yearnlab.com/" target='_blank'>
                            Create Token
                        </Nav.Link>
                        <NavDropdown
                            title="More"
                            id="collasible-nav-dropdown"
                            show={show}
                            onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}
                        >
                            <Links
                                to="team"
                                spy={false}
                                smooth={false}
                                offset={-70}
                                duration={500}
                            >
                                <NavDropdown.Item onClick={() => setShow(false)}>
                                    Team
                                </NavDropdown.Item>
                            </Links>
                            <Links
                                to="timeline"
                                spy={false}
                                smooth={false}
                                offset={-70}
                                duration={500}
                            >
                                <NavDropdown.Item onClick={() => setShow(false)}>
                                    Roadmap
                                </NavDropdown.Item>
                            </Links>
                            <Links
                                to="tokonomics"
                                spy={false}
                                smooth={false}
                                offset={-70}
                                duration={500}
                            >
                                <NavDropdown.Item onClick={() => setShow(false)}>
                                    Tokonomics
                                </NavDropdown.Item>
                            </Links>
                            <Links
                                to="faqs"
                                spy={false}
                                smooth={false}
                                offset={-70}
                                duration={500}
                            >
                                <NavDropdown.Item onClick={() => setShow(false)}>
                                    FAQs
                                </NavDropdown.Item>
                            </Links>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
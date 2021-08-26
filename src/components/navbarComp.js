import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import imgLogo from '../assets/logo.png'

export class navbarComp extends Component {
    render() {
        return (
            <div className="sticky-top">
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="#home" className="center">
                    <img alt="" src={imgLogo} width="80" className="d-inline-block align-top"/>{' '}
                    Characters | Gallery
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
        )
    }
}

export default navbarComp

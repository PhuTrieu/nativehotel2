import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../Navigation/Sidebar/SidebarLeft';
import { Jumbotron, Container } from 'reactstrap';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:''
        }
    }

    componentWillMount(){
        var user = JSON.parse(sessionStorage.getItem('objAdmin'));
        this.setState({
            username: user.username
        });
    }    

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <NavbarTop/>
                    </Col>
                </Row>
                <Row>
                    <Col md="2" style={{paddingRight: '0',paddingRight: '0px', height: '92vh'}}>
                        <SidebarLeft />
                    </Col>
                    <Col md="10" style={{paddingLeft: '0'}}>
                        <div className="container">
                            <Jumbotron fluid>
                                <Container fluid>
                                    <h1 className="display-3">Hello, {this.state.username}!!!</h1>
                                    <p className="lead">Welcome to NATIVE hotel booking online admin page.</p>
                                </Container>
                            </Jumbotron>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

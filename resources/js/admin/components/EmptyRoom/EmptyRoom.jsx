import React, { Component } from 'react'
import { 
    Table,
    Row,
    Col,
    Input,
    Form,
    FormGroup,
    Label,
    Button,
    Tooltip
} from 'reactstrap';
import { Link } from 'react-router-dom';
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../Navigation/Sidebar/SidebarLeft';
import axios from 'axios';

export default class EmptyRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseDate: '',
            roomType: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
        this.showRoom = this.showRoom.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    submitSearch(e){
        e.preventDefault();
        var date = {
            date: this.state.chooseDate
        }
        axios.post('http://127.0.0.1:8000/api/empty_room',date).then(res=>{
            if (res.data != null) {
                this.setState({
                    roomType: res.data
                })
            }
        })
    }

    showRoom(){
        var list = this.state.roomType.map((item,index)=><div>
            {item.tenLP}
        </div>)
        return list;
    }

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <NavbarTop />
                    </Col>
                </Row>
                <Row>
                    <Col md="2" style={{paddingRight: '0',paddingRight: '0px', height: '92vh'}}>
                        <SidebarLeft />
                    </Col>
                    <Col md="10" style={{paddingLeft: '0'}}>
                        <div className="container">
                            <h3 className="text-center mt-2">TÌM KIẾM PHÒNG TRỐNG</h3>
                            <hr />
                            <div style={{height: '15px'}} />
                            <Row>
                                <Col>
                                    <Form>
                                        Tìm kiếm <input type="date" onChange={this.handleChange} />
                                        <div style={{ height: '10vh' }}/>
                                        <Row content="text-center">
                                            <Col style={{marginLeft: '78%'}}>
                                                <Button color="warning" onClick={this.submitSearch}>Tìm</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                            {this.showRoom()}
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}

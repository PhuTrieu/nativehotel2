import React, { Component } from 'react';
import { Table } from 'reactstrap';
import RecordRegister from './RecordRegister';
import axios from 'axios';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            obj_register: []
        };
        this.showObjectRegister = this.showObjectRegister.bind(this);
    }

    loadRegister(){
        axios.get('http://nativehotel2.herokuapp.com/api/registers').then( response => {
            this.setState({
                obj_register: response.data
            })
        });
    }

    componentWillMount(){
        this.loadRegister();
    }

    showObjectRegister(){
        const lst = this.state.obj_register.map((item,index)=>
            <RecordRegister 
                key={index} 
                no={item.id}
                username={item.username}
                password={item.password}
                gender={item.gender}
                email={item.email}
                phonenumber={item.phone}
            />
        );
        return lst;
    }
    
    render() {
        return (
            <>
                <h1 className="text-center">INFORMATION CUSTOMER</h1>
                <Table striped>
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone number</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        { this.showObjectRegister() }
                    </tbody>
                </Table>    
            </>

             
        );
    }
}

export default Register;

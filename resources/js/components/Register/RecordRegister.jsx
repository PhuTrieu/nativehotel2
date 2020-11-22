import React, { Component } from 'react';

export class RecordRegister extends Component {
    render() {
        console.log(this.props);
        return (
            <tr>
                <th scope="row">{ this.props.no }</th>
                <td>{ this.props.username }</td>
                <td>{ this.props.password }</td>
                <td>{ this.props.gender == "m" ? "male": "female" }</td>
                <td>{ this.props.email }</td>
                <td>{ this.props.phonenumber }</td>
            </tr>
        );
    }
}

export default RecordRegister;
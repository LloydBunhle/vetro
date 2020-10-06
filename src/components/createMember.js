import Axios from 'axios';
import React, { useState } from 'react';
import Navbar from './navbar';
import { getToken, getId } from '../helpers/utils'

export default function CreateMember() {
    const [createMember, setCreatMember] = useState({
        first_name: '',
        last_name: '',
        cell_number: '',
        store_code:'',
        dob: '',
        gender: ''
    })
    const { first_name, last_name, cell_number,store_code, dob, gender } = createMember;
    const onChange = e => setCreatMember({ ...createMember, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        const token = getToken();

        Axios.post(`http://vapi.vetroms.co.za/api/loyalty/member/store/?api_token=${token}`, createMember)
            .then(res => {
                console.log(res)
            })
            .catch(() => {
                console.log("Something went wrong")
            })
    }

    return (
        <div>
            <Navbar />
            <h4>Add new member</h4>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control"
                        name="first_name"
                        value={first_name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control"
                        name="last_name"
                        value={last_name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Cell Number</label>
                    <input type="text" className="form-control"
                        name="cell_number"
                        value={cell_number}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>store_code</label>
                    <input type="text" className="form-control"
                        name="store_code"
                        value={store_code}
                        onChange={onChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <input type="text" className="form-control"
                        name="gender"
                        value={gender}
                        onChange={onChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="text" className="form-control"
                        name="dob"
                        value={dob}
                        onChange={onChange}
                        
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Add Member" />
            </form>
        </div>
    )
}
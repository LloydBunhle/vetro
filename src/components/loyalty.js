import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { getToken, getId } from '../helpers/utils'
import { Link } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Loyalty() {

    const [memberlist, setMemberlist] = useState([]);

    useEffect(() => {
        const token = getToken();
        const userid = getId();
        if (!token) {
            return;
        }
        Axios.get(`http://vapi.vetroms.co.za/api/loyalty/member/all/${userid}?api_token=${token}`)
            .then(res => {
                console.log(res.data.data)
                setMemberlist(res.data.data);
            })
            .catch(() => console.log("errot"));
    }, [])

    return (
        <div>
            <Navbar />
            <Link to="createMember">
                <button type="button" className="btn btn-secondary btn-sm" >Add Member</button>
            </Link>
            <table className="table mt-2">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Cell Number</th>
                        <th scope="col">DoB</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {memberlist.map(member => (
                        <tr key={member.id}>
                            <td>{member.first_name}</td>
                            <td>{member.last_name}</td>
                            <td>{member.cell_number}</td>
                            <td>{member.dob}</td>
                            <td>{member.gender}</td>
                            <td>{member.balance}</td>
                            <td>
                                <UncontrolledDropdown>
                                    <DropdownToggle caret>
                                        Dropdown
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
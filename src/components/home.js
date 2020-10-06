
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { getToken, getId } from '../helpers/utils'

export default function Home(prop) {

    const [homelist, setHomelist] = useState([]);
    const [balance, setBalance] = useState([]);

    useEffect(() => {
        const token = getToken()
        const userid = getId()
        Axios.get(`http://vapi.vetroms.co.za//api/dashboard/client/${userid}?api_token=${token}`)
            .then(res => {
                setHomelist([res.data.data])

                console.log([res.data.data])
            })
            .catch(() => {
                console.log("err")
            })
        viewBalance(userid, token);
    }, []);

    function viewBalance(id, token) {
        Axios.get(`http://vapi.vetroms.co.za/api/loyalty/${id}?api_token=${token}`)
            .then(res => {
                console.log(res.data.data)
                setBalance([res.data.data])
            })
            .catch(() => {
                console.log("error")
            })
    }

    return (
        <div>
            <Navbar />
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h5 className="display-4">Welcome back!</h5>
                </div>
            </div>
            <h5>Client Dashboard</h5>

            <table className="table mt-2">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Point Balance</th>
                        <th scope="col">Total Members</th>
                        <th scope="col">Total Orders</th>
                        <th scope="col">Number of stores</th>
                    </tr>
                </thead>
                <tbody>
                    {homelist.map((client, index) => (
                        <tr key={index}>
                            <td>{client.balances.points_balance}</td>
                            <td>{client.members.total}</td>
                            <td>{client.orders.total_value}</td>
                            <td>{client.stores.total}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <h5>Loyalty Balance summary</h5>
            {balance.map((blnce, index) => (
                <p key={index}>
                    <label>Registration Points: {blnce.registration_points}</label><br />
                    <label >Points in Rand:{blnce.point_in_rands}</label>
                </p>

            ))}
        </div>
    )

}
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { getToken, getId } from '../helpers/utils'

export default function TransactionHistory(props) {
    const [historylist, setHistory] = useState([]);


    useEffect(() => {
        const token = getToken()
        const number = props.match.params.id;
        Axios.get(`http://vapi.vetroms.co.za/api/loyalty/transaction/member/${number}?api_token=${token}`)
            .then(res => {
                setHistory(res.data.data)
                console.log(res.data.data)
            })
            .catch(() => {
                console.log("err")
            })
    }, []);

    return (
        <div>
            <Navbar />
            <h5>Transaction history</h5>

            <table className="table mt-2">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Amount</th>
                        <th scope="col">Order total</th>
                        <th scope="col">Transaction status</th>
                        <th scope="col">Last Updated </th>
                    </tr>
                </thead>
                <tbody>
                    {historylist.map(hst => (
                        <tr key={hst.id}>
                            <td>{hst.amount}</td>
                            <td>{hst.order_total}</td>
                            <td>{hst.transaction_status}</td>
                            <td>{hst.updated_at}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
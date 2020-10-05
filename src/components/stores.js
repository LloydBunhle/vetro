import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getToken, getId } from '../helpers/utils'
import Navbar from './navbar';
import {Link} from 'react-router-dom';

export default function Stores() {

    const [storelist, setStoreslist] = useState([]);

    useEffect(() => {
        const token = getToken();
        const userid = getId();
        if (!token) {
            return;
        }
        Axios.get(`http://vapi.vetroms.co.za/api/store/all/${userid}?api_token=${token}`)
            .then(res => {
                console.log(res.data.data)
                setStoreslist(res.data.data);
            })
            .catch(() => console.log("errot"));
    }, [])

    return (
        <div>
            <Navbar />
            <h4>List of Stores </h4>
            <Link to="create">
            <button type="button" className="btn btn-secondary btn-sm" >Create Store</button>
            </Link>
            
            <table className="table mt-2">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Store Name</th>
                        <th scope="col">Date Created</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {storelist.map(store => (
                        <tr key={store.id}>
                            <td>{store.code}</td>
                            <td>{store.name}</td>
                            <td>{store.created_at}</td>
                            <td>{store.address}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}
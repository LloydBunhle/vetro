
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { getToken, getId } from '../helpers/utils'

export default function Home() {

    const [storelist, setStoreslist] = useState([]);

    useEffect(() => {
        const token = getToken();
        const userid = getId();
        if (!token) {
            return;
        }
        Axios.get('http://vapi.vetroms.co.za/api/dashboard/client?api_token='+token +'?user_id='+userid).then(data => console.log(data));

    }, [])

    return (

        <div>
            <Navbar />

            <h1>Welcome</h1>
        </div>
    )

}
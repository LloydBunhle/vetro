import Axios from 'axios';
import React, { useState } from 'react';
import Navbar from './navbar';
import { getToken, getId } from '../helpers/utils'

export default function CreateStore(props) {
    
    const [createStore, setCreateStore] = useState({
         name:'',
         code:'',
         address:''
    });
    const {name ,code,address} = createStore;
    const onChange = e => setCreateStore({ ...createStore, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault()
        const token = getToken();
        Axios.post(`http://vapi.vetroms.co.za/api/store?api_token=${token}`, createStore)
            .then(res => {
                console.log(res)
                props.history.push('/store')
            })
            .catch(()=>{
                console.log("Something went wrong")
            })
    }

    return (
        <div>
            <Navbar/>
            
            <h4>Create new store</h4>
            <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control"
                 name="name"
                 value={name}
                 onChange={onChange}
                 required
                />
            </div>
            <div className="form-group">
                <label>Code</label>
                <input type="text" className="form-control" 
                 name="code"
                 value={code}
                 onChange={onChange}
                 required
                />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control" 
                 name="address"
                 value={address}
                 onChange={onChange}
                 required
                />
            </div>
            <input type="submit" className="btn btn-primary" value="Add Store" />
        </form>
        </div>
    )
}
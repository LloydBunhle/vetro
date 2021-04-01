import Axios from 'axios';
import React, { useState } from 'react';
import { setUserSession } from '../helpers/utils'

export default function Login(props) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault()
        Axios.post("http://vapi.vetroms.co.za/api/auth/login", formData)
            .then(res => {
                console.log(res)
                setUserSession(res.data.data.token, res.data.data.id)
                props.history.push('/home')
            }).catch(() => console.log("something went wrong"))
    }


    return (
        <div >
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h5 className="display-4">The Vetro Loyalty API tes</h5>
                </div>
            </div>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />

                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control"
                        name="password"
                        value={password}
                        onChange={onChange}

                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
        </div>
    )
}
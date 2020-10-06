import Axios from 'axios';
import React, { useState } from 'react';
import Navbar from './navbar';
import { getToken, getId } from '../helpers/utils'

export default function EarnPoint(props) {

    const [earnPoint, setearnPoint] = useState({
        store_code: "",
        line_items: [
            {
                code: "",
                description: "",
                quantity: "",
                price: ""
            }
        ],
        order_total: "",
        order_reference: ""
    })


    const { store_code, line_items: { code, description, quantity, price }, order_reference, order_total } = earnPoint;

    const onChange = (e) => setearnPoint({ ...earnPoint, [e.target.name]: e.target.value, line_items: { ...earnPoint.line_items, [e.target.name]: e.target.value }, })

    const onSubmit = e => {
        e.preventDefault()
        const token = getToken();
        const number = props.match.params.id;

        Axios.post(`http://vapi.vetroms.co.za/api/loyalty/transaction/earn/${number}?api_token=${token}`, earnPoint)
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

            <h4>Earn points</h4>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Store Core</label>
                    <input type="text" className="form-control"
                        name="store_code"
                        value={store_code}
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
                    <label>description</label>
                    <input type="text" className="form-control"
                        name="description"
                        value={description}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>quantity</label>
                    <input type="text" className="form-control"
                        name="quantity"
                        value={quantity}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>price</label>
                    <input type="text" className="form-control"
                        name="price"
                        value={price}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>order_total</label>
                    <input type="text" className="form-control"
                        name="order_total"
                        value={order_total}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>order_reference</label>
                    <input type="text" className="form-control"
                        name="order_reference"
                        value={order_reference}
                        onChange={onChange}
                        required
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Earn" />
            </form>
        </div>
    )

}
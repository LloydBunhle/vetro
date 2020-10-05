import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {getToken} from './utils'


export default function PrivateRouter({ component: Component, ...rest }) {
    return (
        <Route
        {...rest}
        render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
      />
    )
}
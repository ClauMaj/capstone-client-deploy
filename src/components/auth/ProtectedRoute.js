import React from 'react'
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: PrRoute, ...rest }) => {
    const token = useSelector(state => state.token);

    return (
        < Route {...rest} render={(props) => {
            console.log('in protected');
            if (token) {
                return <PrRoute  {...props} />
            }
            else {
                return <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
            }
        }}
        />
    )
}

export default ProtectedRoute





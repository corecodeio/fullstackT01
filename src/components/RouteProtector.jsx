import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
const RouteProtector = ({ children }) => {
    const { login } = useSelector(state => state.auth);
    if (!login) {
        return <Navigate to='/' />
    }
    return (
        <>
            {children}
        </>
    )
}

export default RouteProtector
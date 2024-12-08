import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const Dashboard = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        window.location.href = '/login'; 
    };

    return (
        <div>
            <h1>Welcome to the Dashboard!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;

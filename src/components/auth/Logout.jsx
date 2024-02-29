import React from 'react';
import logOutIcon from "../../assets/icons/logout.svg"
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log("logging out soon ");
        navigate("/login")
    }
    return (
        <button
            onClick={handleLogout}
            className="icon-btn">
            <img src={logOutIcon} alt="Logout" />
        </button>
    );
};

export default Logout;
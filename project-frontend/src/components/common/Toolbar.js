import { Link } from "react-router-dom";

const Toolbar = () => {

    return (
        <div>
            <Link to="home">Home</Link>
            <Link to="emp">Employee</Link>
            <Link to="emplist">EmpList</Link>
            <Link to="Demo">Demo</Link>
            <Link to="parent">Parent</Link>
            <Link to="register">Register</Link>
            <Link to="login">Login</Link>
            <Link to="logout">Logout</Link>
            <Link to="profile">Profile</Link>
        </div>
    );
};

export default Toolbar;

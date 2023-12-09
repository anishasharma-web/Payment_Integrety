import { useNavigate } from "react-router";

const Logout = () => {

    const navigate = useNavigate();

    const logoutFromHere = () => {
        const confirmation = window.confirm('Are you sure to logout?');
        if (confirmation) {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('currentProfile');
            localStorage.clear();
            alert('You have successfully logged out. Redirecting you to home...');
            navigate('/home');
        }
        else {
            navigate('/logout');
        }
    };

    return (
        <div>
            <h1>Logout</h1>
            <button onClick={logoutFromHere} >Logout</button>
        </div>
    );
};

export default Logout;
import { Link } from "react-router-dom";

const Page404 = () => {

    return (
        <div>
            <h1>Page 404</h1>
            <p>Sorry! The page you are searching is not found.</p>
            <Link to="home">Let's go to Home page, shall we?</Link>
        </div>
    );
};

export default Page404; 

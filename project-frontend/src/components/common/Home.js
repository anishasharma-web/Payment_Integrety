import { useSelector } from "react-redux";
import Demo from '../demo/Demo';

const Home = () => {

    const cmp1 = useSelector(store => store.cmp1Data.cmp1State);

    return (
        <div>
            <h1>Home Component</h1>
            <p> {cmp1} </p>
            <Demo />
        </div>
    );
};

export default Home; 

import { useSelector } from "react-redux";
import { useMyContext } from "../../context/MyContext";

const Comp2 = () => {

    const cmp1 = useSelector(store => store.cmp1Data.cmp1State);
    const cmp2 = useSelector(store => store.cmp2Data.cmp2State);
    const userD = useSelector(store => store.userData.userState);

    const { contextData, setContextData } = useMyContext();

    return (
        <div>
            <h1>Comp2</h1>
            <p>Using redux</p>
            <p>Comp1 data: {cmp1}</p>
            <p>Comp2 data: {cmp2}</p>
            <p>User data: {userD.username}</p>
            <p>Using Context API</p>
            <p>{contextData}</p>
        </div>
    );

};

export default Comp2;

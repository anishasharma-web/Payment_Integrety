import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMyContext } from "../../context/MyContext";
import { setCmp1State } from '../../redux/Comp1Slice';

const Comp1 = () => {

    const [cmp1Field, setCmp1Field] = useState('');

    // fetch sata from store 
    const cmp1 = useSelector(store => store.cmp1Data.cmp1State);
    const cmp2 = useSelector(store => store.cmp2Data.cmp2State);
    const userD = useSelector(store => store.userData.userState);

    const temp = 'Comp1 updated state';
    const dispatch = useDispatch();

    const sendDataToStore = () => {
        // send data to store 
        dispatch(setCmp1State(temp));
    };

    // use Context API

    const { contextData, setContextData } = useMyContext();

    const sendDataToContext = () => {
        setContextData('some other data');
    };

    return (
        <div>
            <h1>Comp1</h1>
            <p>Using redux</p>
            <p>Comp1 data: {cmp1}</p>
            <p>Comp2 data: {cmp2}</p>
            <p>User data: {userD.username}</p>
            <button onClick={sendDataToStore}>Click</button>
            <p>Using Context API</p>
            <p>{contextData}</p>
            <button onClick={sendDataToContext}>Click</button>
        </div>
    );

};

export default Comp1;


// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCmp1State } from '../../redux/Comp1Slice';

// const Comp1 = () => {

//     const [cmp1Field, setCmp1Field] = useState('');

//     // fetch sata from store
//     const cmp1 = useSelector(store => store.cmp1Data.cmp1State);

//     const cmp2 = useSelector(store => store.cmp2Data.cmp2State);
//     const userD = useSelector(store => store.userData.userState);

//     const temp = 'Comp1 updated state';
//     const dispatch = useDispatch();

//     const sendDataToStore = () => {
//         // send data to store
//         dispatch(setCmp1State(temp));
//     };

//     return (
//         <div>
//             <h1>Comp1</h1>
//             <p>Comp1 data: {cmp1}</p>
//             <p>Comp2 data: {cmp2}</p>
//             <p>User data: {userD.username}</p>
//             <button onClick={sendDataToStore}>Click</button>
//         </div>
//     );

// };

// export default Comp1;

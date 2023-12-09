
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
const Demo = () => {

    return (
        <div>
            <p>Demo Component</p>
            <Comp1 />
            <Comp2 />
        </div>
    );
};

export default Demo;



// import { useEffect, useState } from "react";

// const Demo = () => {

//     const [empData, setEmpData] = useState({});

//     // useEffect();
//     // useEffect(() => {}, []);

//     useEffect(() => {
//         setEmpData({
//             eid: 101,
//             firstName: 'Sonu',
//             salary: 100,
//             isMarried: false
//         });
//     }, []);

//     const increaseSalary = () => {
//         setEmpData({
//             ...empData,
//             salary: empData.salary + 1,
//         });
//         console.log(empData.salary);
//     };

//     const changeStatus = () => {
//         setEmpData({
//             ...empData,
//             isMarried: !empData.isMarried,
//         });
//         console.log(empData.isMarried);
//     };

//     const addLastName = () => {
//         setEmpData({
//             ...empData,
//             firstName: empData.firstName + ' Singh',
//         });
//         console.log(empData.firstName);
//     };

//     return (
//         <div>
//             <h1>Demo component</h1>
//             <p>This is demo component.</p>
//             <p>{empData.firstName}</p>
//             <p>{empData.salary}</p>
//             <p> {empData.isMarried ? 'Married' : 'Single'} </p>
//             <button onClick={increaseSalary}>Add salary</button>
//             <br />
//             <br />
//             <button onClick={changeStatus}>Change status</button>
//             <br />
//             <br />
//             <div>
//             </div>
//             <button onClick={addLastName}>addLastName</button>
//         </div>
//     );
// };

// export default Demo;

// // import { useState } from "react";

// // const Demo = () => {

// //     const firstName = 'Sonu';

// //     // create state object in this way
// //     const [salary, setSalary] = useState(100); // number

// //     const [lastName, updateLastName] = useState(''); // string
// //     const [isMarried, setIsMarried] = useState(false); // boolean
// //     const [address, setAddress] = useState({}); // object
// //     const [phones, setPhones] = useState([]); // array
// //     const [empData, setEmpData] = useState({});

// //     const increaseSalary = () => {
// //         setSalary(salary + 1);
// //         console.log(salary);
// //     };
// //     const changeStatus = () => {
// //         setIsMarried(!isMarried);
// //     };

// //     return (
// //         <div>
// //             <h1>Demo component</h1>
// //             <p>This is demo component.</p>
// //             <p>{firstName}</p>
// //             <p>{salary}</p>
// //             <button onClick={increaseSalary}>Click Here</button>
// //             {/* show salary id isMarried  */}
// //             <br />
// //             <button onClick={changeStatus}>Change Status</button>
// //             <p> {isMarried && salary} </p>
// //         </div>
// //     );
// // };

// // export default Demo;


// // const Demo = () => {

// //     const firstName = 'Sonu';
// //     let salary = 100;

// //     const increaseSalary = () => {
// //         salary++;
// //         console.log(salary);
// //     };

// //     return (
// //         <div>
// //             <h1>Demo component</h1>
// //             <p>This is demo component.</p>
// //             <p>{firstName}</p>
// //             <p>{salary}</p>
// //             <div>
// //                 <button onClick={increaseSalary}>Click Here</button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Demo;

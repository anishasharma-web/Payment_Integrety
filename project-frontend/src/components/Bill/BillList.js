// // components/Bill/BillList.js
// import React, { useState, useEffect } from 'react';
// import { getAllBills } from '../../services/BillService';
// import { Link } from 'react-router-dom';

// const BillList = () => {
//   const [bills, setBills] = useState([]);

//   useEffect(() => {
//     // Fetch all bills when the component mounts
//     const fetchAllBills = async () => {
//       try {
//         const allBills = await getAllBills();
//         setBills(allBills);
//       } catch (error) {
//         console.error('Error fetching bills:', error);
//         // Handle error, e.g., redirect to an error page
//       }
//     };

//     fetchAllBills();
//   }, []);

//   return (
//     <div>
//       <h2>Bill List</h2>
//       {bills.length > 0 ? (
//         <ul>
//           {bills.map((bill) => (
//             <li key={bill.id}>
//               <Link to={`/bill-details/${bill.id}`}>
//                 {bill.serviceProvider} - {bill.billType}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No bills found.</p>
//       )}
//     </div>
//   );
// };

// export default BillList;

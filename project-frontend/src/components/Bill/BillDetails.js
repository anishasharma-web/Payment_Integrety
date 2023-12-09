// // components/Bill/BillDetails.js
// import React, { useState, useEffect } from 'react';
// //import { useHistory } from 'react-router-dom';
// import { getBillById, deleteBill } from '../../services/BillService';
// import { useParams, useHistory } from 'react-router-dom';

// const BillDetails = () => {
//   const { billId } = useParams();
//   const history = useHistory();

//   const [bill, setBill] = useState(null);

//   useEffect(() => {
//     // Fetch bill details when the component mounts
//     const fetchBillDetails = async () => {
//       try {
//         const billDetails = await getBillById(billId);
//         setBill(billDetails);
//       } catch (error) {
//         console.error('Error fetching bill details:', error);
//         // Handle error, e.g., redirect to an error page
//       }
//     };

//     fetchBillDetails();
//   }, [billId]);

//   const handleDeleteBill = async () => {
//     try {
//       await deleteBill(billId);
//       alert('Bill deleted successfully!');
//       // Optionally, navigate to the bill list page
//       history.push('/bill-list');
//     } catch (error) {
//       console.error('Error deleting bill:', error);
//       alert('Failed to delete bill. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Bill Details</h2>
//       {bill ? (
//         <div>
//           <p><strong>Service Provider:</strong> {bill.serviceProvider}</p>
//           <p><strong>Bill Type:</strong> {bill.billType}</p>
//           <p><strong>Amount:</strong> {bill.amount}</p>
//           <p><strong>Due Date:</strong> {bill.dueDate}</p>

//           <button onClick={handleDeleteBill}>Delete Bill</button>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default BillDetails;

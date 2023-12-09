// // components/Bill/BillForm.js
// import React, { useState } from 'react';
// import { addBill } from '../../services/BillService';

// const BillForm = () => {
//   const [formData, setFormData] = useState({
//     serviceProvider: '',
//     billType: '',
//     amount: '',
//     dueDate: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     if (!formData.serviceProvider.trim()) {
//       newErrors.serviceProvider = 'Service Provider is required';
//       isValid = false;
//     }

//     if (!formData.billType.trim()) {
//       newErrors.billType = 'Bill Type is required';
//       isValid = false;
//     }

//     if (!formData.amount.trim()) {
//       newErrors.amount = 'Amount is required';
//       isValid = false;
//     } else if (!/^\d+(\.\d{1,2})?$/.test(formData.amount)) {
//       newErrors.amount = 'Invalid amount format';
//       isValid = false;
//     }

//     if (!formData.dueDate.trim()) {
//       newErrors.dueDate = 'Due Date is required';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleAddBill = async (e) => {
//     e.preventDefault();

//     try {
//       if (validateForm()) {
//         await addBill(formData);
//         alert('Bill added successfully!');
//         // Optionally, reset the form or navigate to the bill list page
//       } else {
//         alert('Please check the form for errors.');
//       }
//     } catch (error) {
//       console.error('Error adding bill:', error);
//       alert('Failed to add bill. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Add Bill</h2>
//       <form onSubmit={handleAddBill}>
//         {/* Service Provider */}
//         <div>
//           <label>
//             Service Provider:
//             <input
//               type="text"
//               name="serviceProvider"
//               value={formData.serviceProvider}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.serviceProvider}</span>
//           </label>
//         </div>

//         {/* Bill Type */}
//         <div>
//           <label>
//             Bill Type:
//             <input
//               type="text"
//               name="billType"
//               value={formData.billType}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.billType}</span>
//           </label>
//         </div>

//         {/* Amount */}
//         <div>
//           <label>
//             Amount:
//             <input
//               type="text"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.amount}</span>
//           </label>
//         </div>

//         {/* Due Date */}
//         <div>
//           <label>
//             Due Date:
//             <input
//               type="date"
//               name="dueDate"
//               value={formData.dueDate}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.dueDate}</span>
//           </label>
//         </div>

//         <button type="submit">Add Bill</button>
//       </form>
//     </div>
//   );
// };

// export default BillForm;

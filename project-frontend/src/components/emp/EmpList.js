import { useEffect, useState } from "react";
import { getAllEmps } from "../../services/EmpService";

const EmpList = () => {

    const [allEmpList, setAllEmpList] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        getAllEmps()
            .then((resp) => {
                console.log(resp.data);
                setAllEmpList(resp.data); // use response with 'data' 
                setErrMessage('');
            })
            .catch((err) => {
                console.log(err);
                setErrMessage(`${err.message}`);
                setAllEmpList([]);
            })
    }, []);

    return (
        <div>
            <h1>List of All Employees</h1>
            <p>{errMessage}</p>
            {
                allEmpList.map((emp, k) => {
                    return <p obj={emp} key={k}> {emp.name} </p>
                })
            }
        </div>
    );
};

export default EmpList; 

import axios from "axios";

const empUrl = 'https://jsonplaceholder.typicode.com/users';

const getAllEmps = () => {
    console.log('getAllEmps');
    return axios.get(empUrl);
};

const getEmpById = async (eid) => {
    console.log(eid);
    const resp = await fetch(`${empUrl}/${eid}`);
    if (resp.status !== 200)
        throw await resp.json();
    else
        return await resp.json();
};

export { getAllEmps, getEmpById };
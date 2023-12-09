import axios from "axios";

const userUrl = 'https://jsonplaceholder.typicode.com/users';

const register = (appUser) => {
    console.log(appUser);
    return axios.post(userUrl, appUser);
};

const login = (appUser) => {
    console.log(appUser);
    return axios.get(`${userUrl}/?username=${appUser.username}`);
};

const updateUser = (appUser) => {
    console.log(appUser);
    return axios.post(userUrl, appUser);
};

const logout = () => {
    console.log('logout');
};

export { register, login, updateUser, logout };
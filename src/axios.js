import axios from 'axios';



const instance = axios.create({
    baseURL: 'https://chat-backend-bhuvan.herokuapp.com/'
})


export default instance;

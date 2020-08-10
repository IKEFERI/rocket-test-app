import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})


export const serverAPI = {
    getUsersServ() {
        return instance.get(`users`).then(response => response.data);
    },
    getPostsServ(){
        return instance.get(`posts`).then(response => response.data);
    }
}

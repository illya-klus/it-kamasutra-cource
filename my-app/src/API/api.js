import axios from "axios";
import { profileAPI } from "./profileAPI";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers:{
        "API-KEY" : "f1070a54-2397-45a2-b159-9e94d5daadff"
    }
});




export const UserAPI = {
    getUsers(page, pageSize) {
        return instance
            .get(`/users?page=${page}&count=${pageSize}`)
            .then(response => response.data);
    },

    followUser(id){
            return instance
            .post(`/follow/${id}`)
            .then(response => response.data)
    },

    unfollowUser(id){
        return instance
        .delete(`/follow/${id}`)
        .then(response=> response.data)
    },

    authUser() {
        return instance
            .get(`/auth/me`, {withCredentials: true,})
            .then(response => response.data);
    },

    giveProfile(userId){
        console.warn("You use the obsolete methon. Please use ProfileAPI object for working with profiles.");
        return profileAPI.giveProfile(userId);
    },
}









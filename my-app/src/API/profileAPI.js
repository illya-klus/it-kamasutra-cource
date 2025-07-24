import axios from "axios";



let instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0",
})

export const profileAPI = {
    giveProfile(userId){
        return instance
            .get(`/profile/${userId}`)
            .then(response => response.data);
    },

    getStatus(userId){
        return instance
            .get(`/status/${userId}`)
            .then(response => response.data);
    },
    
    updateStatus(status){
        return instance
            .put(`/profile/status`, {status : status})
            .catch(err => alert("Sorry, thats kinda idiots on backend :( \nTry later!"))
            .then(response => ({code: 1}));
    }
}
import axios from "axios";

// REPLACE ME BEFORE DEPLOY
export default axios.create({
    baseURL: //"http://localhost:4000/",
            "https://spotify-tabs.herokuapp.com/",
    headers: {
        "Content-type": "application/json",
        'Authorization': `${localStorage.getItem('accessToken')}`
    }
});
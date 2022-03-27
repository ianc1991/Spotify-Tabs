import axios from "axios";

export default axios.create({
    baseURL: //"http://localhost:4000/",
             "https://spotify-tabs.herokuapp.com/",
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
    }
});
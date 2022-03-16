import http from './httpCommon';

class DataService {
    // Login to Spotify
    spotifyLogin = async() => {
        const getLogin = await http.get('/login');
        if(!getLogin) return console.log("Error getting spotify login at DataService");
    }

    // Check login
    // checkSpotifyLogin = async(req, res) => {
    //     const checkLogin = await http.get('/checkloggedin');
    //     if(!checkLogin) return false;
    //     return true;
    // }

    // Currently playing + data and color scheme
    getCurrentlyPlaying = async() => {
        const currentlyPlaying = await http.get('/currentlyplaying')
        if(!currentlyPlaying) return console.log("Error getting currently playing at DataService");
        return currentlyPlaying;
    }

    // Check if there is a song playing
    checkIfSongPlaying = async() => {
        const isPlaying = await http.get('/checkifsongisplaying')
        if(!isPlaying) return console.log("Error checking if song playing at DataService");
        return isPlaying;
    }
}

export default new DataService()
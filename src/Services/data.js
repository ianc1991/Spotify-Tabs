import http from './httpCommon';
import spotHttp from './httpSpotify';

class DataService {
    // Login to Spotify
    spotifyLogin = async(req, res) => {
        const getLogin = await http.get('/login');
        if(!getLogin) return console.log("Error getting spotify login at DataService");
    }

    // Check login
    // checkSpotifyLogin = async(req, res) => {
    //     const checkLogin = await http.get('/checkloggedin');
    //     if(!checkLogin) return false;
    //     return true;
    // }

    // Currently playing
    getCurrentlyPlaying = async(req, res) => {
        const currentlyPlaying = await http.get('/currentlyplaying')
        if(!currentlyPlaying) return console.log("Error getting currently playing at DataService");
        return currentlyPlaying;
    }

    // Check if there is a song playing
    checkIfSongPlaying = async (req, res) => {
        const isPlaying = await http.get('/checkifsongisplaying')
        if(!isPlaying) return console.log("Error checking if song playing at DataService");
        return isPlaying;
    }
}

export default new DataService()
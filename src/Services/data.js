import http from './httpCommon';

class DataService {
    // Login to Spotify
    spotifyLogin = async() => {
        const getLogin = await http.get('/login');
        if(!getLogin) return console.error("Error getting spotify login at DataService");
    }

    // Get user data / Check login
    getUserData = async() => {
        const userData = await http.get('/userdata');
        if (!userData) return console.error("Error getting user data at DataService");
        console.log(userData);
    }

    // Currently playing + data and color scheme
    getCurrentlyPlaying = async() => {
        const currentlyPlaying = await http.get('/currentlyplaying');
        if(!currentlyPlaying) return console.error("Error getting currently playing at DataService");
        return currentlyPlaying;
    }

    // Check if there is a song playing
    checkIfSongPlaying = async() => {
        const isPlaying = await http.get('/checkifsongisplaying');
        if(!isPlaying) return console.error("Error checking if song playing at DataService");
        return isPlaying;
    }

    // Skip to next song
    skipToNextTrack = async() => {
        const nextTrackReq = await http.get('/skiptonext');
        if(!nextTrackReq) return console.error("Error skipping to next at DataService");
        if(nextTrackReq.status === 403) return 'Unauthorized';
        //return nextTrackReq;
    }

    // Skip to previous song
    skipToPreviousTrack = async() => {
        const prevTrackReq = await http.get('/skiptoprevious');
        if(!prevTrackReq) return console.error("Error skipping to previous at DataService");
        if(prevTrackReq.status === 403) return 'Unauthorized';
        //return prevTrackReq;
    }

    // Play/resume song
    resumeTrack = async() => {
        const trackReq = await http.get('/resumeplayback');
        if(!trackReq) return console.error("Error pausing/resuming at DataService");
        if(trackReq.status === 403) return 'Unauthorized';
        //return trackReq;
    }

    // Pause song
    pauseTrack = async() => {
        const trackReq = await http.get('/pauseplayback');
        if(!trackReq) return console.error("Error pausing at DataService");
        if(trackReq.status === 403) return 'Unauthorized';
        //return trackReq;
    }

    // Seek to position
    seekToPosition = async(position) => {
        const seekReq = await http.get(`seektoposition/${position}`)
        if(!seekReq) return console.error("Error seeking at DataService");
        if(seekReq.status === 403) return 'Unauthorized';
    }
}

export default new DataService()
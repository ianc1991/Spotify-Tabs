import './mediaPlayerCard.css';
// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
// React
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Service
import data from '../../Services/data';
//Components
import TabsView from '../TabsView/TabsView.js';

export default function MediaControlCard() {
  const navigate = useNavigate();

  const [songDetails, setSongDetails] = useState({ name: "Play a song on Spotify to begin", artist: ":)", albumCover: "https://cdn.usbrandcolors.com/images/logos/spotify-logo.svg", imgColorPrimary: "#1DB954", imgColorSecondary: "#191414"});
  const [isPlaying, setIsPlaying] = useState(false);

  
  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('');

  const getSongDetails = async() => {
      try{
        let checkPlaying = await data.checkIfSongPlaying();
        if(!checkPlaying.data.is_playing) return console.log('Nothing playing!');
        setIsPlaying(checkPlaying.data.is_playing);

        let retrievedDetails = await data.getCurrentlyPlaying();
        setSongDetails({
          name: retrievedDetails.data.currentSong.body.item.name,
          artist: retrievedDetails.data.currentSong.body.item.artists[0].name,
          albumCover: retrievedDetails.data.currentSong.body.item.album.images[1].url,
          imgColorPrimary: rgbToHex(retrievedDetails.data.imgFinalBoss[0][0], retrievedDetails.data.imgFinalBoss[0][1], retrievedDetails.data.imgFinalBoss[0][2]),
          imgColorSecondary: rgbToHex(retrievedDetails.data.imgFinalBoss[1][0], retrievedDetails.data.imgFinalBoss[1][1], retrievedDetails.data.imgFinalBoss[1][2])
        });
        //console.log(retrievedDetails.data.item);
        //background = rgbToHex(songDetails.imgColor);
      } catch(e) {
          console.error(e);
      }
  }

  const checkIfPlaying = async() => {
    try {
      let checkPlaying = await data.checkIfSongPlaying();
      if(!checkPlaying.data.is_playing) return console.log('Nothing playing!');
      setIsPlaying(checkPlaying.data.is_playing);
    } catch(e) {
        console.error("error at checkIfPlaying in MediaPlayerCard: " + e);
      }
  }

  useEffect(() => {
    getSongDetails();
  }, []);

  let background = songDetails.imgColorPrimary;
  let backgroundSecondary = songDetails.imgColorSecondary;
  return (
      <div>
        <Card sx={{ height: 140, 
                    display: 'flex', 
                    textAlign: 'center', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    position: 'sticky', 
                    top: 0, 
                    background: 'linear-gradient(to right bottom,' + background + ', ' + backgroundSecondary + ')',
                    backdropFilter: 'blur(5px)'
                    }}>
            <CardMedia
              component="img"
              sx={{ maxHeight: 140, width: 'auto'}}
              image={songDetails.albumCover}
              alt="Album cover"
              onClick={() => getSongDetails()}
            />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', paddingBottom: 0 }}>
              <img className='spotifyLogo' src={require('../../assets/Spotify_Icon_RGB_Green.png')} alt='Spotify Logo' />
              <Typography component="div" variant="h5">
                {songDetails.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {songDetails.artist}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                <SkipPreviousIcon />
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38}} />
              </IconButton>
              <IconButton aria-label="next">
                <SkipNextIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>
        <>
          {
            songDetails.artist && (
              <TabsView
                artist = {songDetails.artist}
                song = {songDetails.name}
              />
            )
          }
        </>
      </div>
  );
}
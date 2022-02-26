import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../Services/data';

export default function MediaControlCard() {
  const theme = useTheme();

  const navigate = useNavigate();

  const [songDetails, setSongDetails] = useState({ name: "", artist: "", albumCover: "" });
  const [isPlaying, setIsPlaying] = useState(false)

  if(!songDetails) {
    checkIfPlaying().then(() => {
      if(!isPlaying) return <div>Nothing playing!</div>;
        //navigate('http://localhost:4000/login');
        getSongDetails();
    })
  }

  const getSongDetails = async() => {
      try{
          let retrievedDetails = await data.getCurrentlyPlaying();
          setSongDetails({
            name: retrievedDetails.data.item.name,
            artist: retrievedDetails.data.item.artists[0].name,
            albumCover: retrievedDetails.data.item.album.images[1].url
          });
          //console.log(retrievedDetails.data.item);
      } catch(e) {
          console.error(e);
      }
  }

  const checkIfPlaying = async() => {
    try {
      let checkPlaying = await data.checkIfSongPlaying();
      setIsPlaying(checkPlaying.data.is_playing);
    } catch(e) {
        console.error("error at checkIfPlaying in MediaPlayerCard: " + e);
      }
    
  }

  useEffect(() => {
    checkIfPlaying();
  }, []);

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <button onClick={() => getSongDetails()}>Refresh</button>
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
      <CardMedia
        component="img"
        sx={{ width: 200}}
        image={songDetails.albumCover}
        alt="Album cover"
      />
    </Card>
  );
}
import './tabList.css';
import { useState } from 'react';
// MUI Icons
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/NativeSelect';


const TabList = (props) => {

  const [tabType, setTabType] = useState();

  const handleSetTabType = (e) => {
    setTabType(e.target.value)
  }

  const StarRatingStyle = <StarIcon sx={{ color: 'red', fontSize: 'medium' }}/>;
  const HalfStarRatingStyle = <StarHalfIcon sx={{ color: 'red', fontSize: 'medium' }} />;
  const StarBorderIconStyle = <StarBorderIcon sx={{ color: 'red', fontSize: 'medium' }} />

  const starIconRating = (rank) => {
    let calcRank = rank;
    let starData = [];
    if (rank === 0) return '(No ratings)';
    for (let i = calcRank; i >= .5; i--) {
      if(i - 1 >= 0) {
        starData.push(StarRatingStyle);
      } else if(i - .5 === 0) {
        starData.push(HalfStarRatingStyle)
      }
    }
    while (starData.length <= 4) starData.push(StarBorderIconStyle);
    return starData;
  }

  return (
    <div>
      <div className='tabViewContainer'>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Tab Type
          </InputLabel>
          <Select
            value={tabType}
            onChange={handleSetTabType}
          >
            <option value={10}>Chords</option>
            <option value={20}>Tab</option>
            <option value={30}>Bass</option>
          </Select>
        </FormControl>
      </Box>
            <ul className='tabListUlContainer'>
                <div className='tabListTitle'>
                    <h2>Title</h2>
                    <h2>Type</h2>
                </div>
                { props.ugScrapedData ?
                    props.ugScrapedData.map((data)=> 
                        <div>
                            <li className='tabListLiContainer' key={data.link} >
                                <Button sx={{ display: 'flex', justifyContent: 'space-between', minWidth: '200px'}} variant="outlined" size="small" onClick={() => props.sendLink(data.link)}>
                                  {data.name}
                                  <span className='starSpan'>{starIconRating(data.rank)}</span>
                                </Button> 
                                <p>{data.type}</p>
                            </li>
                        </div>
                    )
                    :
                    "Nothing found"
                }
            </ul>
        </div>
    </div>
  )
}

export default TabList
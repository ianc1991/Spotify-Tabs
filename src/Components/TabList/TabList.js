import './tabList.css';
import { useState } from 'react';
// MUI Icons
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// MUI
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/NativeSelect';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const color = "red";
const useStyles = makeStyles(() => ({
  select: {
    "&:before": {
      borderColor: color
    },
    "&:after": {
      borderColor: color
    }
  },
  icon: {
    fill: color,
  },
  input: {
    backgroundColor: 'black'
  }
}));


const TabList = (props) => {
  const classes = useStyles();

  const [tabType, setTabType] = useState("chords");
  const [isChecked, setIsChecked] = useState(false);

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
    <div className='tabListOuterContainer'>
      <input id='listCheckbox' type='checkbox' defaultChecked={false} onChange={() => setIsChecked(!isChecked)} />
      <div className='menuToggleContainer'>
        <label htmlFor="listCheckbox">
          <span className="menuIcon">
            <MenuIcon style={{ color: '#1976d2', fontSize: '40px' }}/>
          </span>
          <span className="closeIcon">
            <CloseIcon style={{ color: '#1976d2', fontSize: '40px' }}/>
          </span>
        </label>
      </div>
      <div className='tabListContainer'>
        <div className='boxSelectorContainer'>
          <Box sx={{ minWidth: '120px' }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color: 'white'}}>
                Tab Type
              </InputLabel>
              <Select
                value={tabType}
                onChange={handleSetTabType}
                className={classes.select}
                inputProps={{
                  classes: {
                      icon: classes.icon
                  },
                }}
                sx={{ color: 'white', minWidth: '120px' }}
              >
                <option value={"chords"} style={{ backgroundColor: 'black' }}>Chords</option>
                <option value={"tab"} style={{ backgroundColor: 'black' }}>Tab</option>
                <option value={"bass"} style={{ backgroundColor: 'black' }}>Bass</option>
              </Select>
            </FormControl>
          </Box>
        </div>
        <ul className='tabListUlContainer'>
            { props.ugScrapedData ?
                props.ugScrapedData.map((data)=> 
                  tabType === data.type &&
                    (
                        <li className='tabListLiContainer' key={data.link} >
                            <Button sx={{ display: 'flex', flexDirection: 'column', width: 150, padding: 0  }} variant="outlined" size="small" onClick={() => props.sendLink(data.link)}>
                              {data.name}
                              <span className='starSpan'>{starIconRating(data.rank)}</span>
                            </Button>
                        </li>
                    )
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
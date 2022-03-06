import { useEffect, useState } from 'react';
import tabData from '../../Services/tabData';
// Icons
import Icon from '@mdi/react'
import { mdiStarHalfFull, mdiStar } from '@mdi/js'; 
import { red } from '@mui/material/colors';

const TabsView = (props) => {

    const [ugScrapedData, setUgScrapedData] = useState([]);

    const getUgLinks = async() => {
        try {
            console.log(props.song)
            const scrapedData = await tabData.ugScrapedLinks(props.artist, props.song);
            setUgScrapedData(scrapedData);
        } catch(e) {
            console.log('Error at getUgLinks in TabsView: ' + e)
        }
    }

    useEffect(() => {
      getUgLinks();
    }, [props.song])

    const getStarRating = () => {
        
    }


  return (
    <div>
        <h1>WELCOME TO THE WORLD OF TOMORROW</h1>
        <div>
            <ul>
                {
                    // ugScrapedLinks.map((link)=> 
                    //     <li key={link}>
                    //         <Icon 
                    //             path={mdiStar}
                    //             size={.8}
                    //             color={red.A200}
                    //         />
                    //         {link}
                    //     </li>
                    // )
                }
            </ul>
        </div>
    </div>
  )
}

export default TabsView
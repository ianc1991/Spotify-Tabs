import './tabsView.css'
import { useEffect, useState } from 'react';
import tabData from '../../Services/tabData';
// MUI

// Components
import TabPage from '../TabPage/TabPage';
import TabList from '../TabList/TabList';

const TabsView = (props) => {

    const [ugScrapedData, setUgScrapedData] = useState([]);
    const [activeLink, setActiveLink] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const getUgData = async() => {
        try {
            setIsLoading(true);
            setUgScrapedData([]);
            const scrapedData = await tabData.ugScrapedLinks(props.artist, props.song);
            scrapedData.forEach(item => {
                let counter = 0;
                Object.values(item).forEach(value => {
                  if (value.includes('H3fQr')) return; // H3fQr is empty star FIND ME IF BROKEN
                  if (value.includes('RCXwf')) return counter = counter + .5; // RCXwf is .5 star FIND ME IF BROKEN
                  if (value.includes('kd3Q7')) return counter = counter + 1; // kd3Q7 is 1 star FIND ME IF BROKEN
                })
                item.rank = counter;
            });
            setUgScrapedData(scrapedData);
        } catch(e) {
            console.log('Error at getUgLinks in TabsView: ' + e)
        }
        setIsLoading(false);
    }

    const sendLink = (link, song) => {
        setActiveLink(link)
        props.sendDemoSongDetails(song)
    }

    useEffect(() => {
      getUgData();
    }, [props.song])

  return (
    <div className='tabViewContainer'>
        <div className='tabListContainerFromTabsView'>
            <TabList
                ugScrapedData={ugScrapedData}
                sendLink={sendLink}
                isLoading={isLoading}
            />
        </div>
        <TabPage  className='tabPageContainer'
            link={activeLink}
        />
    </div>
  )
}

export default TabsView
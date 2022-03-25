import './tabsView.css'
import { useEffect, useState } from 'react';
import tabData from '../../Services/tabData';
// MUI

// Components
import TabPage from '../TabPage/TabPage';
import TabList from '../TabList/TabList';
import { Loading } from '../Loading/Loading';

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
                   if (value.includes('A5Qyw')) return;
                   if (value.includes('_3f1mJ')) return counter = counter + .5;
                   if (value.includes('_1foT2')) return counter = counter + 1;
                })
                item.rank = counter;
            });
            setUgScrapedData(scrapedData);
        } catch(e) {
            console.log('Error at getUgLinks in TabsView: ' + e)
        }
        setIsLoading(false);
    }

    const sendLink = (link) => {
        setActiveLink(link)
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
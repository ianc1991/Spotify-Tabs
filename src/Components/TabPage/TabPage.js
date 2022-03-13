import './tabPage.css';
import { useState, useEffect } from 'react';
import tabData from '../../Services/tabData';

const TabPage = (props) => {
    const [tabText, setTabText] = useState("");    

    const getUgTab = async() => {
        try {
            const tab = await tabData.ugGetTab(props.link);
            setTabText(tab);
        } catch(e) {
            console.log('Error at getUgTab in TabPage: ' + e)
        }
    }
    
    useEffect(() => {
      getUgTab();
    }, [props.link])
  return (
    <div className='tabOuterContainer'>
      <div className='tabInnerContainer'>
        <div dangerouslySetInnerHTML={{__html: tabText}} ></div>
      </div>
    </div>
    
  )
}

export default TabPage
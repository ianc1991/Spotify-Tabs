import './tabPage.css';
import { useState, useEffect } from 'react';
import tabData from '../../Services/tabData';
//Componenets
import { Loading } from '../Loading/Loading';

const TabPage = (props) => {
    const [tabText, setTabText] = useState("");
    const [isLoading, setIsLoading] = useState(false);   

    const getUgTab = async() => {
      setIsLoading(true);
        try {
            const tab = await tabData.ugGetTab(props.link);
            setTabText(tab);
        } catch(e) {
            console.log('Error at getUgTab in TabPage: ' + e)
        }
        setIsLoading(false);
    }
    
    useEffect(() => {
      getUgTab();
    }, [props.link])

  if (isLoading) return (
    <div className='tabOuterContainer'>
      <div className='tabInnerContainer'>
        <Loading />
      </div>
    </div>
  )

  return (
    <div className='tabOuterContainer'>
      <div className='tabInnerContainer'>
        <div dangerouslySetInnerHTML={{__html: tabText}} ></div>
      </div>
    </div>
    
  )
}

export default TabPage
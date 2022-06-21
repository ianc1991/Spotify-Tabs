import './tabPage.css';
import { useState, useEffect, useRef } from 'react';
import tabData from '../../Services/tabData';
//Componenets
import { Loading } from '../Loading/Loading';
import Login from '../../Components/Login/Login';
// Service
import data from '../../Services/data';

const TabPage = (props) => {
    const [tabText, setTabText] = useState("");
    const [isLoadingTab, setIsLoadingTab] = useState(false);
    const [loggedIn, setLoggedIn] = useState(undefined);
    
    const isInitialMount = useRef(true);

    const checkLogin = async() => {
      const userData = await data.getUserData();
      if (userData.data.status === 401) setLoggedIn(false);
      if (userData.data.statusCode === 200) setLoggedIn(true);
    }

    const getUgTab = async() => {
      try {
        setTabText("");
        setIsLoadingTab(true);
        const tab = await tabData.ugGetTab(props.link);
        setTabText(tab);
      } catch(e) {
          console.log('Error at getUgTab in TabPage: ' + e)
      }
      setIsLoadingTab(false);
    }
    
    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        getUgTab();
      }
    }, [props.link])

    useEffect(() => {
      checkLogin();
    })

    if (loggedIn === false && tabText === "" && isLoadingTab === false) return (
      <div>
        <Login />
      </div>
    )

  return (
    <div className='tabOuterContainer'>
      <div className='tabInnerContainer'>
        {isLoadingTab ? 
        (
          <Loading />
        )
        :
        (
          <div className='tabTextInnerHTML' dangerouslySetInnerHTML={{__html: tabText}} ></div>
        )
        }
      </div>
    </div>
    
  )
}

export default TabPage
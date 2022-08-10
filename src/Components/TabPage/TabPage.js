import './tabPage.css';
import { useState, useEffect, useRef } from 'react';
import tabData from '../../Services/tabData';
//Componenets
import { Loading } from '../Loading/Loading';
import Login from '../../Components/Login/Login';
//Context
import useAuthContext from '../../Context/useAuthContext';

const TabPage = (props) => {
    const [tabText, setTabText] = useState("");
    const [isLoadingTab, setIsLoadingTab] = useState(false);

    const { loggedIn } = useAuthContext();

    const isInitialMount = useRef(true);

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

    if (loggedIn === undefined) return (
        <div className='initialLoading'>
          <Loading />
        </div>
    )

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
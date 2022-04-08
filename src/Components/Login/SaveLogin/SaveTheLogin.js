import { useEffect } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { Loading } from '../../Loading/Loading'
// Service
import data from '../../../Services/data';

const SaveTheLogin = () => {
    const navigate = useNavigate();
    const search = useLocation().search;
    const accessToken = new URLSearchParams(search).get('access_token');
    const refreshToken = new URLSearchParams(search).get('refresh_token');



    useEffect(() => {
        saveLoginToLocalStorage();
    });

    const saveLoginToLocalStorage = async() => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        // REPLACE ME BEFORE DEPLOY
        //window.location.replace('http://localhost:3000/');
        window.location.replace('https://spotify-guitar-tabs.web.app/');
    }



  return (
    <>
        <Loading />
    </>
  )
}

export default SaveTheLogin
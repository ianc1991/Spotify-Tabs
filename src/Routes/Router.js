import { Route, Routes } from 'react-router-dom';
//Components
import Login from '../Components/Login/Login';
import MediaControlCard from '../Components/MediaPlayerCard/MediaPlayerCard';

const Router = () => {
  
    return (
        <div>
          <Routes>
              <Route path="" element={<Login />} />
              <Route path="home" element={<MediaControlCard />} />
          </Routes>
        </div>
    )
  }
  
  export default Router;
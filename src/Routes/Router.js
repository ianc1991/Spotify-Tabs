import { Route, Routes } from 'react-router-dom';
// Components
import MediaControlCard from '../Components/MediaPlayerCard/MediaPlayerCard';
import SaveTheLogin from '../Components/Login/SaveLogin/SaveTheLogin';

const Router = () => {
  
    return (
        <div>
          <Routes>
            <Route path="/savelogin/" element={<SaveTheLogin />} />
            <Route path="" element={<MediaControlCard />} />
          </Routes>
        </div>
    )
  }
  
  export default Router;
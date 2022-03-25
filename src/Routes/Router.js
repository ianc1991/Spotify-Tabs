import { Route, Routes } from 'react-router-dom';
// Components
import MediaControlCard from '../Components/MediaPlayerCard/MediaPlayerCard';

const Router = () => {
  
    return (
        <div>
          <Routes>
              <Route path="" element={<MediaControlCard />} />
          </Routes>
        </div>
    )
  }
  
  export default Router;
import './loading.css'
//MUI
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export const Loading = () => {
  return (
    <div>
      <MusicNoteIcon className='noteLeft'/> Loading... <MusicNoteIcon className='noteRight'/>
    </div>
  )
}

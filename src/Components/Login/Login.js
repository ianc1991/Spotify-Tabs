import './login.css'
// MUI
import Button from '@mui/material/Button';

const Login = () => {

  return (
    <div className='loginContainer'>
      <h1>Welcome to <span className="loginTitle">Tabify!</span></h1>
      <h3>View Ultimate Guitar tabs based on your currently playing song in Spotify</h3>
        <a href='http://localhost:4000/login' className='loginLink'>Click here</a>
        <p> to log into Spotify and begin. Make Jimi proud!</p>
        <br></br>
        <p>The above link will open Spotify's own login service. Your Spotify password is never seen by this app. Only details that are made visible through the Spotify API are used.</p>
    </div>
  )
    
}

export default Login
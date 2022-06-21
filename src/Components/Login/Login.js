import './login.css';

const Login = () => {
// REPLACE ME BEFORE DEPLOY
// http://localhost:4000/login
// https://spotify-tabs.herokuapp.com/
  return (
    <div className='loginContainer'>
      <h1>Welcome to <span className="loginTitle">Tabify!</span></h1>
      <h3>View Ultimate Guitar tabs based on your currently playing song in Spotify</h3>
        <a href='https://spotify-tabs.herokuapp.com/login' className='loginLink'>Click here</a>
        <p> to log into Spotify and begin. Make Jimi proud!</p>
        <br></br>
        <p>The above link will open Spotify's own login service. Your Spotify password is never seen by this app. Only details that are made visible through the Spotify API are used. Some default links are provided to demo the app if you do not wish to sign in through Spotify.</p>
        <p>SPOTIFY DOES NOT ALLOW QUOTA EXTENSIONS / PUBLIC ACCESS FOR HOBBY PROJECTS. PLEASE MESSAGE ME YOUR EMAIL ADDRESS IF YOU WOULD LIKE TO TRY THE APP, AND I WILL ADD YOU TO THE AUTHORIZED USERS LIST.</p>
    </div>
  )
}

export default Login
# Tabify
Hosted here: https://spotify-guitar-tabs.web.app/

![image](https://user-images.githubusercontent.com/62260491/165644002-8b5d6b09-ea50-44bc-a6de-fc57265275ff.png)


This is the front end of my (working title) Tabify app. The front end is hosted on Firebase, while the back end is deployed through Heroku. Load times may be somewhat slow due to using the free tier of Heroku.

SPOTIFY DOES NOT ALLOW QUOTA EXTENSIONS / PUBLIC ACCESS FOR HOBBY PROJECTS. PLEASE MESSAGE ME YOUR EMAIL ADDRESS IF YOU WOULD LIKE TO TRY THE APP.

## Back end
* NodeJS Express server
* Spotify API for handling authorization and playing soundtracks. Spotify controls can also be used for Premium users only.
* Puppeteer for web crawling Ultimate Guitar and supplying guitar tabs + ratings.
* Color Thief is used to determine dominant colors of current track's album artwork and is used on the front end media player card as a gradient.

## Front end
* React
* Material UI
* Axios for calling back end server API

Known issues:
* No alert for non-premium users attempting to use Spotify controls
* Several mobile issues to be addressed
* The first song that loads data will show 'Nothing here' for guitar tabs for a brief moment before showing the actual tabs

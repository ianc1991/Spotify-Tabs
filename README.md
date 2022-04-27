# Tabify

This is the front end of my (working title) Tabify app. The front end is hosted on Firebase, while the back end is deployed through Heroku. Load times may be some what slow due to using the free tier of Heroku.

## Back end
* NodeJS Express server
* Spotify API for handling authorization and playing soundtracks. Spotify controls can also be used for Premium users only.
* Puppeteer for web crawling Ultimate Guitar and supplying guitar tabs + ratings.
* Color Thief is used to determine dominant colors of current track's album artwork and is used on the front end media player card as a gradient.

## Front end
* React
* Material UI
* Axios for calling back end server API

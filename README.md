# Tabify

This is the front end of my (working title) Tabify app. The front end is hosted on Firebase, while the back end is deployed through Heroku. Load times may be somewhat slow due to using the free tier of Heroku.

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
* Users who log in to Spotify through Facebook may not be able to gain access
* No alert for non-premium users attempting to use Spotify controls
* Several mobile issues to be addressed
* The first song that loads data will show 'Nothing here' for guitar tabs for a brief moment before showing the actual tabs

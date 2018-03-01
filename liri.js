require("dotenv").config();

var request = require("request");
var keys = require(key.js);
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



// OMDB //
var movie = "mr+nobody";

request("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"

  if (!error && response.statusCode === 200) {

    console.log(body.title, body.year, body.imdbRating, body.ratings[0].value, body.country, body.language, body.plot, body.actors);
  }

// Spotify //
var track = "The+Sign";

request("	https://api.spotify.com/v1/tracks/" + track + "?market=ES"

  if (!error && response.statusCode === 200) {

    console.log('Title: ' + data.tracks.items[0].name);
    console.log('Artist: ' + data.tracks.items[0].artists[0].name);
    console.log('Album: ' + data.tracks.items[0].album.name);
    console.log('Preview link: ' + data.tracks.items[0].preview_url);
    // above code based on sample sent by Jon GT //

  }

// Twitter //


request("https://api.spotify.com/v1/tracks/" + track + "?market=ES"

  if (!error && response.statusCode === 200) {

    console.log(body.artist, body.name, body.previewLink, body.album, body.country, body.language, body.plot, body.actors);
    }

request("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"

    if (!error && response.statusCode === 200) {

      console.log(body.title, body.year, body.imdbRating, body.ratings[0].value, body.country, body.language, body.plot, body.actors);
    }

// partial instructions below //

//Make it so liri.js can take in one of the following commands:
//* `my-tweets`
//* `spotify-this-song`
//* `movie-this`
//* `do-what-it-says`

//node liri.js my-tweets
//This will show your last 20 tweets and when they were created at in your terminal/bash window.
//node liri.js spotify-this-song '<song name here>'
//This will show the following information about the song in your terminal/bash window

//You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

//Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to //generate a client id and client secret:

//node liri.js movie-this '<movie name here>'
//This will output the following information to your terminal/bash window:

// You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

//node liri.js do-what-it-says
//Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
//Feel free to change the text in that document to test out the feature for other commands.

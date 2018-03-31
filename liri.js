require("dotenv").config();

var request = require("request");
var keys = require(key.js);
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


if (process.argv[2] = "my-tweets") {
  // print request to user: "Which Twitter account?" //
  var tweets = // user input;
  function Twitter ();
};

if (process.argv[2] = "spotify-this-song") {
  // print request to user: "Which song?"" //
  var song = // user input;
  function Spotify ();
};

if (process.argv[2] = "movie-this") {
  // print request to user: "Which movie?"" //
  var movie = // user input;
  function OMDB ();
};

if (process.argv[2] = "do-what-it-says") {
  // print request to user: "What do it say?"" //
  var says = // user input;
  function DoWhatItSays ();
};

// Twitter //
function Twitter () {request("Twitterapi&limit=20" + tweets + "");

  if (!error && response.statusCode === 200) {

    console.log(data, data.date);

  }
}};

// Spotify //
function Spotify () {request("https://api.spotify.com/v1/tracks/" + track + "?market=ES");

  if (!error && response.statusCode === 200) {

    console.log('Title: ' + data.tracks.items[0].name);
    console.log('Artist: ' + data.tracks.items[0].artists[0].name);
    console.log('Album: ' + data.tracks.items[0].album.name);
    console.log('Preview link: ' + data.tracks.items[0].preview_url);
    // above code based on sample sent by Jon GT //
  }
}};

// OMDB //
function OMDB() {
var movie = "mr+nobody";
var movie = process.argv[2];
request("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy");

  if (!error && response.statusCode === 200) {

    console.log(body.title, body.year, body.imdbRating, body.ratings[0].value, body.country, body.language, body.plot, body.actors);
  }
};

// Do What It Says //
function DoWhatItSays () {
  request("");

  if (!error && response.statusCode === 200) {

    console.log();

  }
}};


// template below //
// DEPENDENCIES
// =====================================
// Read and set environment variables
require("dotenv").config();
// Import the Twitter NPM package.
var Twitter = require("twitter");
// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");
// Import the API keys
var keys = require("./keys");
// Import the request npm package.
var request = require("request");
// Import the FS package for read/write.
var fs = require("fs");
// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);
// FUNCTIONS
// =====================================
// Writes to the log.txt file
var getArtistNames = function(artist) {
  return artist.name;
};
// Function for running a Spotify search
var getMeSpotify = function(songName) {
  if (songName === undefined) {
    songName = "What's my age again";
  }
  spotify.search(
    {
      type: "track",
      query: songName
    },
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }
      var songs = data.tracks.items;
      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtistNames));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("-----------------------------------");
      }
    }
  );
};
// Function for running a Twitter Search
var getMyTweets = function() {
  var client = new Twitter(keys.twitter);
  var params = {
    screen_name: "cnn"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
  });
};
// Function for running a Movie Search
var getMeMovie = function(movieName) {
  if (movieName === undefined) {
    movieName = "Mr Nobody";
  }
  var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);
      console.log("Title: " + jsonData.Title);
      console.log("Year: " + jsonData.Year);
      console.log("Rated: " + jsonData.Rated);
      console.log("IMDB Rating: " + jsonData.imdbRating);
      console.log("Country: " + jsonData.Country);
      console.log("Language: " + jsonData.Language);
      console.log("Plot: " + jsonData.Plot);
      console.log("Actors: " + jsonData.Actors);
      console.log("Rotton Tomatoes Rating: " + jsonData.Ratings[1].Value);
    }
  });
};
// Function for running a command based on text file
var doWhatItSays = function() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    console.log(data);
    var dataArr = data.split(",");
    if (dataArr.length === 2) {
      pick(dataArr[0], dataArr[1]);
    }
    else if (dataArr.length === 1) {
      pick(dataArr[0]);
    }
  });
};
// Function for determining which command is executed
var pick = function(caseData, functionData) {
  switch (caseData) {
    case "my-tweets":
      getMyTweets();
      break;
    case "spotify-this-song":
      getMeSpotify(functionData);
      break;
    case "movie-this":
      getMeMovie(functionData);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
    default:
      console.log("LIRI doesn't know that");
  }
};
// Function which takes in command line arguments and executes correct function accordigly
var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};
// MAIN PROCESS
// =====================================
runThis(process.argv[2], process.argv[3]);


// remmaining, ie unreviewed, notes blow //

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

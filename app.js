  var Twitter = require('twitter');
  var config = require('./config.js');
  var fs = require('fs');

  var obj = JSON.parse(fs.readFileSync('Lyrics_AngelOlsen.json', 'utf8'));

  var T = new Twitter(config);
  
  var bool = true;

  while(bool){
  var str = obj.songs[Math.floor(Math.random()*obj.songs.length)].lyrics;
  //This gets a random song from

  var array = str.split("\n\n");
  var status = array[Math.floor(Math.random()*array.length)];

  if(status.length < 280){
    bool = false;
  }
}

  
T.post('statuses/update', {status: status},  function(error, tweet, response) {
  if(error) {
    console.log(error);
    throw error;}
  })




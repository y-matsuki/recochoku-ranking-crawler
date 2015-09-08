var client = require('cheerio-httpcli');
var _ = require('underscore');

var BASE_URL = 'http://recochoku.jp';
var type = _.sample(['single', 'album', 'video']);
var term = _.sample(['daily', 'monthly', 'weekly']);

client.fetch('http://recochoku.jp/ranking/' + type + '/' + term + '/', function(err, $, res) {
  console.log('\n\nRanking: ' + type + ' - ' + term + '\n');
  $('#unit td.info').each(function(idx) {
    // console.log($(this).html());
    var song = $(this).find('a')[1];
    var artist = $(this).find('a')[2];
    var tieup = $(this).find('p')[1];
    item = {
      kind: type + '#' + term,
      rank: idx + 1,
      song_title: $(song).text(),
      song_url: BASE_URL + $(song).attr('href'),
      artist_name: $(artist).text(),
      artist_url: BASE_URL + $(artist).attr('href'),
      comment: $(tieup).text()
    }
    console.log(item.rank + ': ' + item.song_title + ' (' + item.artist_name + ')');
  });
});

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GifSearch from './js/gif-search.js';
import Gifrandom from './js/random.js';
import TrendingGifs from './js/trending-gif';



$('#search-button').click(function(e) {
  e.preventDefault();
  let keyword = $('#gif-search').val().trim();
  $('#gif-search').text("");
  let promise = GifSearch.getGif(keyword);
  promise.then(function(response) {
    const body = JSON.parse(response);
    let images = body.data;
    let container = "";
    images.forEach(function (image) {
      let src = image.images.fixed_width.url;
      container += "<img src='" + src + "'>";
    });
    $('.search-gif-display').html(container);  
    }, function(error) {
      $('.showErrors').text(`There was an error processing your ;request: ${error}`);
    }
  );
});

$('#trendy-button').click(function(e) {
  e.preventDefault();
  let promise = TrendingGifs.getTrendyGifs();
  promise.then(function(response) {
    const body = JSON.parse(response);
    let gifs = body.data;
    let container = "";
    gifs.forEach(function (gif) {
    let src = gif.images.fixed_width.url;
    container += "<img src='" + src + "'>";
  });
  $('.trendy-gif-display').html(container);
  });
});

$('#random-button').click(function(e) {
  e.preventDefault();
  let promise = Gifrandom.ranGif();
  promise.then(function(response){
    const body =JSON.parse(response);
    let gifs = body.data.images.fixed_width.url;
    let container = "<img src=" + gifs + "></img>";
    $('.random-gif-display').html(container);
  },function(error){
    $('.showErrors').text(`There was an error processing your ;request: ${error}`); 
  }
  );
});

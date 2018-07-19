import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

$( document ).ready(function() {
  var slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
  });
});
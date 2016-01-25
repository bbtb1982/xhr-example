import lodash from 'lodash';
import $ from 'jQuery';

/*******************************************************************************
* ajax_request
* @Param {String}
* @Param {Function}
*******************************************************************************/
function ajax_request(url, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function()
  {
    if (request.readyState == 4 && request.status == 200){
      callback(request.responseText); // Another callback here
    }
  };
  request.open('GET', url);
  request.send();
}

/*******************************************************************************
* ajax_callback
* @Param {String}
* @Param {Function}
*******************************************************************************/
function ajax_callback(responseText){
  var text = (responseText || 'no text');
  $('body').append('yourmama');
}

/*******************************************************************************
* Create BTN
*******************************************************************************/
$('body').append('<div id="btn">XHR BTN</div>');

var btn = document.getElementById('btn');
var btnClicked = function(event){
  var xhr = new XMLHttpRequest();
  var baseURL = 'http://localhost:8080/webpack-dev-server';
  var url = `${baseURL}/json/tweets.json`;
  ajax_request(url, ajax_callback);
};

btn.addEventListener('click', btnClicked);

import lodash from 'lodash';
import {ajax_request} from './request';
import { createTextElement } from './createTextElement';

// var btn = document.getElementById('btn');
var btnEl = createTextElement('btn', 'btn');
var body = document.getElementsByTagName('body')[0];

body.appendChild(btnEl);

var btn = document.getElementById('btn');

var btnClicked = function(event){
  var xhr = new XMLHttpRequest();
  var baseURL = 'http://localhost:8080/webpack-dev-server';
  var url = 'http://localhost:8080/webpack-dev-server/json/tweets.json';

  xhr.open("GET", url);

  xhr.setRequestHeader('Access-Control-Allow-Origin', 'true');

  xhr.send();

  xhr.onload = function(e){
    var el = createTextElement(undefined, this.responseText);
    body.appendChild(el);
  };

  xhr.onError = function(){
    console.log('onError');
  };

};

btn.addEventListener('click', btnClicked);
;
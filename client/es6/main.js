import lodash from 'lodash';
import {xhr} from './request.js';
import { addElement } from './addElement.js';

var btn = document.getElementById('btn');

var btnClicked = function(event){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", 'http://localhost:3000');

  xhr.setRequestHeader('Access-Control-Allow-Origin', 'true');

  xhr.send();

  xhr.onload = function(e){
    addElement(undefined, this.responseText);
  };

  xhr.onError = function(){
    console.log('onError');
  };

};

btn.addEventListener('click', btnClicked);

import _ from 'lodash';
function createTextElement(id,text) {

  var text = text || 'empty text';
  var id = id || `response_${_.random(1, 100)}`;
  var el = document.createElement('div');
  var content = document.createTextNode(text+'');

  el.id = id+'';
  el.appendChild(content);
  return el;

}

export {createTextElement};

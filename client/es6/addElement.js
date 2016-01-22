import _ from 'lodash';
function addElement(id,text) {

  var text = text || 'empty text';
  var id = id || `response_${_.random(1, 100)}`;
  var el = document.createElement('div');
  var content = document.createTextNode(text+'');

  el.id = id+'';
  el.appendChild(content);
  document.body.appendChild(el);

}

export {addElement};

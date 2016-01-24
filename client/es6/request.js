import _ from 'lodash';

function ajax_request(file_name) {
  var t = _.random(1, 5) * 1000;
  console.log(t);
  setTimeout(function(){
    response_body(file_name);
  },t);
}

function response_body(file_name){
  console.log('sent: ',file_name);
  return `${file_name}`;
}

export { ajax_request};


import _ from 'lodash';
import $ from 'jQuery';

/*******************************************************************************
* Ajax Reqeust
*******************************************************************************/



/*******************************************************************************
* Create BTN
*******************************************************************************/

/*
* @Methoc createTextElement
* @param id
* @param text
*/
$('body').append('<div id="btn">CALLBACK BTN</div>')

/*******************************************************************************
* onClick Ajax using CallBack
*******************************************************************************/

$('#btn').click(function(e){
  console.log('clicked');
  // var request1 = ajax_request('file1');
  // var request2 = ajax_request('file2');
  // var request3 = ajax_request('file3');
  console.log(request1);
  console.log(request2);
  console.log(request3);
});

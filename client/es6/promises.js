import _ from 'lodash';
import $ from 'jQuery';

/*******************************************************************************
* @method gen_file_array
* @param count {Number}  number of items to return in array.
*******************************************************************************/
function gen_file_array(count){
  return _.times(count, function(index){
    return `file${index+1}`;
  });
}
/*******************************************************************************
* @method ajax_request
* @param file_name 'String'
*******************************************************************************/

function ajax_request(file_name){
  return new Promise(function(resolve, reject){
    var t = _.random(1, 3) * 1000;
    setTimeout(function(){ resolve(file_name); },t);
  });
}

/*******************************************************************************
* Create BTN
*******************************************************************************/
$('body').append('<div id="btn-promise" class="btn">Promises</div>')
$('body').append('<div id="btn-promise-manual" class="btn">Promise Manual</div>')
$('body').append('<div id="btn-promise-all" class="btn">Promises.all</div>')
$('body').append('<div id="btn-promise-reduce" class="btn">Promise reduced</div>')

$('.btn').css({
  'font-size':'100px',
  'padding': '15px',
  'margin': '20px',
  'border': '1px solid black',
  'font-family': 'helvetica'
});

/*******************************************************************************
* promises
*******************************************************************************/
$('#btn-promise').click(function(e){
  console.log('BTN-PROMISE');
  var p1 = ajax_request('file1');
  var p2 = ajax_request('file2');
  var p3 = ajax_request('file3');

  p1.then(function(value){
    console.log('promise_1: ',value);
  });

  p2.then(function(value){
    console.log('promise_2: ',value);
  });

  p3.then(function(value){
    console.log('promise_3: ',value);
  });

});

/*******************************************************************************
* promises manual chaning.
*******************************************************************************/

$('#btn-promise-manual').click(function(e){
  console.log('BTN-PROMISE-MANUAL');
  var p1 = ajax_request('file1');
  var p2 = ajax_request('file2');
  var p3 = ajax_request('file3');

  p1.then(function(value){
    console.log('promise_1: ',value);
    return p2;
  }).then(function(value){
    console.log('promise_2: ',value);
    return p3;
  }).then(function(value){
    console.log('promise_3: ',value);
    return 'done';
  }).then(function(value){
    console.log(value);
  });
});


/*******************************************************************************
* promises All
*******************************************************************************/


$('#btn-promise-all').click(function(e){
  var pArray = gen_file_array(_.random(3,10)).map(function(file){
    return ajax_request(file);
  });

  console.log(`BTN-PROMISE-ALL: ${pArray.length}` );

  var pAll = Promise.all(pArray).then(function(values){
    values.forEach(function(value){
      console.log(value);
    })
    return 'done';
  }).then(function(value){
    console.log(value)
  });
});


/*******************************************************************************
* promises reduce
*******************************************************************************/

$('#btn-promise-reduce').click(function(e){
  var fileArray = gen_file_array(_.random(3,10));
  console.log(`BTN-PROMISE-REDUCE: ${fileArray.length}` );

  fileArray.map(function(file){
    return ajax_request(file);
  })

  // need to add an initialize function to handel the first call and offset the
  // the resutls as needed

  .reduce( function(prev, cur, curIdx, array){
    return prev.then(function(value){
      // catch last member of array
      if(curIdx === (array.length-1) ){
        prev.then(function(value){
          console.log(value);
          return cur;
        }).then(function(value){
          console.log(value);
          console.log('done');
        });
      }else{
        console.log(value);
        return cur;
      }
    });
  });
});

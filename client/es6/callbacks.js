import _ from 'lodash';
import $ from 'jQuery';


/*******************************************************************************
* loadImg
* @reutrn {iamge}
*******************************************************************************/
function loadImgCB(url, cb){
  let image = new Image();

  image.onload = function(){
    cb(null, image)
  }

  image.onerror = function(){
    let message = `Could not load image at ${url}`
    cb(new Error(message))
  }

  image.src = url
}

/*******************************************************************************
* addImage
* Create and Append Image Element to document.
*******************************************************************************/
let addImg = (src) => {
  let imgElement =
    document.createElement('img')
  imgElement.src = src
    document.body.appendChild(imgElement)
}

/*******************************************************************************
* loadImgError
* handle error
*******************************************************************************/
let loadImgError = (error) => {
  let msg = `super awesome err msg bitches!!  ${error}`

  console.log(msg);
}


/*******************************************************************************
* Callback
* - Inversion of control
*     too early
*     too late
*     timeout
*     too many times.
*     err then success
*******************************************************************************/
function callback(){
  console.log('callback')
  setTimeout(function(){
    console.log('step1')
    return setTimeout(function(){
      console.log('step2')
      return setTimeout(function(){
        console.log('step3')
        return setTimeout(function(){
          console.log('step4')
        }, 100)
      }, 200)
    }, 200)
  }, 200)
}


/*******************************************************************************
* Load Cats Example
* - Inversion of control
* error handling????
* has error and currently stops image loading!
*******************************************************************************/
function kittins(){

  loadImgCB('images/cat1.jpg', function(error, img1){
    (error?loadImgError(error):addImg(img1.src))

    loadImgCB('images/cat2.jpg', function(error, img2){
      (error?loadImgError(error):addImg(img2.src))

      loadImgCB('images/cat3,jpg', function(error, img3){
        (error?loadImgError(error):addImg(img3.src))

        loadImgCB('images/cat4,jpg', function(error, img4){
          (error?loadImgError(error):addImg(img4.src))
        })
      })
    })
  })
}


/*******************************************************************************
* Closure
* issues with scope possilbe solution is using hard bind
*******************************************************************************/
function closure(){

    var timeout;
    console.log('closure')
    function one(){
        console.log('step1');
        timeout=setTimeout(two, 100);
    }

    function two(){
        console.log('step2');
        timeout=setTimeout(three, 1000);
    }

    function three(){
        console.log('step3');
        timeout=setTimeout(four, 300);
    }

    function four(){
        timeout=console.log('step4');
    }

   return timeout=setTimeout(one, 300);

}

/*******************************************************************************
* BTNs
*******************************************************************************/
$('body').append('<div id="btn-callback">CALLBACK BTN</div>')
$('body').append('<div id="btn-closure">CLOSURE BTN</div>')
$('body').append('<div id="btn-kittins">KITTINS</div>')

$('#btn-callback').click(function(e){
  console.log('clicked Callback:')
  callback();
});

$('#btn-closure').click(function(e){
  console.log('clicked Closure')
  closure();
})

$('#btn-kittins').click(function(e){
  console.log('clicked kittins')
  kittins();
})
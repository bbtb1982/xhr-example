import _ from 'lodash';
import $ from 'jQuery';
import "babel-polyfill";

/*******************************************************************************
* loadImg
* @reutrn {iamge}
*******************************************************************************/
function loadImgCB(url, cb){
  debugger;
  let image = new Image()

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

/******************************************************************************
* loadImgError
* handle error
******************************************************************************/
let loadImgError = (error) => {
  let msg = `super awesome err msg bitches!!  ${error}`

  console.log(msg);
}


/*******************************************************************************
request
@param url
*******************************************************************************/
function request(url) {
  loadImgCB( url, function(response){
    it.next( response );
  });
}

/*******************************************************************************
main
setimeout using yield
*******************************************************************************/
function *main() {
    var cat1 = yield request( "images/cat1.jpg" );
    addImg(cat1);

    var cat2 = yield request( "images/cat2.jpg" );
    addImg(cat2);
}

var it = main();
it.next(); // get it all started

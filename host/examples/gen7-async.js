/*******************************************************************************
* loadImg
* @reutrn {iamge}
*******************************************************************************/
function loadImgCB(url, cb){
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

/*******************************************************************************
* loadImgError
* handle error
*******************************************************************************/
let loadImgError = (error) => {
  let msg = `super awesome err msg bitches!!  ${error}`

  console.log(msg);
}


/*******************************************************************************
request
@param url
*******************************************************************************/
function request(url) {
    // this is where we're hiding the asynchronicity,
    // away from the main code of our generator
    // `it.next(..)` is the generator's iterator-resume
    // call
    loadImgCB( url, function(response){
      setTimeout(function(){
        it.next( response );
      }, 5000);
    });
    // Note: nothing returned here!
}

/*******************************************************************************
main
setimeout using yield
*******************************************************************************/
function *main() {
    var cat1 = yield request( "images/cat1.jpg" );
    var cat2 = yield request( "http://some.url.2?id=" + data.id );

    var resp = JSON.parse( result2 );
    console.log( "The value you asked for: " + resp.value );
}

var it = main();
it.next(); // get it all started

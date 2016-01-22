function getJson() {
  jQuery.get('https://api.github.com', function(data){
    console.log('data: ', data );
  })
  console.log('getJSON module');
}


export { getJson };
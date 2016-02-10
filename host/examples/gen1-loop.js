/*******************************************************************************
* Generator Basic
* Run Script: ../node_modules/.bin/babel ./generators1.js | node
* show loop is blocking!!
*******************************************************************************/
setTimeout(function(){
    console.log("Hello World");
},1);

function foo() {
    // NOTE: don't ever do crazy long-running loops like this
    for (var i=0; i<=1E10; i++) {
        console.log(i);
    }
}

foo();
// 0..1E10
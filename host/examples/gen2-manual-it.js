/*******************************************************************************
* Generator Basic
* Run Script: ../node_modules/.bin/babel ./generators1.js | node
* manually calling the generator iterator to advance the sequence
*******************************************************************************/
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

// the first call returns the iterator but does not execute any of the fuction statment.
var it = foo();
var message = it.next();

console.log(message); // { value:1, done:false }

console.log( it.next() ); // { value:2, done:false }
console.log( it.next() ); // { value:3, done:false }
console.log( it.next() ); // { value:4, done:false }
console.log( it.next() ); // { value:5, done:false }
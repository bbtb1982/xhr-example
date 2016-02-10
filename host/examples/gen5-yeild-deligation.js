/*******************************************************************************
* showing yield deligation
* will pass control of the iterator around if needed.
* discussion on how to maybe use this?
* events
  eg. htmlEvent Delgation. onload, onerror, ondrag, ondrop.
*******************************************************************************/
function *foo() {
    yield 3;
    yield 4;
}

function *bar() {
    yield 1;
    yield 2;
    yield *foo(); // `yield *` delegates iteration control to `foo()`
    yield 5;
}

for (var v of bar()) {
    console.log( v );
}
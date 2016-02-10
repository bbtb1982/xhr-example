/*******************************************************************************
* Generator for of awesomeSauce!!
* will call the next iteration of the iterator with for of loop
*******************************************************************************/
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

// can use var or let. no difference.
for (var v of foo()) {
    console.log( v );
}
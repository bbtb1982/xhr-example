# Async Codeing

## Callbacks
### What
a function passed as an argument to another function

### Why
provides a means to add a action to the call back queue.

[lupe] (http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

### Why not traditional callbacks?
* Inversion of control
* too early
* too late
* timeout
* too many times.
* err then success

---
## Promises
### why
* uninversion of control
	* the ability to decide how to handel errors and use case
* imutable
* avioding nested structures

### why not
* cannot use traditional try catch statments

### Further Reading
[you don't know js: async & performance](https://github.com/getify/You-Dont-Know-JS/tree/master/async%20%26%20performance)


---

## Iterators/Generators (another LnL)

### why
sync code flow

#### TimePicker
  * using generators to create time lists?
  * using gemerators to calc if the time slot is is already booked

### Further Reading
[iterator/generator](http://www.ociweb.com/resources/publications/sett/javascript-iterators-and-generators/)

[MDN - iterators] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

#### Libs
[co promises & generators](https://github.com/tj/co)


# Questions
how might we use generators and iterators to create Map Objects??


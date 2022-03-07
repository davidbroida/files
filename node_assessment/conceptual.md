### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Answer: Using the async and await keyword which makes javascript "await" futher execution of the program until the whatever you are awaiting has been fully loaded/ the promise has been resolved. You can also chain functions together using ".then"... more or less waiting a function to finish executing and THEN moving on to the next one.

- What is a Promise?
Answer: I remember promises being described by Colt in one of the videos as "like when you are given a number at the deli... its a kind of acknowledgement / guarantee that you are waiting for something and will receive something in the future that you want / have requested. In Javascrip they are responses from async functions that are either pending, resolved or rejected and are displayed in the form of objects.

- What are the differences between an async function and a regular function?
Answer: The main difference between an async function and a regular function is that an async function returns a promise. Normal functions dont necessarily return promises and execute sequentially, wheras when paired with AWAIT... async functions wait for promises to be resolved and don't just simply fire off and execute like regular functions do. 

- What is the difference between Node.js and Express.js?
Answer: Express.js is a framework built on top of Node.js similar to how flask is a framework built on top of python. Express adds features that allow you to do things like add middleware which you cannot do with node.js alone.

- What is the error-first callback pattern?
Answer: The error first callback pattern is the pattern we see when we look at how functions are written in node.js all the time. I believe the purpose is to make the code run as smoothly as possible.. with the first argument of the callback reserved for an error where the second argument of the callback is reserved for a succesful response. 

- What is middleware?
Answer: Middleware is code that runs in the middle of the request and response cycle. THeyre basically just functions that have acces to the request & response object and can also call the function next. A good example of this are the 404 and global error handles that dont run every single request but run in between requests coming in and responses going out depending on whether or not theres an error.

- What does the `next` function do?
Answer: The next function allows the code to move on to the next line of code and continue running at times when the code would usually stop. An examle of this is is going from a route to a global error handler. Sometimes, after a route is hit you don't want the code to finish running there and need it to proceed to the next error handler. A rule of thumb is that after catching an error you always want to pass the error to next.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
 Answer: The first thing that comes to mind when I look at how this code is written is that something could go wrong  and/or it could execute poorly compared to if it was run/ written in paralell rather than in sequrence. Sending them one after another could slow things down because each request must wait for the previous before starting. By writing them in parallel each request would be sent off first and afterwards you await each one of the variabless.. making things faster. Promise.all() also solves this problem.
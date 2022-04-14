### Conceptual Exercise
David Broida - April 13th, 2022

Answer the following questions below:

- What is the purpose of the React Router?Answer: The purpose of the React Router to create a more seamless user expereince by allowing you to build   web apps that dont cause a page refresh with when using the refresh button and back/forward buttons. One of the ways that preventing a page refresh creates a better user experience is because the flash of a white screen / blank page is prevented because the app isn't loading an entirely new page from the server but rather everything is being done client-side. Client vs. server-side routing.

- What is a single page application? Answer: A single-page applications is an app that that exclusively uses client-side routing. 

- What are some differences between client side and server side routing? Answer: Some of the main differences with client-side and server-side routing include cleint-side routing having potentially improved user experience and a more modern archtecture but potentially worse SEO. Server-side routing on the other hand is more traditional with potentially better SEO but potentially worse UI/UI due to page reloads with every URL change.

- What are two ways of handling redirects with React Router? When would you use each? Answer: The two ways to redirect in React Router are by using the Redirect component which is useful when people have gone to the wrong place and you want to redirect them to where they should be going. The second option is to call the .push method on the history object which is useful when the user has completed something and you want to direct them elsewhere. This is an important distinction becasue when you use the Redirect component a client-side redirect will occur and change/clean up the URL to the prop on the redirect.

- What are two different ways to handle page-not-found user experiences using React Router? Answer: One of the ways to handle a page-not-found user experience is by creating a Not Found route that DOES NOT include "path" inside and bottom of a Switch statment.  By not including the path the route will always match when no other matches above it have been found.

- How do you grab URL parameters from within a component using React Router? Answer: One of the best ways to grab URL parameters from within a component using React Router is by importing the useParams hook from react-router-dom and then indicating the URL parameter with a colon ie. exact path ="/animals/:dog.

- What is context in React? When would you use it? Answer: Context is universal data that is accessable across your application across all components. It can be useful for global themes, reducing repetition and prop drilling. 

- Describe some differences between class-based components and function components in React. Answer: The main difference between class components and function based components isthe fact that with class components you dont use hooks. Hooks are a new addition to React that makes code simpler and logical with less repetition. An example of this is the "This" , the constructor, the render method etc. and all of the "lifecycle methods" which have been replaced with cleaner easier to follow code that have replaced the class-based system.

- What are some of the problems that hooks were designed to solve? Answer: Some of the problems that hooks were designed to solve include a large number of lifecycle methods, repeating code and logic in the the lifecycle of components, lots of sharing logic among components, needing to use the keywords "this" and "bind" eveywhere, needing to define state as an instance property or in the constructor and more...
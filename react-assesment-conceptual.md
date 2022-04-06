David Broida April 1 2022
### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it? Answer: Reach is a popular front end framework that was developed by facebook. React is all about reusing code so you woud use it when you want to make a front end that has lots of reusable components.. or parts of the app that are the same and used in different places around the app. This can be particularly useful when building larger and more complicated applications. It also makes a lot of sense to use because of its popularity and large community.

- What is Babel? Answer: Babel is a tool for transpiling code which basically converts newer syntaxes into older ones. For example... JSX isn't legal javascript.. it has to be turned into javascript and you can do this with Babel.

- What is JSX? Answer: JSX is like HTML embedded in JavaScript. For example... having a function return an HTML 'div' like is done all the time in JSX is absolutey not valid javascript. By definition its "a React extension into the javascript language which provides a way to structure componenet rendering." I think of it as a "version" of javascript which is built off of heirarchal components.

- How is a Component created in React? Answer:  The simplest way to create a component in React is to write a javascript function that returns and a JSX react element. You can also create class components that return JSX react elements.

- What are some difference between state and props? Answer: State and props are entirely different. Props are used to pass data from one component down to another where state is used to save data similar to local storage and is never passed along between components like props are. 

- What does "downward data flow" refer to in React? Answer: As far as I am concerned it refers to the heirarchal flow of data from parent to children components. For example, in a card game app data might flow downward from a gameboard component to a deck of cards component down to an individual card component. 

- What is a controlled component? Answer: A controlled component is a component that is controlled by a parent component which passes new values as props to it.These components also notify changes through callbacks such as onChange etc.

- What is an uncontrolled component? Answer: An uncontrolled component is a component that stores its own state and you query the DOM using a ref to find it similar to traditional HTML.

- What is the purpose of the `key` prop when rendering a list of components? Answer: THe purpose of the 'key' prop is to create a relationship between the component and the DOM element which determines whether or not the component should be re-rendered.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? Answer: Using an array index is a poor choice for a 'key' prop because arrays can mutate, the indices can move around causing the key to change as well.

- Describe useEffect.  What use cases is it used for in React components? Answer: useEffect is a hook which tells React that your coponent needs to do something after it renders in the DOM. A common use case is when you are fetching data from an API... which we want to be done after the component has rendered. So fo fetch correctly, we run an effect that only happens once the API call has finished.

- What does useRef do?  Does a change to a ref value cause a rerender of a component? Answer: useRef is a hook that allows you ato access an HTML DOM element and keep track of variabe without causing a re-render of the component. For example you can  set ref = to an element and then call useRef access it.  

- When would you use a ref? When wouldn't you use one? Answer: A good example of when you'd use a ref is when you need to access and HTML element to make use of an API or integrate some other JavaScript library. On the contrary, you wouldn't want to use one when you want c change in the variable to cause a re-render.

- What is a custom hook in React? When would you want to write one? Answer: A custom hook is a function that you make yourself using other built-in hooks. An example of when you wouldt want to use one is when you have multiple components that require the same hook. You can create a cusom hook that is reusable across those different components... like for toggling state you can create a useToggleState custom hook that can be used to toggle different components from being on to off.

# State and the DOM
Look at the code in the `index.html` file. It's a simple app that allows the user to create a list of their favourite foods.

Consider you had to make a change to the application so that the user could not add the same food more than once. How would you do this? You would need to *query the DOM* to find out the current list of foods and extract the food names from the HTML elements. While this would work it's not ideal - if your DOM structure changed (let's say you wanted to display the foods in a table rather than a list for example), you'd need to update your code to work with the new DOM structure.

What if you wanted the user to only be able to add 5 foods max? Again you'd have to query the DOM to know how many food items already existed.

## Introducing State

We can improve this code by introducing **state** and treating our state as a single source of truth for our data. When anything changes we updated the state. When the state updates, we update the DOM.

## Exercise - Optional
Update the code to maintain the list of favourite foods in a state object as described in the lecture.
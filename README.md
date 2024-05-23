# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App
## Redux-Inspired Store
1. This project is a simple implementation of a Redux-inspired store in JavaScript. It includes a store.js file that encapsulates the logic for dispatching actions and subscribing to changes, as well as a script.js file that demonstrates how to use the store.
   
## How to Run the Code

1. To run the code, simply open the script.js file in a modern web browser that supports ES6 syntax. The code will execute in the browser's console, and you can observe the output there.
   
## Overview of Approach
1. To run the code, simply open the script.js file in a modern web browser that supports ES6 syntax. The code will execute in the browser's console, and you can observe the output there.
2. The store is initialized with a reducer function that handles state changes based on the actions dispatched to the store.
3. Store Object:
-Implemented as a closure.
-Encapsulates:
-Internal state.
-List of subscribers.
4. Methods:
dispatch(action): Updates state using a reducer function.
-Reducer takes current state and dispatched action as arguments.
-Reducer returns the new state.
subscribe(subscriber): Adds a subscriber to the list.
getState(): Returns the current state of the store
5. Reducer Function:
Pure function.
-Takes current state and action as arguments.
-Returns the new state based on the action type.
-Handles all possible actions and updates state accordingly

## Challenges Faced
1. Encapsulating store object and state.
2. Ensuring reducer function purity.

## Code Quality:
1. Adheres to best practices for readability and maintainability.
2. Well-commented with clear naming conventions.
3. Uses functional programming principles.

## Documentation:
1. Clear overview in README.md.
2. Well-commented code with explanations.

## User Stories:
1. Dispatch actions to update state.
2. Subscribe to changes and get notified on state change.
3. Get the current state from the store at any time.

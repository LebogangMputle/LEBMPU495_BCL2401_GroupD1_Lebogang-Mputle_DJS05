//Reducer functions (pure function)
const counterReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }
};

// Store implementation
const store = {
    _state: counterReducer(undefined, {}), // Initial state
    _subscribers: [],
  
    getState() {
      return this._state;
    },
  
    dispatch(action) {
      this._state = counterReducer(this._state, action);
      this._subscribers.forEach(subscriber => subscriber());
    },
  
    subscribe(subscriber) {
      this._subscribers.push(subscriber);
    },
  };

// Usage

// Initial state verification (Scenario 1)
console.log("Initial State:", store.getState()); // Output: { count: 0 }

// Dispatch actions to update state
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
// State definition
const initialState = {
    count: 0,
  };
  
  // Action creators (functions returning action objects)
  const add = () => ({ type: 'ADD' });
  const subtract = () => ({ type: 'SUBTRACT' });
  const reset = () => ({ type: 'RESET' });
  
  // Reducer function (pure function that updates state based on action)
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD':
        return { ...state, count: state.count + 1 };
      case 'SUBTRACT':
        return { ...state, count: Math.max(0, state.count - 1) }; // Prevent negative count
      case 'RESET':
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  
  // Store (simple object with getState and dispatch methods)
  const store = {
    getState: () => store.state,
    dispatch: (action) => {
      store.state = reducer(store.state, action);
      console.log('State updated:', store.getState());
    },
  };
  
  // Usage (simulating user interactions)
  store.dispatch(add()); // Scenario 2 (count: 1)
  store.dispatch(add()); // Scenario 2 (count: 2)
  store.dispatch(subtract()); // Scenario 3 (count: 1)
  store.dispatch(reset()); // Scenario 4 (count: 0)
  
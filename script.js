// Initial state,
/**
 * The initial state of the application.
 * @type {Object}
 * @property {number} count - The initial count value.
 */
const initialState = {
    count: 0
};

// Action types
/**
 * The action type for incrementing the count.
 * @type {string}
 */
const INCREMENT = 'INCREMENT';

/**
 * The action type for decrementing the count.
 * @type {string}
 */
const DECREMENT = 'DECREMENT';

/**
 * The action type for resetting the count.
 * @type {string}
 */
const RESET = 'RESET';

/**
 * The action type for adding a value to the count.
 * @type {string}
 */
const ADD = 'ADD';

/**
 * The action type for subtracting a value from the count.
 * @type {string}
 */
const SUBTRACT = 'SUBTRACT';

// Action creators
/**
 * Increments the count by 1.
 * @returns {Object} The action object.
 */
const increment = () => ({ type: INCREMENT });

/**
 * Decrements the count by 1.
 * @returns {Object} The action object.
 */
const decrement = () => ({ type: DECREMENT });

/**
 * Resets the count to 0.
 * @returns {Object} The action object.
 */
const reset = () => ({ type: RESET });

/**
 * Adds a value to the count.
 * @param {number} value - The value to add.
 * @returns {Object} The action object.
 */
const add = (value) => ({ type: ADD, payload: value });

/**
 * Subtracts a value from the count.
 * @param {number} value - The value to subtract.
 * @returns {Object} The action object.
 */
const subtract = (value) => ({ type: SUBTRACT, payload: value });

// Reducer
/**
 * The reducer function that handles state changes based on actions.
 * @param {Object} state - The current state.
 * @param {Object} action - The action object.
 * @returns {Object} The new state.
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1 };
        case DECREMENT:
            return {...state, count: state.count - 1 };
        case RESET:
            return {...state, count: 0 };
        case ADD:
            return {...state, count: state.count + action.payload };
        case SUBTRACT:
            return {...state, count: state.count - action.payload };
        default:
            return state;
    }
};

// Create store
/**
 * Creates a new store with the given reducer function.
 * @param {Function} reducer - The reducer function.
 * @returns {Object} The store object.
 */
const createStore = (reducer) => {
    let state;
    const listeners = [];

    /**
     * Returns the current state.
     * @returns {Object} The current state.
     */
    const getState = () => state;

    /**
     * Dispatches an action to the store.
     * @param {Object} action - The action object.
     */
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    /**
     * Subscribes a listener function to the store.
     * @param {Function} listener - The listener function.
     * @returns {Function} A function to unsubscribe the listener.
     */
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    };

    // Initialize the state
    dispatch({ type: '@@INIT' });

    return { getState, dispatch, subscribe };
};

// Initialize store
/**
 * The store object.
 * @type {Object}
 */
const store = createStore(reducer);

// Subscribe to store changes
/**
 * Subscribes a listener function to the store.
 * @param {Function} listener - The listener function.
 */
store.subscribe(() => {
    console.log('State:', store.getState());
});

// Log the initial state
/**
 * Logs the initial state to the console.
 */
console.log('Initial State:', store.getState());

// Dispatch ADD actions to set state to count: 2
/**
 * Dispatches ADD actions to the store to set the state to count: 2.
 */
store.dispatch(add(1)); // State: { count: 1 }
store.dispatch(add(1)); // State: { count: 2 }

// Dispatch SUBTRACT action
/**
 * Dispatches a SUBTRACT action to the store.
 */
store.dispatch(subtract(1)); // State: { count: 1 }

// Dispatch RESET action
/**
 * Dispatches a RESET action to the store.
 */
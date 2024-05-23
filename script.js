import {subscribe, update, Action } from './store.js'

const localUnsubscribe = (prev, next) =>  console.log(prev, next);
const unsubscribe = subscribe (prev, next);


/**
 * @type {Action}
 */
const customAction = (state) =>{
    return {
        ...state,
        wind: {
            ... state.wind,
            value: state.value + 19,
        },
    };
};

update(customAction);
update(customAction);
update(customAction);
update(customAction);
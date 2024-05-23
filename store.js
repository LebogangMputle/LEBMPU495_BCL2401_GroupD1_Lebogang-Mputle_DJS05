/**
 * @typedef {object} Item
 * @prop {number} value
 */

/**
 * @typedef {object} State
 * @prop {Itemtem} wind
 * @prop {Item} temperature
 * @prop {Item} humidity
 */

/**
 * @callback Notify
 * @param {State} next
 * @param {State} prev
 */

/**
 * @callback Action
 * @param {State}
 * @returns {State}
 */

export const Action = {};
export const Notify = {};
/**
 * @callback Update
 * @param {Action}
 */

/**
 * @callback Subscribe
 * @param {Notify} notify
 */

/**
 * @callback Emptyfn
 */

/**
 * @typedef {object} Store
 * @prop {Update} update
 * @prop {Subscribe} subscribe
 */

const initial = {
    wind: {
        value: 1,
    },
    temperature: {
        value: 1,
    },
    humidity: {
        value: 1,
    },
};

const states = [initial];

/**
 * 
 * @type {Array<Notify>} 
 */

let notifiers = []; //keeps references.

/**
 * 
 * @param {Action} action 
 */
export const update = (action) => {
        if (typeof action !== 'function') {
            throw new Error("action is required to be function")
        }
        //object.freeze means it cant be modified
        const prev = Object.freeze({...states[0]}); //... makes sure they cant be mutated.
        const next = Object.freeze({...action(prev)});

        const localUnsubscribe = (notify) => notify(next, prev)
        notifiers.forEach(localUnsubscribe);  //replaces a loop
        states.unshift(next)    //move it to the front
    };

/**
 * @param {Notify} notify
 * @returns {Emptyfn}
 */
export const subscribe = (Notify) => {
    notifiers.push(Notify);

    const unsubscribe = () => {
        const handler = (current) => current !== Notify;
        const results = notifiers.filter(handler);
        notifiers = results;
    }
    return unsubscribe;
};
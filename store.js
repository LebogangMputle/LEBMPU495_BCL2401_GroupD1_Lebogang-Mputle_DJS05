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
 * @param {state} prev
 */

/**
 * @callback Action
 * @param {State}
 * @returns {State}
 */

/**
 * @callback Update
 * @param {Action}
 */

/**
 * @callback Subscribe
 * @param {Notify}
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

let notifier = []; //keeps references.

export const update = (action) => {
        if (typeof action !== 'function') {
            throw new Error("action is required to be function")
        }
        //object.freeze means it cant be modified
        const prev = Object.freeze({...states[0]}); //... makes sure they cant be mutated.
        const next = Object.freeze({...action(prev)});

        const handler = (Notify) => notify(prev, next)
        notifiers.forEach(Notify);

        states.unshift(next)    //move it to the front
    };

/**
 * @param {Notify} handler
 * @returns  
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
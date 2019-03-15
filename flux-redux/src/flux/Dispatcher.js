export class Dispatcher {
    constructor() {
        this.__listener = [];
    }

    dispatch(action) {
        this.__listener.forEach(listener=> listener(action));
    }

    register(listener) {
        this.__listener.push(listener);
    }
};
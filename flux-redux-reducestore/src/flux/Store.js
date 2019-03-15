export class Store {
    constructor(dispatcher) {
        this.__listners = [];
        this.__state = this.getInitialState();
        dispatcher.register(this.__onDispatch.bind(this));
    }

    __onDispatch() {
        throw new Error("Sub class must overide__ondispatch method of a Flux Store");
    }

    getInitialState() {
        throw new Error("Subclasses must override getInitialState method of a Flux Store");
    }

    addListener(listener) {
        this.__listners.push(listener);
    }

    __emitChange() {
        this.__listners.forEach(listener=> listener(this.__state));
    }
}
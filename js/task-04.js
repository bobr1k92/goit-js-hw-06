const CounterPlugin = function({
    rootSelector, 
    initialValue = 0, 
    step = 1,
} = {}) {
    this._value = initialValue;
    this._step = step;
    this._resf = this._getRefs(rootSelector);

    this.bindEvents();
};

CounterPlugin.prototype._getRefs = function(rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');

    return refs;
};

CounterPlugin.prototype.bindEvents = function() {
    this._resf.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateValueUI();
    });

    this._resf.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateValueUI();
    });
};

CounterPlugin.prototype.updateValueUI = function() {
    this._resf.value.textContent = this._value;
};

CounterPlugin.prototype.increment = function() {
    this._value += this._step;
};

CounterPlugin.prototype.decrement = function() {
    this._value -= this._step;
};

const counter = new CounterPlugin({rootSelector: '#counter', step: 1});

// console.log(counter);


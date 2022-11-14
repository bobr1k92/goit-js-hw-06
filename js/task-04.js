const CounterValue = function({
    rootSelector, 
    initialValue = 0, 
    step = 1,
} = {}) {
    this._value = initialValue;
    this._step = step;
    this._resf = this._getRefs(rootSelector);

    this.bindEvents();
};

CounterValue.prototype._getRefs = function(rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');

    return refs;
};

CounterValue.prototype.bindEvents = function() {
    this._resf.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateValueUI();
    });

    this._resf.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateValueUI();
    });
};

CounterValue.prototype.updateValueUI = function() {
    this._resf.value.textContent = this._value;
};

CounterValue.prototype.increment = function() {
    this._value += this._step;
};

CounterValue.prototype.decrement = function() {
    this._value -= this._step;
};

const counter = new CounterValue({rootSelector: '#counter', step: 1});

console.log(counter);


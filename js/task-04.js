const counterValue = function({
    rootSelector, 
    initialValue = 0, 
    step = 1,
} = {}) {
    this._value = initialValue;
    this._step = step;
    this._resf = this._getRefs(rootSelector);

    this.bindEvents();
};

counterValue.prototype._getRefs = function(rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');

    return refs;
};

counterValue.prototype.bindEvents = function() {
    this._resf.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateValueUI();
    });

    this._resf.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateValueUI();
    });
};

counterValue.prototype.updateValueUI = function() {
    this._resf.value.textContent = this._value;
};

counterValue.prototype.increment = function() {
    this._value += this._step;
};

counterValue.prototype.decrement = function() {
    this._value -= this._step;
};

const counter = new counterValue({rootSelector: '#counter', step: 1});

console.log(counter);


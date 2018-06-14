/* publish subscribe  */
function Girl() {
    this._events = {}
}
Girl.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
};
Girl.prototype.emit = function (eventName, ...args) {
    // [].slice.call(arguments, 1);
    // Array.from(arguments).slice[1];
    if (this._events[eventName]) {
        this._events[eventName].forEach(cb => cb(...args));
    }
};
let girl = new Girl();
// create events
let cry = (who) => {
    console.log(who + ' cry');
}
let shopping = (who) => {
    console.log(who + ' shopping');
}
let eat = (who) => {
    console.log(who + ' eat');
}
// bind events
girl.on('fall out of love', cry);
girl.on('fall out of love', eat);
girl.on('fall out of love', shopping);
// publish events
girl.emit('fall out of love', 'me', 'you');
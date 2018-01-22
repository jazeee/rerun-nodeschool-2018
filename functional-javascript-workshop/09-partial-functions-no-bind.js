module.exports = (prepend) => (...args) => console.log.apply(null, [prepend, ...args]);

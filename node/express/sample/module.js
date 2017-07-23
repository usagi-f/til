exports.sayHello = (cb) => {
    console.log('Hello');
    cb();
};

exports.sayWorld = (cb) => {
    console.log('World');
    cb();
};

exports.sayEx = (cb) => {
    console.log('!');
    if (cb) cb();
};

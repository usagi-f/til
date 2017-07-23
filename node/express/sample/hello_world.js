const modules = require('./module');

modules.sayHello(() => {
    modules.sayWorld(() => {
        modules.sayEx();
    })
});

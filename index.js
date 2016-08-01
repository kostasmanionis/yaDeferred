'use strict';

module.exports = function () {

    var resolveRef;
    var rejectRef;

    var promise = new Promise(function (resolve, reject) {
        resolveRef = resolve;
        rejectRef = reject;
    });

    return {
        resolve: function () {
            resolveRef.apply(this, arguments);
            return promise;
        },
        reject: function () {
            rejectRef.apply(this, arguments);
            return promise;
        },
        then: promise.then.bind(promise),
        catch: promise.catch.bind(promise)
    };
};

'use strict';

const should = require('should');
const yaDeferred = require('./index');


describe('yaDeferred', () => {

    let deferred;

    beforeEach(() => {
        deferred = yaDeferred();
    });

    describe('constructor', () => {

        it('should return a promise', () => {
            deferred.should.be.Promise();
        });
    });

    describe('resolve', () => {

        it('should resolve the promise when called', () => {
            return deferred
                .resolve()
                .then(() => should(true).be.true());
        });

        it('should return a promise', () => {
            deferred.resolve().should.be.Promise();
        });
    });

    describe('reject', () => {

        it('should reject the promise when called', () => {
            return deferred
                .reject()
                .catch(() => should(true).be.true());
        });

        it('should return a promise', () => {
            deferred.reject().should.be.Promise();
        });
    });

    describe('then', () => {
        it('should return a promise', () => {
            deferred.then().should.be.Promise();
        });
    });

    describe('catch', () => {
        it('should return a promise', () => {
            deferred.catch().should.be.Promise();
        });
    });
});

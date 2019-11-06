import log4js from 'log4js';

log4js.configure({
    appenders: { authInfo: { type: 'file', filename: 'logs/authError.log' } },
    categories: { default: { appenders: ['authInfo'], level: 'error' } }
});

const authLogger=log4js.getLogger('authInfo');
console.log('iam auth logger',authLogger)

export default {
    authLogger
}
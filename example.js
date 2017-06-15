const moneymath = require('./');
const moment = require('moment');

const fakeLog = [
    { amount: 2, date: moment().subtract(2, 'days') },
    { amount: 5, date: moment().subtract(2, 'hours') },
    { amount: 3, date: moment().subtract(1, 'hours') },
    { amount: 2, date: moment().subtract(1, 'minute') },
    { amount: 2, date: moment().subtract(6, 'minute') },
    { amount: 2, date: moment().subtract(1, 'minute') },
    { amount: 2, date: moment().subtract(5, 'minute') },
    { amount: 5, date: moment().subtract(2, 'hours') },
    { amount: 7, date: moment().subtract(6, 'minute') }
];

console.log(moneymath.today.allowance.from.monthly.budget(fakeLog, 1000));

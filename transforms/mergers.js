const moment = require('moment');
const reduce = require('./reducers');

exports.name = 'merge';

exports.transforms = [{
    name: 'by',
    fn: (log, date, timeUnit) => timeMerge(log, date, timeUnit)
}, {
    name: 'by hour',
    fn: (log, date) => timeMerge(log, date, 'hour')
}, {
    name: 'by day',
    fn: (log, date) => timeMerge(log, date, 'day')
}, {
    name: 'by week',
    fn: (log, date) => timeMerge(log, date, 'week')
}, {
    name: 'by month',
    fn: (log, date) => timeMerge(log, date, 'month')
}, {
    name: 'by year',
    fn: (log, date) => timeMerge(log, date, 'year')
}];

const timeMerge = (log, timeUnit) => {
    const mergedLog = {};

    log.forEach(transaction => {
        const tUnit = moment(transaction.date).get(timeUnit);

        if (!mergedLog[tUnit]) {
            mergedLog[tUnit] = [];
        }

        mergedLog[tUnit].push(Object.assign({}, transaction)); // clone the transaction object
    });

    return Object.keys(mergedLog).map(tUnit => {
        return {
            amount: reduce.sum(mergedLog[tUnit]),
            transactions: mergedLog[tUnit],
            merge: true
        };
    });
};

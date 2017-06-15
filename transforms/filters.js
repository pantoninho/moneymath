const moment = require('moment');

exports.name = 'filter';

exports.transforms = [{
    name: 'by',
    fn: (log, date, timeUnit) => timeFilter(log, date, timeUnit)
}, {
    name: 'by hour',
    fn: (log, date) => timeFilter(log, date, 'hour')
}, {
    name: 'by day',
    fn: (log, date) => timeFilter(log, date, 'day')
}, {
    name: 'by week',
    fn: (log, date) => timeFilter(log, date, 'week')
}, {
    name: 'by month',
    fn: (log, date) => timeFilter(log, date, 'month')
}, {
    name: 'by year',
    fn: (log, date) => timeFilter(log, date, 'year')
}];

function timeFilter(log, date, timeUnit) {
    return log.filter(transaction =>
        moment(date).isSame(moment(transaction.date), timeUnit)
    );
}

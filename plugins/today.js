const moment = require('moment');


module.exports = [
    {
        name: 'today allowance from monthly budget',
        fn: function(m, log, budget) {

            const filter = m.transforms.filter;
            const reduce = m.transforms.reduce;

            const spent = reduce.sum(filter.by.month(log, new Date()));
            const leftToSpend = budget - spent;

            const daysLeft = moment().daysInMonth() - moment().date();

            return leftToSpend / daysLeft;
        }
    }
];

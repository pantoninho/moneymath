
exports.name = 'reduce';

exports.transforms = [{
    name: 'sum',
    fn: log => log.reduce((sum, transaction) => sum + transaction.amount, 0)
}, {
    name: 'average',
    fn: log => exports.sum(log) / log.length
}];

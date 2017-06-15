const today = require('./today');

const plugins = {
    today: today
};

exports.add = function(mm) {
    Object.keys(plugins).forEach(plugin => mm.extend(plugins[plugin]));
};

const filters = require('./filters');
const mergers = require('./mergers');
const reducers = require('./reducers');

const transforms = {
    filters: normalize(filters.name, filters.transforms),
    mergers: normalize(mergers.name, mergers.transforms),
    reducers: normalize(reducers.name, reducers.transforms)
};

exports.add = function(mm) {
    Object.keys(transforms).forEach(transform => mm.transforms.extend(transforms[transform]));
};

function normalize(prefix, transforms) {
    return transforms.map(transform => {
        return {
            name: [prefix, transform.name],
            fn: transform.fn
        };
    });
}

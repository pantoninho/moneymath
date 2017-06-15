const expressive = require('expressive-objects');

const corePlugins = require('./plugins');
const coreTransforms = require('./transforms');

const mm = {};

mm.extend = function(plugin) {

    plugin = plugin.map(definition => {
        return {
            path: definition.name,
            value: definition.fn.bind(null, mm)
        };
    });

    expressive.extend(mm, plugin);
};

mm.transforms = {
    extend: function(transform) {

        transform = Array.isArray(transform) ? transform : [transform];
        transform = transform.map(definition => {
            return {
                path: definition.name,
                value: definition.fn
            };
        });

        expressive.extend(mm.transforms, transform);
    }
};

module.exports = mm;
coreTransforms.add(mm);
corePlugins.add(mm);

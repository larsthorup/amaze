(function (depNames, factory) {
    if (typeof define === 'function' && define.amd) {
        define(depNames, factory);
    } else if (typeof exports === 'object') {
        var deps = [];
        for(var i = 0; i < depNames.length; ++i) {
            deps.push(require(depNames[i]));
        }
        module.exports = factory.apply(this, deps);
    }
}(['lodash'], function (_) {

    function Distances(root) {
        this._root = root;
        this._cells = {};
        this.distance(root, 0);
    }

    Distances.prototype.distance = function (cell, distance) {
        if(_.isUndefined(distance)) {
            return _.has(this._cells, cell.id()) ? this._cells[cell.id()].distance : null;
        } else {
            this._cells[cell.id()] = {
                cell: cell,
                distance: distance
            };
        }
    };

    Distances.prototype.max = function () {
        var max = {
            cell: this._root,
            distance: 0
        };
        _.each(this._cells, function (value) {
            if(value.distance > max.distance) {
                max = value;
            }
        });
        return max;
    };

    return Distances;

}));

/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @since   2/6/14
 */

(function() {

    var _ = require('lodash');

    var People = function(Inherits, config) {
        this.config = config;

        Inherits(this);

        this.me = function(cb) {
            this.createCall('GET', 'me', cb)(this.config);
        };

        return this;
    }.bind(this);

    module.exports = People;

}).call(this);

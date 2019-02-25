/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @since   1/14/14
 */

(function() {
    var _ = require('lodash')
        , request = require('request')
        , util = require('util')
        , url = require('url');

    var Handler = function(subClass) {
        this.createCall = function(method, path, options, callback) {
            return function(config) {
                if (_.isFunction(options)) {
                    callback = options;
                    options = {};
                }

                path = url.resolve(config.api_url, path);

                var parameters = {
                    url: path,
                    method: method,
                    timeout: config.timeout || 60 * 1000 /* Default to 60sec */,
                    headers: {},
                    json: true
                };

                parameters.headers['Authorization'] = 'Bearer ' + config.accessToken.token;

                request(parameters, function(err, response, body) {
                    return callback(err, typeof body === 'string' ? JSON.parse(body) : body);
                });
            }
        };

        _.merge(subClass, this);
        return this;
    }.bind(this);

    module.exports = Handler;
}).call(this);

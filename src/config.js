/**
 * Configuration utility.
 *
 * @type {}
 */
var Configuration = ( function (defaults) {

    var _config = defaults;

    function override(clientConfig) {
        $.extend(true, _config, clientConfig);
    }

    //
    // Returns the value at the given path in the configuration.
    // If the value is a function, return the result of evaluating that function.
    //
    function scalarValue(path) {
        var val = jsonPath(path,_config);
        if ($.isFunction(val)) {
            return val();
        }
        return val;
    }

    //
    // Returns the value at the given path in the configuration.
    //
    // If the value is a function, return the function.
    //
    function functionValue(path) {
        var val = jsonPath(path,_config);
        return val;
    }

    return {
        override: override,
        scalarValue: scalarValue,
        functionValue: functionValue
    }
});

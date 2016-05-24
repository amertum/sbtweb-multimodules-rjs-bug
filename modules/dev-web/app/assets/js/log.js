define(function() {
    var self = {};

    self.logLevel = 2;

    // error: level 0
    self.error = function(obj) {
        if ( window.console && window.console.error && self.logLevel >= 0) {
            window.console.error( obj );
        }
    };

    // error: level 1
    self.warn = function ( obj ) {
        if ( window.console && window.console.warn && self.logLevel >= 1) {
            window.console.warn( obj );
        }
    };

    // info: level 2
    self.info = function ( obj ) {
        if ( window.console && window.console.info && self.logLevel >= 2) {
            window.console.info( obj );
        }
    };

    // debug: level 3
    self.debug = function ( obj ) {
        if ( window.console && window.console.log && self.logLevel >= 3) {
            window.console.log( obj );
        }
    };

    // trace: level 4
    self.trace = function ( obj ) {
        if ( window.console && window.console.trace && self.logLevel >= 4) {
            window.console.trace( obj );
        }
    };

    return self;
});
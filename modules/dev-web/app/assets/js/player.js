define([
    './log',
    './sm2'
], function (log, sm2) {
    var name = "player:";
    log.trace(name+"loading...");

    function isReady() {
        return sm2.ok();
    }

    var module = {
        isReady: isReady
    };

    log.info(name+"loaded");
    return module;
});
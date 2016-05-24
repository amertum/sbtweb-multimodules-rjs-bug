define([
    'require',
    './log',
    'soundmanager2'
], function(require, log) {
    var name = "sm2:";
    log.trace(name+"loading...");

    soundManager.setup({
        url: require.toUrl("./common/soundmanager-2.97a.20150601/swf/"),
        //flashVersion: 9, // optional: shiny features (default = 8)
        preferFlash: false, // if true, ignore Flash where possible, else use 100% HTML5 mode
        onready: function() {
            log.info("SoundManager initialized!");
        },
        ontimeout: function(error) {
            log.error("SoundManager timeout! " + error);
        }
    });

    log.info(name+"loaded");
    return soundManager;
});

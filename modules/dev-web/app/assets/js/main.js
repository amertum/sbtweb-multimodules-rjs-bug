// main asset from module
requirejs.config({
    paths: {
        'jquery': '../../jquery/jquery',
        'bootstrap': '../../bootstrap/js/bootstrap',
        'jquery.ui.widget': '../../jquery-file-upload/js/vendor/jquery.ui.widget',
        'fileupload': '../../jquery-file-upload/js/jquery.fileupload',
        'soundmanager2': '../../soundmanager2/script/soundmanager2'
    },
    shim: {
        'jquery': { exports : '$' },
        'bootstrap': ['jquery'],
        'fileupload': ['jquery.ui.widget']
    }
});

requirejs.onError = function (err) {
    console.log(err);
};

require(['jquery', 'bootstrap', 'fileupload', 'soundmanager2', './player', 'jquery.ui.widget'], function($, _bootstrap, fileupload, sm2, player){
    if (global && global.hookFn) {
        global.hookFn($, fileupload, player);
    }
});

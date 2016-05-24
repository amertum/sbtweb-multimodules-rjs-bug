// main asset from root
requirejs.config({
    paths: {
        'jquery': '../lib/jquery/jquery',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery.ui.widget': '../lib/jquery-file-upload/js/vendor/jquery.ui.widget',
        'fileupload': '../lib/jquery-file-upload/js/jquery.fileupload',
        'soundmanager2': '../lib/soundmanager2/script/soundmanager2'
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

require(['jquery', 'bootstrap', 'fileupload', 'soundmanager2', './player'], function($, _bootstrap, fileupload, sm2, player){
    if (global && global.hookFn) {
        global.hookFn($, fileupload, player);
    }
});

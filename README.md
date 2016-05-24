# Problem description

Reproducing bug of https://github.com/sbt/sbt-web/issues/118 where assets from sub-modules are not transformed through
pipelineStages of rjs plugin.

Run the application in testProd

    sbt testProd

Go to page `http://localhost:9000/dev/upload-assets-from-root` and see that js assets are correctly hangle by rjs plugin
for `root` module.

    http://localhost:9000/assets/lib/bootstrap/css/ca4260ecaa562c73ad6a9594108f7e58-bootstrap.min.css
    http://localhost:9000/assets/lib/requirejs/4bcb3be69ecd62e229991c2c2f0babc3-require.min.js
    http://localhost:9000/assets/js/20bb004c21bc9ff643de6bf55f74ec97-main.js
    http://localhost:9000/assets/images/84a01dc6c53f0d2a58a2f7ff9e17a294-favicon.png
    http://cdn.jsdelivr.net/webjars/jquery/1.12.3/jquery.min.js
    http://cdn.jsdelivr.net/webjars/bootstrap/3.3.6/js/bootstrap.min.js

Go to page `http://localhost:9000/dev/upload-assets-from-module` and see that js assets are NOT correctly handle by
rjs plugin for `dev-web` sub-module.

The js assets are not minified, nor merged into a single file, and the `soundmanager2` and `jquery.fileupload` assets are not found.

    http://localhost:9000/assets/lib/bootstrap/css/ca4260ecaa562c73ad6a9594108f7e58-bootstrap.min.css
    http://localhost:9000/assets/lib/requirejs/4bcb3be69ecd62e229991c2c2f0babc3-require.min.js
    http://localhost:9000/assets/lib/dev-web/js/18930af267604863757aaacb01741c3a-main.js
    http://localhost:9000/assets/lib/soundmanager2/script/soundmanager2.js                  => NOT FOUND
    http://localhost:9000/assets/lib/dev-web/js/player.js
    http://localhost:9000/assets/lib/jquery-file-upload/js/vendor/jquery.ui.widget.js       => NOT FOUND
    http://localhost:9000/assets/lib/jquery/jquery.js
    http://localhost:9000/assets/lib/dev-web/js/log.js
    http://localhost:9000/assets/lib/dev-web/js/sm2.js
    http://localhost:9000/assets/lib/bootstrap/js/bootstrap.js

It is not possible to use `sbt-web % 1.4.0` as there is an compilation error with `sbt-rjs % 1.0.7` :

    java.lang.NoSuchMethodError: com.typesafe.sbt.web.SbtWeb$.syncMappings(Ljava/io/File;Lscala/collection/Seq;Ljava/io/File;)Ljava/io/File;
        at com.typesafe.sbt.rjs.SbtRjs$$anonfun$runOptimizer$1$$anonfun$apply$9.apply(SbtRjs.scala:177)
        at com.typesafe.sbt.rjs.SbtRjs$$anonfun$runOptimizer$1$$anonfun$apply$9.apply(SbtRjs.scala:172)
        at scala.Function$$anonfun$chain$1$$anonfun$apply$1.apply(Function.scala:24)

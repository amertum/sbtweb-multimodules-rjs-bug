name := "dev-web"

Common.settings

//pipelineStages in Assets := Seq(rjs, digest, gzip)

libraryDependencies ++= Seq(
) ++ Common.webjars

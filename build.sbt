import sbt.Keys._

//logLevel in Global := Level.Debug

name := "sbtweb-multimodules-rjs-bug"

Common.settings

lazy val devWeb = (project in file("modules/dev-web"))
  .enablePlugins(PlayScala)
  .enablePlugins(SbtWeb)

lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .enablePlugins(SbtWeb)
  .dependsOn(devWeb)
  .aggregate(devWeb)

pipelineStages := Seq(rjs, digest, gzip)

//JsEngineKeys.engineType := JsEngineKeys.EngineType.Node

libraryDependencies ++= Seq(
  filters,

  Common.scalaGuice
) ++ Common.webjars

resolvers += Resolver.jcenterRepo

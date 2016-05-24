import play.sbt.routes.RoutesKeys._
import sbt.Keys._
import sbt._

object Common {
  val settings: Seq[Setting[_]] = Seq(
    version := "1.0-SNAPSHOT",
    scalaVersion := "2.11.8",
    doc in Compile <<= target.map(_ / "none"),
    routesGenerator := InjectedRoutesGenerator
  )

  val scalaGuice = "net.codingwell" %% "scala-guice" % "4.0.1"

  // wejars
  val webjars = Seq(
    "org.webjars" % "requirejs" % "2.2.0",
    "org.webjars" % "jquery" % "1.12.3",
    "org.webjars" % "bootstrap" % "3.3.6" exclude("org.webjars", "jquery"),
    "org.webjars.bower" % "jquery-file-upload" % "9.12.1",
    "org.webjars.npm" % "soundmanager2" % "2.97.20150601-a")

}
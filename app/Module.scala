import java.time.Clock

import com.google.inject.{AbstractModule, Inject}
import net.codingwell.scalaguice.ScalaModule
import play.api.Mode.Prod
import play.api.http.HttpFilters
import play.api.{Configuration, Environment}
import play.filters.gzip.GzipFilter

class Module(env: Environment, conf: Configuration) extends AbstractModule with ScalaModule {
  override def configure() = {
    bind[Clock].toInstance(Clock.systemUTC())
  }
}

class Filters @Inject() (
  env: Environment,
  gzipFilter: GzipFilter
) extends HttpFilters {

  val filters = env.mode match {
    case Prod => Seq(gzipFilter)
    case _ => Seq()
  }

}

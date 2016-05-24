package dev

import java.time.Clock
import javax.inject.Inject

import play.api.mvc.{Action, Controller}

class Uploads @Inject() (
  clock: Clock
) extends Controller {

  def uploadAssetsFromRoot = Action {
    Ok(views.html.uploadAssetsFromRoot())
  }

  def uploadAssetsFromModule = Action {
    Ok(views.html.uploadAssetsFromModule())
  }

}

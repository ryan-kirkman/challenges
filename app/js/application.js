window.Application = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  init: function () {
    new Application.Routers.SimpleRouter();
    Backbone.history.start();
  }
}

$(document).ready(function () {
  Application.init();
});


Application.Routers.SimpleRouter = Backbone.Router.extend({
  routes: {
    ''       : 'index',
    'phones' : 'phones'
  },

  initialize: function () {
    this.content_view = null;
  },

  index: function () {
    this.content_view = new Application.Views.Index();
    $('#content').html(this.content_view.render().el);
  },

  phones: function () {
    this.content_view = new Application.Views.Phones();
    $('#content').html(this.content_view.render().el);
  }
});


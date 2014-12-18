Application.Views.Index = Backbone.View.extend({
  template: JST['backbone/index'],

  render: function () {
    $(this.el).html(this.template());
    return this;
  }
});


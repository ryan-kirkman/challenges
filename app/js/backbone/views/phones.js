Application.Views.Phones = Backbone.View.extend({
  template: JST['backbone/phones'],

  render: function () {
    $(this.el).html(this.template());
    return this;
  }
});


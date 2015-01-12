beforeEach(function() {
  this.addMatchers({
    toBeAwesome: function(expectedInput) {
      return expectedInput == "awesome";
    }
  });
});

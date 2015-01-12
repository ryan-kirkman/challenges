describe("Challenge", function() {
  beforeEach(function() {
    this.view = new Application.Views.Index();
  });

  it("is defined", function() {
    expect(this.view).toBeDefined();
  });

  describe(".render", function() {
    beforeEach(function() {
      this.view.render();
    });

    it("contains instructions", function() {
      expect(this.view.$('#instructions').text()).toBe("Instructions");
    });
  });

});

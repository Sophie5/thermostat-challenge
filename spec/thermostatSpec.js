describe("Thermostat", function() {
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20", function() {

    expect(thermostat.temperature()).toEqual(20);
  });
});

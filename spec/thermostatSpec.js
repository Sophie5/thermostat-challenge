describe("Thermostat", function() {
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have power saving is set by default", function() {
    expect(thermostat.powerSaving).toEqual(true);
  });

  it("should start at 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase the temperature", function() {
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should decrease the temperature", function() {
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should reset the temperature to 20", function() {
    thermostat.increase();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  })

describe("temperature limits", function() {

  it("should throw an error if tries to decrease past 10", function(){
    thermostat.temperature = 10;
    thermostat.decrease();
    expect(function(){thermostat.minimum()}).toThrowError("The temperature cannot be set below 10")
  });

  it("should throw an error if the temperature increases past 25 if powerSaving on", function() {
    thermostat.temperature = 25;
    thermostat.increase();
    expect(function(){thermostat.maximum()}).toThrowError("The temperature can't be set above 25 with power saving on")
  });

  it("should throw an error if the temperature increases past 32 if powerSaving off", function() {
    thermostat.powerSaving = false;
    thermostat.temperature = 32;
    thermostat.increase();
    expect(function(){thermostat.maximum()}).toThrowError("The temperature can't be set above 32 with power saving off")

});
});

});

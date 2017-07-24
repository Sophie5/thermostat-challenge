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
  });

  describe("temperature limits", function() {

    it("should throw an error if tries to decrease past 10", function(){
      thermostat.temperature = 10;
      thermostat.decrease();
      expect(function(){thermostat.minimum()}).toThrowError("The temperature cannot be set below 10")
    });

    it("should show an error message if the temperature increases past 25 if powerSaving on", function() {
      thermostat.temperature = 25;
      thermostat.increase();
      thermostat.maximum();
      expect(thermostat.errorMessage).toEqual("The temperature can't be set <br> above 25 with power saving on")
    });

    it("should show an error message if the temperature increases past 32 if powerSaving off", function() {
      thermostat.powerSaving = false;
      thermostat.temperature = 32;
      thermostat.increase();
      thermostat.maximum();
      expect(thermostat.errorMessage).toEqual("The temperature can't be set <br> above 32 with power saving off")

    });

    it("shouldn't let the temperature go past 25 if powerSaving on", function() {
      thermostat.temperature = 25;
      thermostat.increase();
      thermostat.maximum();
      expect(thermostat.temperature).toEqual(25)
    });

    it("shouldn't let the temperature go past 32 if powerSaving off", function() {
      thermostat.powerSaving = false;
      thermostat.temperature = 32;
      thermostat.increase();
      thermostat.maximum();
      expect(thermostat.temperature).toEqual(32)
    });
  });

  describe("power usage", function(){
    it("should show low power usage if the temperature is below 18", function() {
      thermostat.temperature = 10;
      expect(thermostat.powerUsage()).toEqual("Power usage: Low")
    });

    it(" should show medium power usage if the temperature is below 25", function() {
      thermostat.temperature = 18;
      expect(thermostat.powerUsage()).toEqual("Power usage: Medium")
    });

    it(" should show high power usage if the temperature is above 25", function() {
      thermostat.temperature = 25;
      expect(thermostat.powerUsage()).toEqual("Power usage: High")
    });
  });
});

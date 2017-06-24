function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.increase = function() {
  this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  this.temperature -= 1;
};

Thermostat.prototype.reset = function () {
this.temperature = 20;
};

Thermostat.prototype.minimum = function() {
  if(this.temperature < 10){

  throw  new Error("The temperature cannot be set below 10");
};
};

Thermostat.prototype.maximum = function () {
  if(this.temperature > 25 && this.powerSaving == true) {
      throw  new Error("The temperature can't be set above 25 with power saving on");
  }
  else if(this.temperature > 32 && this.powerSaving == false) {
    throw new Error("The temperature can't be set above 32 with power saving off");
  }
};

Thermostat.prototype.energyUsage = function () {
  if(this.temperature < 18) {
    return "Power: Low-usage";
  }
  else if (this.temperature < 25) {
     return "Power: Medium-usage";
  }
  else{
    return "Power: High-usage";
  }
};

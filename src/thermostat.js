function Thermostat() {
  this.temperature = 20;
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

function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;

}

Thermostat.prototype.increase = function() {
  return this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  return this.temperature -= 1;
};

Thermostat.prototype.reset = function () {
return this.temperature = 20;
};

Thermostat.prototype.minimum = function() {
  if(this.temperature < 11){

  throw  new Error("The temperature cannot be set below 10");
};
};

Thermostat.prototype.maximum = function () {
    this.message = document.getElementById('message');
    message.innerHTML = "";
  try{
  if(this.temperature > 24 && this.powerSaving == true)
  throw new Error ("The temperature can't be set above 25 with power saving on");
  if(this.temperature > 31 && this.powerSaving == false)
     throw new Error ("The temperature can't be set above 32 with power saving off");
}
catch(err){
  message.innerHTML= err
}
};

Thermostat.prototype.powerUsage = function () {
  if(this.temperature < 18) {
    return "Power usage: Low";
  }
  else if (this.temperature < 25) {
     return "Power usage: Medium";
  }
  else{
    return "Power usage: High";
  }
};

$(document).ready(function() {
  var thermostat = new Thermostat();

 $('#currentTemperature').html(thermostat.temperature);

$('#increase').click(function(){
  thermostat.increase();
  thermostat.maximum();
  $('#currentTemperature').html(thermostat.temperature);
});

$('#decrease').click(function(){
  thermostat.decrease();
  thermostat.minimum();
  $('#currentTemperature').html(thermostat.temperature);
});

$('#reset').click(function(){
  thermostat.reset();
  $('#currentTemperature').html(thermostat.temperature);
});

$('#powerSaving').click(function(){
  thermostat.powerSaving === true? thermostat.powerSaving = false : thermostat.powerSaving = true;
  thermostat.maximum();
});

$('#powerUsage').click(function(){
  thermostat.powerUsage();
  $('#energyUsage').html(thermostat.powerUsage());
});
});

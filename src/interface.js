$(document).ready(function() {
  var thermostat = new Thermostat();

 $('#currentTemperature').html(thermostat.temperature);
 $('#errorMessage').html(thermostat.errorMessage);


$('#increase').click(function(){
  thermostat.increase();
  thermostat.maximum();
  $('#currentTemperature').html(thermostat.temperature);
  $('#errorMessage').html(thermostat.errorMessage).show();
  $('#energyUsage').html(thermostat.powerUsage()).hide();

});

$('#decrease').click(function(){
  thermostat.decrease();
  thermostat.minimum();
  $('#currentTemperature').html(thermostat.temperature);
  $('#errorMessage').html(thermostat.errorMessage).hide();
  $('#energyUsage').html(thermostat.powerUsage()).hide();

});

$('#reset').click(function(){
  thermostat.reset();
  $('#currentTemperature').html(thermostat.temperature);
  $('#errorMessage').html(thermostat.errorMessage).hide();
  $('#energyUsage').html(thermostat.powerUsage()).hide();

});

$('#powerSaving').click(function(){
  thermostat.powerSaving === true? thermostat.powerSaving = false : thermostat.powerSaving = true;
  thermostat.maximum();
  thermostat.toggleEcoSymbol();
});

$('#powerUsage').click(function(){
  thermostat.powerUsage();
  $('#energyUsage').html(thermostat.powerUsage()).show();
  $('#errorMessage').html(thermostat.errorMessage).hide();

});
});

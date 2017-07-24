$(document).ready(function() {
  var thermostat = new Thermostat();

 $('#currentTemperature').html(thermostat.temperature);


$('#increase').click(function(){
  thermostat.increase();
  thermostat.maximum();
  $('#currentTemperature').html(thermostat.temperature);
  $('#maxErrorMessage').html(thermostat.maxErrorMessage).show();
  $('#energyUsage').html(thermostat.powerUsage()).hide();
  $('#minErrorMessage').html(thermostat.minErrorMessage).hide();


});

$('#decrease').click(function(){
  thermostat.decrease();
  thermostat.minimum();
  $('#currentTemperature').html(thermostat.temperature);
  $('#maxErrorMessage').html(thermostat.maxErrorMessage).hide();
  $('#energyUsage').html(thermostat.powerUsage()).hide();
  $('#minErrorMessage').html(thermostat.minErrorMessage).show();

});

$('#reset').click(function(){
  thermostat.reset();
  $('#currentTemperature').html(thermostat.temperature);
  $('#maxErrorMessage').html(thermostat.maxErrorMessage).hide();
  $('#energyUsage').html(thermostat.powerUsage()).hide();
  $('#minErrorMessage').html(thermostat.minErrorMessage).hide();

});

$('#powerSaving').click(function(){
  thermostat.powerSaving === true? thermostat.powerSaving = false : thermostat.powerSaving = true;
  thermostat.maximum();
  thermostat.toggleEcoSymbol();
});

$('#powerUsage').click(function(){
  thermostat.powerUsage();
  $('#energyUsage').html(thermostat.powerUsage()).show();
  $('#maxErrorMessage').html(thermostat.maxErrorMessage).hide();
  $('#minErrorMessage').html(thermostat.minErrorMessage).hide();
});
});

$(document).ready(function() {
  var thermostat = new Thermostat();

 $('#currentTemperature').html(thermostat.temperature);

$('#increase').click(function(){
  thermostat.maximum();
  thermostat.increase();
  $('#currentTemperature').html(thermostat.temperature);
});

$('#decrease').click(function(){
    thermostat.minimum();
  thermostat.decrease();
  $('#currentTemperature').html(thermostat.temperature);
});
});

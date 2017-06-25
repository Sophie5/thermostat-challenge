$(document).ready(function() {
  var thermostat = new Thermostat();

 $('#currentTemperature').html(thermostat.temperature);

$('#increase').click(function(){
  thermostat.increase();
  $('#currentTemperature').html(thermostat.temperature);
});

$('#decrease').click(function(){
  thermostat.decrease();
  $('#currentTemperature').html(thermostat.temperature);
});
});

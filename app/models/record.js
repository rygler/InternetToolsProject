import DS from 'ember-data';

export default DS.Model.extend({
  terrestrialDate: DS.attr('string'),
  sol: DS.attr('number'),
  ls: DS.attr('number'),
  minTemp: DS.attr('number'),
  minTempFahrenheit: DS.attr('number'),
  maxTemp: DS.attr('number'),
  maxTempFahrenheit: DS.attr('number'),
  pressure: DS.attr('number'),
  pressureString: DS.attr('string'),
  absHumidity: DS.attr('number'),
  windSpeed: DS.attr('number'),
  windDirection: DS.attr('string'),
  atmoOpacity: DS.attr('string'),
  season: DS.attr('string'),
  sunrise: DS.attr('string'),
  sunset: DS.attr('string')
});

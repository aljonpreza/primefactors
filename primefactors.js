/**
 * Created by aljonp on 10/8/15.
 */

/**
 * This function will print the largest prime factor of a given value.
 * @param value The number to evaluate
 */
/* exported primeFactors */
var primeFactors = function(value) {
  var largpfactor = 1;
  var div = 2;
  while (value > 1) {
    while ( (value % div) === 0) {
      largpfactor = div;
      value = value / div;
    }
    div += 1;
  }
  console.log(largpfactor);
};

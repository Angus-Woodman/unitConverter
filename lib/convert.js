const UNITS = {
    'm': 1,
    'cm': 100
  };

exports.converter = function (amount, unit_init, unit_new) {
  if (!UNITS[unit_init] || !UNITS[unit_new]) {
    return "Error! We don't support this unit conversion.";
  } else {
    let result = (amount/UNITS[unit_init])*UNITS[unit_new]
    return result + unit_new;
  }
}

// object of unit conversions with m as base
const UNITS = {
    'm': 1,
    'cm': 100
  };

// converts input unit to desired input
exports.converter = function (amount, unit_init, unit_new) {
  if (!UNITS[unit_init] || !UNITS[unit_new]) {
    return "Error! We don't support this unit conversion. Please try again.";
  } else {
    let result = (amount/UNITS[unit_init])*UNITS[unit_new]
    return result + unit_new;
  }
}

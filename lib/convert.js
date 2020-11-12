const UNITS = {
    'cmm': 0.01,
    'mcm': 100
};

exports.converter = function (amount, unit_init, unit_new) {
  if (!UNITS[unit_init+unit_new]) {
    return "Error! We don't support this unit conversion.";
  } else {
    return UNITS[unit_init+unit_new]*amount+unit_new;
  }
}

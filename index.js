
function sum(fromN, toN) {
  if (toN > fromN) {
    return fromN + sum(fromN + 1, toN);
  } else {
  return fromN;
  }
  // Sum all the values from fromN up to toN
}

module.exports = sum;
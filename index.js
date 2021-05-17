function map(val, oldMin, oldMax, min, max) {
  return ((val - oldMin) * (max - min)) / (oldMax - oldMin) + min
};

export {
  map,
}

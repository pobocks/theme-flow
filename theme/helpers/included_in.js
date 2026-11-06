module.exports = function (value, container) {
  return container.split(';').includes(value);
}

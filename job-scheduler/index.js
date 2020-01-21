
/**
 *
 * @param {Function} f - Function to execute
 * @param {Integer} delay - Delay in milliseconds
 */
function schedule(f = () => {}, delay = 1000) {
  const timeOut = setTimeout(f, delay);
  return () => clearInterval(timeOut);
}

module.exports = {
  schedule
}

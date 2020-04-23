var hammingDistance = function(strandA, strandB) {
  var length = Math.min(strandA.length, strandB.length)
  ,   differences = 0
  ,   index = 0

  while (index < length) {
    if (strandA[index] !== strandB[index])
      differences += 1
    index += 1
  }

  return differences
}
module.exports = hammingDistance
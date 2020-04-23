var hammingDistance = function(strandA, strandB) {
  var differences = 0
  for(let i=0; (i<strandA.length && i<strandB.length); i++ ){
    if (strandA[i] !== strandB[i]){
      differences += 1
    }
  }
  return differences
}

console.log(hammingDistance('abc', 'add'));
module.exports = hammingDistance
function findNums (numRangeMax, numRangeMin) {
  let fireDNum = 0
  let poliDArr = []
  let mediDNum = 0
  let answer = []
  for (var k = numRangeMin; k < numRangeMax; k ++) {
    if (k % 2 === 0) {
      poliDArr.push(k)
    }
  }
  for (var i = numRangeMin; i <= numRangeMax; i++) {
    for (var j = numRangeMin; j < numRangeMax; j++) {
      for (var l = numRangeMin; l < numRangeMax; l++) {
        if (i + j + poliDArr[l] === 12 && i !== j && j !== l && l !== i) {
          let newCombo = {
            fireDNum: i,
            poliDArr: poliDArr[l],
            mediDNum: j
          }
          answer.push(newCombo)
        }
      }
    }
  }
}

findNums(7, 1);
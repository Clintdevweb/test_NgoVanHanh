let arrayA = ["A1", "A2", "A3", "A4", "A5"];
let arrayB = ["B1", "B2", "B3", "B4", "B5"];
let arrayC = ["C1", "C2", "C3", "C4", "C5"];



for (let i = 0; i < arrayA.length; i++) {

  for (let j = 0; j < arrayB.length; j++) {

    for (let k = 0; k < arrayC.length; k++) {
      let result = [];
      result.push(arrayA[i] + ' ,' + arrayB[j] + ' ,' + arrayC[k]);
      // console.log(result);
    }
  }
}
let resultAll = []
arrayA.forEach(itemA => {
  arrayB.forEach(itemB => {
    arrayC.forEach(itemC => {
      let result1 = [];
      result1.push(`${itemA} , ${itemB} , ${itemC}`)
      resultAll.push(result1)
    })
  })
})


let max = 0
let height = [1,1]
let height2 = height.slice(1)
// let result = []
for (let i = 0; i < height.length; i++) {
  // console.log(height[i])
  for (let j = 1; j < height.length; j++) {
    // console.log(height[j])
  }
}
for (let i = 0; i < height.length; i++) {
  for (let j = 1; j < height.length; j++) {
    // console.log(height[j])
    if (height[i] < height[j]) {
      let resultHeight = height[i] * Math.abs((j - i))
      // console.log(resultHeight)
      if (max < resultHeight) {
        max = resultHeight
      }

    } else if (height[i] > height[j]) {
      let resultHeight = height[j] *  Math.abs(j - i)
      if (max < resultHeight) {
        max = resultHeight
      }
    } else if (height[i] = height[j]) {
      let resultHeight = height[i] *  Math.abs(j - i)
      if (max < resultHeight) {
        max = resultHeight
      }
    }
    console.log(max)
  }

}





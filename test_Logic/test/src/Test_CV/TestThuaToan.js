import React from 'react'

export default function TestThuaToan() {
    let arrayA = ["A1", "A2", "A3", "A4", "A5"];
    let arrayB = ["B1", "B2", "B3", "B4", "B5"];
    let arrayC = ["C1", "C2", "C3", "C4", "C5"];

    const resultTest = () => { 
        // c1
        for (let i = 0; i < arrayA.length; i++) {

            for (let j = 0; j < arrayB.length; j++) {
    
                for (let k = 0; k < arrayC.length; k++) {
                    let result = [];
                    result.push(arrayA[i] + ' ,' + arrayB[j] + ' ,' + arrayC[k]);
                    console.log(result);
                }
            }
        }

        // c2
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
        console.log(resultAll)
     }

    
    return (
        <>{resultTest()}</>
    )
}

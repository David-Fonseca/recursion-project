// function fibs(n){
//     if (n<=0){
//         return []
//     }
//     let result = [0];
//     let current = 1;
//     for(let i = 1; i<n;i++){
//         result.push(current)
//         current = current+result[i-1]
//     }
//     return result
// }

// console.log(fibs(8))


function fibsRec(n){
    if (n<=0){
        return [];
    }
    else if (n===1){
        return [0];
    }
    else if(n===2){
        return [0,1]
    }
    sequence = fibsRec(n-1)
    sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2])
    return sequence; 
}

console.log(fibsRec(8))
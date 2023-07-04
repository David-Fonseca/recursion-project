function merge(left, right){
    let result = []
    while (left.length!==0 && right.length!==0){
        if (left[0]>right[0]){
            result.push(right.shift())
        }
        else{
            result.push(left.shift())
        }    
        if(left.length===0){
            result = result.concat(right)
        }
        if(left.right===0){
            result = result.concat(left)
        }
    }

    return result
}

function mergeSort(array){
    if(array.length===1){
        
        return array;
    }
    
    const mid = Math.floor(array.length/2);
  
    const left = array.slice(0,mid);
    const right = array.slice(mid,array.length);
    console.log({left,right})
    const leftSorted = mergeSort(left);
    const rightSorted=mergeSort(right);
    console.log({leftSorted,rightSorted})
    return(merge(leftSorted, rightSorted))

}

console.log(mergeSort([1,4,5,32,4,5,3,56,1,878]))


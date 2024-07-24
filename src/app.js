export function plusArray(array1, array2) {
    return sumArray(array1) + sumArray(array2)
}

function sumArray(myArray) {
    let tempSum = 0
    myArray.forEach(element => {
        tempSum += element
    });
    return tempSum
}

console.log(plusArray([1, 2, 3], [4, 5, 6]));
console.log(plusArray([-1, -2, -3], [-4, -5, -6]));
console.log(plusArray([0, 0, 0], [4, 5, 6]));
console.log(plusArray([100, 200, 300], [400, 500, 600]));

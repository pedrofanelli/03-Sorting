function split(wholeArray) {
    let impar;
    let firstHalf = [];
    let secondHalf = [];
    // Para evitar errores
    if (wholeArray.length === 0 || wholeArray.length === 1) {
        return wholeArray;
    }
    if (wholeArray.length % 2 != 0) {
        impar = Math.floor(wholeArray.length / 2);

        for (let i = 0; i < impar; i++) {
        firstHalf.push(wholeArray[i]);
        }
        for (let i = impar; i < wholeArray.length; i++) {
            secondHalf.push(wholeArray[i]);
        }
    } else {
        for (let i = 0; i < wholeArray.length / 2; i++) {
            firstHalf.push(wholeArray[i]);
        }
        for (let i = wholeArray.length / 2; i < wholeArray.length; i++) {
            secondHalf.push(wholeArray[i]);
        }
    }
    return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
    let total = [];
    let tope1 = arr1.length;
    let tope2 = arr2.length;
    let index1 = 0; 
    let index2 = 0;
    let suma = arr1.length + arr2.length;
    for (let i = 0; i < suma; i++) {
        if (index1 === tope1) {
            total.push(arr2[index2]);
            index2++;
        } else if (index2 === tope2) {
            total.push(arr1[index1]);
            index1++;
        } else if (arr1[index1] < arr2[index2]) {
            total.push(arr1[index1]);
            index1++;
        } else {
            total.push(arr2[index2]);
            index2++;
        }
    }
    return total;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let newArr = split(arr);

    const [firstHalf, secondHalf] = newArr;
    
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
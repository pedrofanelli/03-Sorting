function bubbleSort(array) {
    /* tu codigo acá */
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - 1); j++) {
            array = swap(array, j, j + 1);
        } 
    }
    return array;
}


function swap(arreglo, index1, index2) {
    /* tu codigo acá */
    let temp = arreglo[index1];
    if (arreglo[index1] > arreglo[index2]) {
        arreglo[index1] = arreglo[index2];
        arreglo[index2] = temp;
    }
    
    return arreglo;
}
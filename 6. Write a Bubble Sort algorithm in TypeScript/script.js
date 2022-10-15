function bubbleSort(array) {
    var _a;
    array = array.slice();
    while (true) {
        var swapped = false;
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
    return array;
}
var array = [8, 3, 12, 5, 1, 6];
console.log(bubbleSort(array));

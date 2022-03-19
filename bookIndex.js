

function bookIndex(arr) { // i=0 [1,3,4,5,7,8,10,12,14,15,16,17] length =12
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] === arr[i] + 1) {
            var start = arr[i];
            while (arr[i + 1] === arr[i] + 1) {
                i++
            }
            var end = arr[i];
            str += start + "-" + end;
        }
        else {
            str += arr[i];
        }
        if (i != arr.length - 1) { }
        str += ",";
    }
    return str;
}
console.log(bookIndex[1,3,4,5,7,8,10,12,14,15,16,17]);




function isPalindrom(str) {
    for (var i = 0 ; i < str.length/2 ; i++ ){
        if(str[i]  !== str[str.length-1-i]){
            return false;
        }
    }
    return true
}
console.log(isPalindrom("racecar"))
console.log(isPalindrom("radisa"));
console.log(isPalindrom("anavolimilovana"))
console.log(isPalindrom("irena"));

function longestPalindrom(string){
    var longest = string[0];
    for (var i = 0 ; i <string.length ; i ++){
        for (var j = 0 ; j < string.length ; j ++){
            var check = string.slice(i,j+1)
            if (isPalindrom(check) && check.length > longest.length){
                longest=check;
            }
        }
    }
    return longest;
}

console.log(longestPalindrom("my favorite racecar erupted"));
console.log(longestPalindrom("nada"));
console.log(longestPalindrom("o ana voli milovana a"));
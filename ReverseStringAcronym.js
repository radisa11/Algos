function reverseString(str){
    var newString="";
    for(var i = str.length-1; i > -1  ; i --){
        newString += str[i];
    }
    console.log(newString);
}
reverseString("creature");



function acronym(str){
    var newStr=str[0].toUpperCase();
    
    for( i = 0; i < str.length ; i++){
        if (str[i] == " "){
            newStr += str[i + 1].toUpperCase();
        }
    }
    return newStr;
}
console.log(acronym("there's no free lunch - gotta pay yer way"));

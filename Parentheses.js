function ParentsValid(str) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ")") {
            counter--
        }
        if (str[i] == "(") {
            counter++
        }
        if (counter < 0) {
            return false;
        }
    }
    if (counter > 0) {
        return false;
    }
    else if (counter == 0) {
        return true;
    }
}
console.log(ParentsValid("(k){[]{}(g{[)"));
console.log(ParentsValid("(k){[]{}g{[)"));
console.log(ParentsValid("(k){[]{}(g{["));

function parentValid(str){

    var checkParents = [];
    for ( i = 0; i < str.length ; i++ ){
        if( str[i] == "("){
            checkParents.push(str[i]);
        }
        else if(str[i] == ")" && checkParents(checkParents.length - 1)  ==  "("){
            checkParents.pop();
        }
        else if (str[i == ")"]){
            return false;
        }
    }
    if (str.length > 0){
        return false;
    }
    else{
        return true;
    }
}
console.log(parentValid("(k){[]{}(g{[)"));
console.log(parentValid("(k){[]{}g{[)"));
console.log(parentValid("(k){[]{}(g{["));
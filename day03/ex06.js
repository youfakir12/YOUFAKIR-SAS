function reverse(str){
    for(let i = 0; i < str.length; i++){
        let rev = str[i];
        str[i] = str[length - 1];
        str[length - 1] = rev


    }
    return (str);
}
let num = [1, 2, 3, 4, 5];
console.log (reverse(num));

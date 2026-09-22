function Supprimer (string){
    let result = [];
    for (let i = 0 ; i < string.length; i++){
        if(!result.includes(string[i]) ){
            result.push(string[i]);
        }
    }
return result;
}
let tableau = [1, 2, 3, 4, 4, 5];
console.log(Supprimer(tableau));
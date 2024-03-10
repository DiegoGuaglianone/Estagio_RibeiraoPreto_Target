function inverteString(string){
    let stringArray = string.split('');
    let aux = [];
    for(let i = stringArray.length - 1; i>=0; i--){
        aux.push(stringArray[i])
    }
    alert(aux.join(''));
}
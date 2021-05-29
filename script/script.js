const num = 266219;
//let res = num.toString();
//console.log(res);
//num.toString();


let result = 1;
for (i =0; i < num.toString().length; i++) {
    result *= +num.toString()[i];
    //console.log(+num.toString()[i], typeof (+num.toString()[i]));
}// другие методы перебора мне пока не известны, гуглить было некогда...
console.log(result);

result = result ** 3;
console.log(result);// не совсем понятно, в каком виде выводить две первые цифры...

console.log(+result.toString().substr(0, 2)); //получили число из 2-х первых цифр
console.log(result.toString().substr(0, 2).split('')); //если достаточно иметь цифры в виде массива строк
console.log(+result.toString()[0], +result.toString()[1]); //может так правильно?

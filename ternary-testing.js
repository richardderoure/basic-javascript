
function ternaryOutput(item, count) {
    return count > 1 ? `I have ${count} ${item}s.` : `I have one ${item}.`;
};
console.log(ternaryOutput('pie', 1));
console.log(ternaryOutput('pie', 2));

function patternOutput() {
    let myStr = "";
    for(let i = 1; i<51; i++){
        myStr += "& ";
        if(i % 5 == 0){myStr += '\n'};
    }
return myStr;
}
console.log(patternOutput());


let exampleString = 'Hello world this is a test!';
console.log(exampleString.length);

let str1 =  'I dislike trains as a mode of transport';
let arr1 = str1.split(" ");
let str2 = arr1[2].split("");
str2.pop();
console.log(str2.join(''));
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet.split('')[4]);


let str3 = 'I love you';
console.log(str3.toUpperCase());

let num1 = 1.23456789;
console.log(num1.toFixed(2));

console.log(Number("45"));

let arr2 = ['red', 'yellow', 'green', 'blue'];

console.log(arr2.shift(), arr2.pop());
arr2.push('orange');
console.log(arr2);
console.log(arr2[2]);

let arr3 = [23123, 2, -328, 0];

let value = Infinity;
for(i=0; i < arr3.length; i++){
    if (arr3[i]<value){value = arr3[i]}
}
console.log(value);


travel = (country,length,place = 'London') => { console.log(`This imaginary person flew to ${place} from ${country}. The flight took a total of ${length} hours.`) };

travel('France', 2, 'Italy');
travel('France', 2);

function factorial(n){
    let x = 1;
    for(i=1; i<=n; i++){
        x*=i;
    }
    return x
}

console.log(factorial(3));
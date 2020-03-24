
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
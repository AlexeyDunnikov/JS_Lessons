const s1 = '(gfdga)' //true
const s2 = '(adfg)[gaf]{agf}' //true
const s3 = '(aga]' //false
const s4 = '{afg[agf]1231}' //true
const s5 = '(hdfs[dfh}' //false
const s6 = '(gda]{}' //false

const openBrackets = ['{', '[', '('];
const closeBrackets = ['}', ']', ')'];

function isValid(s){
    let stack = [];

    for (let i = 0; i < s.length; i++){
        if (openBrackets.indexOf(s[i]) !== -1){
            stack.push(s[i])
        }
        else if (closeBrackets.indexOf(s[i]) !== -1){
            if (
              closeBrackets.indexOf(s[i]) != openBrackets.indexOf(stack.pop())
            ) {
              return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid(s4));
console.log(isValid(s5));
console.log(isValid(s6));


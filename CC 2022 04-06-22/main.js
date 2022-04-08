//reverse the word "world" and make sure output is "dlrow"


//first try using arrow function
const solution = str => str.split('').reverse().join('');

console.log(solution('world'))


//second try using just function

function solution (str){
  const reverseStr = str.split('').reverse('').join('')
  return reverseStr
}
 console.log(solution('world'))



 function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

console.log(solution('world'))
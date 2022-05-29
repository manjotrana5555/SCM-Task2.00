//assertion.js file

var str = 'apple Red apple "orange" "green" avocado';

var f= /^a/g;
//matches only at the beginning of the input

console.log(str.match(f));

var g= /o$/g;
//matches only at the end of the input

console.log(str.match(g));

var h= /\ba/g;
//matches only at a word boundary

console.log(str.match(h));

var i= /\Bg/g;
//matches only not at a word boundary

console.log(str.match(i));
function escapeRegExp(string)

{

return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string

}
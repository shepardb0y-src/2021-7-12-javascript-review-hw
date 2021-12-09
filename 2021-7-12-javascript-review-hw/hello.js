/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1,num2) => {
if (num1 > num2){
  // console.log(num1)
  return num1
}else{
  // console.log(num2)
  return num2
}
};
maxOfTwoNumbers(5,4)


/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1,num2,num3) => {
  if(num1 > num2 && num1 > num3){
    // console.log(num1)
    return num1
  }else if(num1 < num2&& num2 >num3 ){
// console.log(num2)
return num2
  }else if (num1 <num3 && num2 <num3){
    // console.log(num3)
    return num3
  }
};
maxOfThree(200000000000000000000000000000000000,5,1000000000000)

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (vowel) => {
  if(vowel=== "a" || vowel === "A"){
    // console.log(true)
    return true
  }else if( vowel=== "e"|| vowel=== "E"){
    // console.log(true)
    return true
  }else if (vowel=== "i" || vowel === "I"){
    // console.log(true)
    return true
  }else if (vowel=== "o" || vowel === "O"){
    // console.log(true)
    return true
  }else if (vowel=== "u" || vowel === "U"){
  }else {
    // console.log(false)
    return false

  }
};
isCharacterAVowel("a")


/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/
//multiply
mulArray = (array) => {
var mul = 1;
for (let i = 0;i<array.length;i++){
  mul *=array[i]
}
return mul
// console.log(mul)
};
const arrayss = [10,10,10]
mulArray(arrayss)

/// add
sumArray = (array) => {
  var sum = 0;
  for (let i = 0;i<array.length;i++){
    sum +=array[i]
  }
  return sum
  // console.log(sum)
  };
  const arrays = [10,10,10]
  sumArray(arrays)
/*


5.Write a function that returns the number of arguments passed to the function when called.
*/
function func(num,num,num,num){
return num
}

dertermine = (random) =>{
return random.length
  // console.log(random.length)
}
dertermine(func)



/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (string) => {
let reverse = "";
for(let i = string.length-1; i >=0;i-=1){
reverse +=string[i]
}
return reverse
// console.log(reverse)
};
reverseString("fabio")


/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (array) => {
let longWord = ''
for(let i = 0; i<array.length;i++){
  if (array[i].length > longWord.length){
    longWord = array[i]
  }
}
// console.log(longWord)
return longWord
}
const words= ["hello","bye" ,"bonjour"]
findLongestWord(words)



/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (array,num) => {
let value = []
  for (let i= 0; i<array.length;i++ ){
  if(array[i].length > num){
     value[value.length]=array[i]
 }
  }
  // console.log(value)
return value

}
const arr=["wait","to","needle"]
filterLongWords(arr,3)
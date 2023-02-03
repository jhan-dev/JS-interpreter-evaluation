// JS Interpreter Evaluation

// 1)
//Examine the following variables.
var obj = {key: true, lock: false};
var key = 'lock';

//BEFORE using console.log to test them, write down what you think are the values of access1, access2, and access3.
var access1 = obj[key];//Your answer: __false
var access2 = obj['key'];//Your answer: __true
var access3 = obj.key;//Your answer: __true
//After logging, did they match your expectations?
//console.log(access1);  //yes
//console.log(access2);  //yes
//console.log(access3);  //yes

//Why or why not?

//1)  obj[key] looks for a var named 'key', which has a value of 'lock' 
//  in the obj which has a pair value of false.

//2)  obj['key'] looks for the value of the key of 'key' which is true.

//3)  obj.key looks for the value of key of 'key' w/ dot notation as there
//  is no space, num or special chars, has value of true

//-----------------------------------------------
//2a)
var array1 = [0, 1, 2, 3, 4]
for (var k = 0; k < array1.length; k++) {  //0 < 5; k = 0
}
//After executing, what is the current value of k?
//k = 5
//console.log(k);

//Why?
//  By the time k is not less than arr length, JS breaks out of loop with
//  k = 5.

//2b)
for (var i = 0; i < array1.length; i++) {
  if (i !== array1.length - 1) {
    continue;
  } else {
    break;
  }
}

//After executing, what is the current value of i?
  //i = 4
// console.log(i);
//Why?
  //  If i does NOT = length of array1 - 1, loop will continue iteration. When i = array1 -1, loop will stop & return 4.

//-----------------------------------------
//3)
//Examine the following functions.
function loop(str) {
  var result = '';
  for (var i = 0; i < 3; i++) {
    result += i;
  }
  return result;
}


function nestedLoop(str) {
  var result = '';
  for (var i = 0; i < 3; i++) {
    result += i;
    for(var j = 0; j < str.length; j++) {
      result += str[j];
    }
  }
  return result;
}
var loopOutput1 = loop('abc');
var loopOutput2 = nestedLoop('abc');
//BEFORE using console.log to test them, write down what you think are the values of loopOutput1 and loopOutput2.
  /*
  loopOutput1:  '012'
  loopOutput2:  '0abc1abc2abc'
  */

//Did they match your expectations? Why or why not?
  //  Yes, the outter loop kept track of the var i, and for each i, an inner loop iterated the index j of str.
//console.log(loopOutput1);
//console.log(loopOutput2);

var loopyloop = '';
j = 4;
for (var i = 1; i < j; i += 0){  //  1 < 4; 1 += 0
  loopyloop += 'hello 3';
  j--;
};
//After executing, what will be the values of variables loopyloop, i, and j?
  /*
    loopyloop:  'hello 3hello 3hello 3'
    i:  1
    j:  1
  */
//console.log(loopyloop);
//console.log(i, j);

var string1 = 'word';
var string2 = '';  //  'word'

var loopy = '';  //  'word'
for (var x = 0; string2 !== 'word'; x++) {//  3
  loopy += string1[x];
  string2 += string1[x];
}

//After executing, what is the value of loopy?
  //  loopy:  'word'
//console.log(loopy);



//-------------------------------------------
// 4)

//The following function will be given a string and an array of numbers.

var foo = function(string, numsArr) {
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    arr[numsArr[i]] = string[i];
  }
  return arr.join('');
};
//What value type is being returned?
//  value type is string

//What are the values of fooOutput1 and fooOutput2?
var fooOutput1 = foo('ckah', [2,3,1,0]);  //  fooOutput1: 'hack'
var fooOutput2 = foo('avelazing', [1,3,9,2,5,8,7,6,0]);  //  fooOutput2:  'galvanize'


//------------------------------------------
// 5)
//The following function is given an array of numbers.

var bar = function(nums) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {  //  i = 4
      var count = 0;  //  count:  3
      for (var j = 0; j < nums.length; j++) {  //  j = 4
        if (nums[j] < nums[i]) {  //  if 4 < 3; count++;
          //console.log('Is', nums[j], 'less than', nums[i]);
          count++
          //console.log('If True, count:', count);
        }
      }
      arr.push(count);
    }
  //console.log(arr);
  return arr;
};

//What is the value of barOutput?
//  barOutput:  [4,0,1,1,3]

var barOutput = bar([8,1,2,2,3]);

//-----------------------------------------
// 6)

var animalSanctuary = ['apple', 'banana', 'calamari'];
var dinnerPlate = {a: 'aardvark', b: 'bat', c: 'cat'};

var foobar = function(arr, obj) {
  for (var i = 0; i < arr.length; i++) {  //  i = 0; 0 < 3; i++; 
    arr[i] = obj[arr[i][0]];  //  arr[2] = obj[arr[2][0]];
  }
  return arr;  //  ['aardvark', 'bat', 'cat']
}

//BEFORE using console.log to test, can you predict the value of animalOutput?
//  animalOutput prediction: ['apple', 'banana', 'calamari'] -> ['aardvark', 'bat', 'cat']

//What value type will it be?
//  value type:  Array

var animalOutput = foobar(animalSanctuary, dinnerPlate);

//console.log(animalOutput);

//--------------------------------------------

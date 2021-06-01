function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

const getOutput = function (arr) {
  const dict = {};
  arr.forEach((element) => {
    dict[element] ? (dict[element] += 1) : (dict[element] = 1);
  });

  var max = -Infinity;
  var min = Infinity;
  
  for (var key in dict ){
      if (dict[key] > max){
          max = dict[key]
      }
      if (dict[key] < min){
          min = dict[key]
      }
  }
  return [parseInt(getKeyByValue(dict,max)),parseInt(getKeyByValue(dict,min))]
};

arr1 = [1, 1, 2, 2, 4, 4, 4, 4, 5];
arr2 = [2, 2, 2, 2, 4, 4, 4, 4, 5];
arr3 = [1, 2, 2, 4, 4, 4, 4, 5];

console.log(getOutput(arr1))
console.log(getOutput(arr2))
console.log(getOutput(arr3))

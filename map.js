var food = ["Apples", "Catsoup", "TurtleDoves", "OtherSTRANGEFood"];
function map(arr, callback){
  callback(arr);
};

map(food, function(fo){
  var input = [];
  var counter = -1;
    fo.forEach(function lower(items){
      counter += 1;
      input[counter] = items.toLowerCase();
    })
      console.log(input);
});
//var foods = food.map(function(items){
//  return items.toLowerCase();
//});
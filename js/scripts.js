var toArray = function(number){
  var array = [];
  for(i=0; i<=number; i++){
    array.push(i);
  }
  return array;
};

var replaceNumber = function(number){
  var arrayOne = [];
  var divisibleByArray = [];
  arrayOne = toArray(number);
  // divisibleByArray = arrayOne;
  for(var i=1;i<arrayOne.length;i++){
    while(arrayOne[i] % 3 === 0){
      arrayOne.splice(i,1, "I'm sorry, Dave. I'm afraid I can't do that.");
    }
  }
  return arrayOne;
}

var findOne = function(number){

}

$(document).ready(function(){
  $("#input").submit(function(){
    var number = $("#number").val();
    alert(replaceNumber(number));;
  });

});
// $(document).ready(function(){
//   alert("yo");
//   dasfads;
// });

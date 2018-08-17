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

var findDigitOne = function(number){
  var findOne = [];
  findOne = replaceNumber(number);

  // for(j=0;j<findOne.length;j++){
  //   if(findOne[j].match(/^[1]+$/)){
  //     findOne.splice(j,1, "Boop");
  //   }
  //
  // }
  return findOne;
}

$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var number = $("#number").val();
    // alert(replaceNumber(number));
    $("#result").append(" " + findDigitOne(number));
  });

});

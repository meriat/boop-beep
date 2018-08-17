var toArray = function(number){
  var array = [];
  for(i=0; i<=number; i++){
    array.push(i);
  }
  return array;
};

// checking numbers divisible by 3
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

// checking for numbers with digit 1
var findDigitOne = function(number){
  var findOne = [];
  findOne = replaceNumber(number);

  for(j=0; j<findOne.length; j++){
    var stringOne = findOne[j].toString();
    if(stringOne.match([1])) {
      findOne.splice(j,1, "Boop");
    }

  }
  return findOne;
}

// checking for numbers with digit 0
var findDigitZero = function(number){
  var findZero = [];
  findZero = findDigitOne(number)

    for(k=0; k<findZero.length; k++){
      var stringZero = findZero[k].toString();
      if(stringZero.match([0])){
        findZero.splice(k,1,"Beep");
      }
    }
    return findZero;
  }

  var reverseOrder = function(number){
    var reverseStr;
    reverseStr = findDigitZero(number);
    reverseStr.reverse();

    return reverseStr;
  }



$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var number = $("#number").val();
    if (!number.match(/^[0-9]+$/)){
      alert("please enter a valid number");
    }
    else {
      $("#output").empty();
      $("#output").append(" " + findDigitZero(number));
      $("#result").slideDown();
      }
});
      $("#result#btnReverse").submit(function(event){
        event.preventDefault();
        // $("#reverseOutput").empty();
        // $("#reverseOutput").append(" " + reverseOrder(number));
        $("#reverse").slideDown();
      });



});

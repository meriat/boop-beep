var toArray = function(number){
  var array = [];
  for(i=0; i<=number; i++){
    array.push(i);
  }
  return array;
};

$(document).ready(function(){
  $("#input").submit(function(){
    var number = parseInt($("#number").val());
    alert(number);
    alert(toArray(number));
  });

});
// $(document).ready(function(){
//   alert("yo");
//   dasfads;
// });

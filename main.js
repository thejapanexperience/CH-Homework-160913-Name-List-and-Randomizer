$(document).ready(init) 

var array = [];
var finalArray =[];

function init() {
  $('#add').click(addButtonClicked)
  $('#randomizer').click(randomizerButtonClicked)
  $('#teamerizer').click(teamerizerButtonClicked)
}


function addButtonClicked() {

  var $input = $('#name');

  var name = $input.val();

  var newArray = name.split(',')

  for (i=0; i<newArray.length; i++){
    array.push(newArray[i])
  }
  
  $input.val('');

  $('#list').html("");
  for (i=0; i<array.length; i++){
    var $li = $('<li>');
    $li.text(array[i]);
    var $list = $('#list');
    $list.append($li);
    
  }


}

function  randomizerButtonClicked() {

  var randomNumber = Math.floor((Math.random() * array.length));

  $('#random').text("Hello " + array[randomNumber]);
}


function teamerizerButtonClicked() {
  finalArray = array.slice()
  $('#teams').html("Hello Teams!");
  for (i = finalArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = finalArray[i];
    finalArray[i] = finalArray[j];
    finalArray[j] = temp;
  }

  var n = $('#teamSize').val();
  var res = [];
  function split() {
    while (finalArray.length) {
      res.push(finalArray.splice(0, n));
    }
  }
  split();

  $('#teams').html("Hello Teams!");
  for (i=0; i<res.length; i++){
    var $li = $('<li>');
    $li.text(res[i]);
    var $list = $('#teams');
    $list.append($li);
  }
}





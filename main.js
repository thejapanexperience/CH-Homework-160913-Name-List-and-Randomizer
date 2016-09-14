$(document).ready(init) 
var number = 0;
var array = [];
var finalArray =[];

function init() {
  $('#add').click(addButtonClicked)
  $('#randomizer').click(randomizerButtonClicked)
  $('#teamerizer').click(teamerizerButtonClicked)
}


function addButtonClicked() {

  number = number + 1;
  console.log(number);

  console.log('Clicked!');

  var $input = $('#name');

  var name = $input.val();

  console.log('name: ', name);

  var newArray = name.split(',')
  console.log('NewArray: ', newArray)

  for (i=0; i<newArray.length; i++){
    array.push(newArray[i])
  }

  console.log('Array ', array);
  
  $input.val('');

  $('#list').html("");
  for (i=0; i<array.length; i++){
    var $li = $('<li>');
    var $input2 = $('#color');
    var color = $input2.val();
    $li.text(array[i]).css('color', color).attr('id',number);
    var $list = $('#list');

    $list.append($li);
    
  }


}

function  randomizerButtonClicked() {

  console.log('Randomizer Clicked');

  var randomNumber = Math.floor((Math.random() * array.length));

  console.log('Random Number ', randomNumber);
  $('#random').text("Hello " + array[randomNumber]);
}


function teamerizerButtonClicked() {
  finalArray = array.slice()
  console.log("Teamerizer is clicked!")
  console.log("Array: ", array);
  $('#teams').html("Hello Teams!");
  for (i = finalArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = finalArray[i];
    finalArray[i] = finalArray[j];
    finalArray[j] = temp;
  }
  console.log("Final Array: ", finalArray);
  console.log("Array Randomized");
  console.log("Array: ",array);



  var n = $('#teamSize').val();
  var res = [];
  console.log(array);
  function split() {
    while (finalArray.length) {
      res.push(finalArray.splice(0, n));
    }
    console.log(res);
  }
  split();

  $('#teams').html("Hello Teams!");
  for (i=0; i<res.length; i++){
    var $li = $('<li>');
    $li.text(res[i]);
    var $list = $('#teams');
    $list.append($li);
  }
  // array = finalArray;
  console.log(array);
}





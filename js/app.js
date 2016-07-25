//make sure page is loaded.
$(document).ready(function() {
  //log  'sanity check'
  console.log("Sanity Check: Tip Calculator");


  $( ".submit" ).click(function( event ) {
    event.preventDefault();
    console.log($('#total').val());

    var value = $('#total').val()

    var tip = value.replace("$", "")

    tip = tip * .2;

    $('.calculation').text("The tip is $" + tip.toFixed(2) + ".");

  });


});

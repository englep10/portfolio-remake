$(document).ready(function() {
  console.log( 'Jquery is working' );

  $( ".fte-first-panel" ).hide(0);
  $( ".fte-second-panel" ).hide(0);

  $( ".purpose" ).hide(0);

  $(document).on('click', '#FTE', function(){
    console.log("click is working FTE")
    console.log($(this))
    $('.purpose').val('');
    var val = $(this).text();
    console.log(val);
    var input = $( ".purpose" );
    input.val( input.val() + val );

  });


  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });



});

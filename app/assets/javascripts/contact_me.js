$(document).ready(function() {
  console.log( 'Jquery is working' );

  $( ".fte-first-panel" ).hide(0);
  $( ".fte-second-panel" ).hide(0);

  $( ".purpose" ).hide(0);

  $(document).on('click', '.first-panel', function(){
    console.log("click is working")
    console.log($(this))
    $('.purpose').val('');
    var val = $(this).text();
    console.log(val);
    var input = $( ".purpose" );
    input.val( input.val() + val );

    if (val == ("Full Time Employer")) {
      console.log("FTE is working")
      $( ".fte-first-panel" ).show(0);

    }

  });


  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });



});

var ready;
ready = function() {

  $( ".fte-first-panel" ).hide(0);
  $( ".fte-second-panel" ).hide(0);

};

$(document).ready(ready);
$(document).on('page:load', ready);

$(document).ready(function() {
  console.log( 'Jquery is working' );

  $(document).on('click', '#FTE', function(){
    //function for Full Time Employee
    console.log("click is working FTE")
    var val = $(this).attr('id');
    console.log( val );
    $('.purpose').val('');
    var input = $( ".purpose" );
    input.val( input.val() + val );

    if ( $(".purpose").val() == "FTE" ) {
      console.log("conditional is working")
      $(".first-question").delay(700).fadeOut(1200, "linear", function() {
        $( ".fte-first-panel" ).fadeIn(800);
        $("#contact_request_name").focus();

        //Previous button Function
        $(document).on('click', '#previous-fte', function(){
          $(".fte-first-panel").delay(700).fadeOut(1200, "linear", function() {
            $( ".first-question" ).fadeIn(800);
            $('.purpose').val('');
          });
        });


        $(document).on('click', '#next-fte', function(){
          $(".fte-first-panel").delay(700).fadeOut(1200, "linear", function() {
            $( ".fte-second-panel" ).fadeIn(800);
            $("#contact_request_role").focus();
          });
        });



      });
    };
  });

  $(document).on('click', '#FO', function(){
    console.log("click is working FO")
    var val = $(this).attr('id');
    console.log( val );
    $('.purpose').val('');
    var input = $( ".purpose" );
    input.val( input.val() + val );

    if ( $(".purpose").val() == "FO" ) {
      console.log("conditional is working")
    };

  });

  $(document).on('click', '#REC', function(){
    console.log("click is working REC")
    var val = $(this).attr('id');
    console.log( val );
    $('.purpose').val('');
    var input = $( ".purpose" );
    input.val( input.val() + val );

    if ( $(".purpose").val() == "REC" ) {
      console.log("conditional is working")
    };

  });

  $(document).on('click', '#FRI', function(){
    console.log("click is working FRI")
    var val = $(this).attr('id');
    console.log( val );
    $('.purpose').val('');
    var input = $( ".purpose" );
    input.val( input.val() + val );

    if ( $(".purpose").val() == "FRI" ) {
      console.log("conditional is working")
    };

  });


  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });



});

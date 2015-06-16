$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log(dancer);
    $('body').append(dancer.$node);
  });

  // making a square dancer
  $(".addSquareButton").on("click", function(event) {
    var squareMakerFunctionName = $(this).data("square-maker-function-name")
    var squareDancerMakerFunction = window[squareMakerFunctionName]

    var squareDancer = new squareDancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log(squareDancer);
    $('body').append(squareDancer.$node);

  });

  // Van Dam
  $(".addVanDamButton").on("click", function(event) {
    var vanDamMakerFunctionName = $(this).data("vandam-maker-function-name")
    var vanDamDancerMakerFunction = window[vanDamMakerFunctionName]
    var vanDamDancer = new vanDamDancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(vanDamDancer.$node);

  });

}); // document ready e

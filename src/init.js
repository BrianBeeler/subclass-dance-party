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
      $("body").height() * Math.random() -200,
      $("body").width() * Math.random() -150,
      Math.random() * 1000
    );
    $('body').append(vanDamDancer.$node);

  });

  // llama
  $(".addLlamaButton").on("click", function(event) {
    var llamaMakerFunctionName = $(this).data("llama-maker-function-name")
    var llamaDancerMakerFunction = window[llamaMakerFunctionName]
    var llamaDancer = new llamaDancerMakerFunction(
      $("body").height() * Math.random() -200,
      $("body").width() * Math.random() -150,
      Math.random() * 1000
    );
    $('body').append(llamaDancer.$node);

  });

  $(".addCatButton").on("click", function(event) {
    var CatMakerFunctionName = $(this).data("cat-maker-function-name")
    var CatDancerMakerFunction = window[CatMakerFunctionName]
    var CatDancer = new CatDancerMakerFunction(
      $("body").height() * Math.random() -200,
      $("body").width() * Math.random() -150,
      Math.random() * 1000
    );
    $('body').append(CatDancer.$node);

  });
// line up
  //make a new lineup button , on click
  // jquery to target all .dancer classes
  // set position left to 0
  $(".lineup").on("click", function(event) {
    $(".dancer").css({"left": "0"})
  })



}); // document ready e

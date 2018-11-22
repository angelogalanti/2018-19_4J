/*
  Problem description:
    3. Disable right click menu in html page using jquery. 
  Source:
    https://www.w3resource.com/jquery-exercises/part1/index.php
*/

$(document).ready(function() {
  $('#option').click(function() {
    var option = $( this ).text();

    if(option == "Hide") {
      $('#menu').hide('slow');
      $('#option').html('Show');
    } else {
      $('#menu').show('slow');
      $('#option').html('Hide');
    }
  });
});
/*
  Problem description:
    2. Scroll to the top of the page with jQuery.
  Source:
    https://www.w3resource.com/jquery-exercises/part1/index.php
*/

$(document).ready(function() {
  $('#scroll').click(function() {
    $("html, body").animate({scrollTop: 0}, "slow");
  });
});
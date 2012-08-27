$('document').ready(function() {

  $people = $('.person');
  $people.click(function() {
    console.log($(this).html());
  });

  // Handlers for submitting the form
  $('#addButton').click(function() {
    console.log('clicked');
    $('#inputForm').attr('action', '/addedname')
    $('#inputForm').attr('method', 'POST');
    $('#inputForm').submit();
  });

  $('#queryButton').click(function() {
    console.log('clicked');
    $('#inputForm').attr('action', '/queried')
    $('#inputForm').attr('method', 'GET');
    $('#inputForm').submit();
  });

  $('#removeButton').click(function() {
    console.log('clicked');
    $('#inputForm').attr('action', '/removed')
    $('#inputForm').attr('method', 'POST');
    $('#inputForm').submit();
  });

});

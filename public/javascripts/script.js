$('document').ready(function()
{
	
	/*
	$.post('http://localhost:27080/_connect','server=localhost:27017',function(returned)
	{
		alert('connect returned: ' + returned)
	});
	
	var found = $.get('localhost:27080/test/admin/_find','',function(returned)
	{
		alert('find returned: ' + returned);
	});
	
	alert(found);
	*/
	/*
	var getNewPerson = function(inFirstName, inLastName)
	{
		var person = 
		{
			"firstName" : inFirstName,
			"lastName" : inLastName
		};
		return person;
	}
	
	var getPersonDiv = function(inPerson)
	{ 
		$toReturn = $('<div/>').addClass('person');
		$toReturn.html("First Name: " + inPerson.firstName + "<br/>Last Name: " + inPerson.lastName);
		return $toReturn;
	}
	
	var person = getNewPerson("Sam", "Kohn");
	
	
	$main.append(getPersonDiv(person));
	for(var i=0; i < 5; i++)
	{
		$main.append($('<span class="button">Click Me!</span>'));
	}
	$('.button').click(function() {alert("Clicked!")});
	
	*/
	$main = $('#main');
	
	$people = $('.person');
	$people.click(function() {
	  console.log($(this).html());
	});

/*
	$('#addButton').click(function() {
	    console.log('clicked');
	    var data = {
	    	name : $('#nameInput').val(),
		major : $('#majorInput').val(),
	    };
	    $.post('/addedname', data, function() { 
		console.log('added ' + data.name);
	    });
	    
	});
*/

/*
	$main.click(function()
	{
		if(confirm("Change text?"))
		{
			$main.html("Changed Text!");
		}
		else
		{
			alert("Did not change text!");
		}
	});
	
/*
	for(var i=0; i < 10; i++)
	{
	$main.append($('<div/>').addClass('small'));
	$('.small').html("This is a small div ... but not any more!");
	}
*/
});

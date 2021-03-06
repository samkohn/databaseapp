// Set up the mongoose / mongodb stuff

var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connect('mongodb://nodejitsu:8f1d7e1f0ba827ec9a72844c928ef6db@alex.mongohq.com:10041/nodejitsudb231811556965');
var Schema = mongoose.Schema;

var Person = new Schema( {
  name : String,
  major : String,
});

Person.pre('remove', function(next) {
  console.log('removing: ' + this);
  next();
});

var PersonModel = mongoose.model('Person', Person);



/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};

exports.about = function(req, res) {
  res.render('about', { title : 'About' });
};

exports.addedname = function(req, res) {

  var dude = new PersonModel();
  dude.name = req.param('name');
  dude.major = req.param('major');
  dude.save( function(err) {
    if (err) { throw err; }
    console.log('Saved dude named ' + dude.name);
    res.render('addedname', { title : 'Name!', person : dude});
;
  });
  
  /*
  PersonModel.findOne({ name : person.name }, 'name', function (err, dude) {
    if (err) { throw err; }
    console.log('Found dude named ' + dude.name);
    res.render('addedname', { title : 'Name!', person : dude });
  });
  */

};

exports.queried = function(req, res) {

  var callback = function(err, people) {
    if (err) { throw err; }
    /*
    for (var i = 0; i < people.length; i++)
    {
      var dude = people[i];
      console.log('dude = ' + dude);
      console.log('Found dude named ' + dude.name);
    }
    */
    //console.log('people.length = ' + people.length);
    res.render('queried', { title : 'Results', peopleArray : people } );
  };
  var hisName = req.param('name');
  var hisMajor = req.param('major');

  if(hisName && hisMajor) {
    PersonModel.find( {
      name : hisName,
      major : hisMajor,
    }, callback);
  }
  else if(hisName) {
    PersonModel.find( {
      name : hisName,
    }, callback);
  }
  else if(hisMajor) {
    PersonModel.find( {
      major : hisMajor,
    }, callback);
  }
  else {
    PersonModel.find( {}, callback );
  }
    
};

exports.removed = function(req, res) {
  
  var hisName = req.param('name');
  var hisMajor = req.param('major');
  console.log('name = ' + hisName);
  console.log('major = ' + hisMajor);

  var callback = function (err, people) {
    for(var i = 0; i < people.length; i++)
    {
      console.log('removing ' + people[i]);
      people[i].remove();
    }
    res.render('removed', { title : 'Results', removedArray : people } );
  };

  if(hisName && hisMajor) {
    PersonModel.find( {
      name : hisName,
      major : hisMajor,
    }, callback);
  }
  else if(hisName) {
    PersonModel.find( {
      name : hisName,
    }, callback);
  }
  else if(hisMajor) {
    PersonModel.find( {
      major : hisMajor,
    }, callback);
  }
  // Behavior for blank remove?
  /*
  else {
    PersonModel.find( {}, callback );
  }
  */
  
}

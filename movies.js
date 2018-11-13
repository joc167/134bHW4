
//var app = new function() {
//  var mot = document.getElementById('movtitle');
//  var moy = document.getElementById('movyear');
//  var mor = document.getElementById('movrating');
  var movietitle = ['Star Wars', 'The Empire Strikes Back', 'The Revenge of the Jedi', 'The Matrix'];
  var movieyear = ['1977', '1980', '1983', '2000'];
  var movierating = ['PG','PG', 'PG', 'PG'];

  function countF(datacount) {
    var countdata = document.getElementById('counter');
    var name = 'movie';
    var year = 'year';
    var rating = 'rating';

    if (datacount) {
      if (datacount > 0) {
  countdata.innerHTML = '';
      }
    }
    else{
      countdata.innerHTML = 'No current movies listed';
    }
  };

   function displayMovies(){
    var data = '';
    var mlists = document.getElementById('movieList');
  //  var movname = document.getElementById('movietitle').value;
  //  var movyear = document.getElementById('movieyear').value;
  //  var movrating = document.getElementById('movierating').value;

    if (movietitle.length > 0) {
      for (i = 0; i < movietitle.length; i++) {
        data += '<li>';
        data +=  movietitle[i];
       data +=  " (" + movieyear[i] + ") " + ' ';
       data +=  "-Rated: " + movierating[i] + ' ';
        data += '<button onclick="editMovie(' + i + ')">Edit</button>';
        data += '<button onclick="deleteMovie(' + i + ')">Delete</button>';
        data +=  '</li>';
      }
    }
    countF(movietitle.length);
    var mlists = document.getElementById('movieList');
    return mlists.innerHTML = data;
  };

    var adButton = document.getElementById('adB');
    var adialog = document.getElementById('adDialog');
    adButton.addEventListener('click', function() {
      adialog.show();
       adialog.returnValue;
    });

      var canButton = document.getElementById('canButton');
      canButton.addEventListener('click', function(){
        adialog.close();
      });

      var saveButton = document.getElementById('addsave');

   function addMovie() {
    var addName = document.getElementById('add-name');
    var addYear = document.getElementById('add-year');
    var addRating = document.getElementById('add-rating');
    // Get the value
    var movie = addName.value;
    var year = addYear.value;
    var rating = addRating.value;

    saveButton.addEventListener('click', function(){
    if (movie && year && rating) {
      // Add the new value
      movietitle.push(movie.trim());
      movieyear.push(year.trim());
      movierating.push(rating.trim());
      // Reset input value
      addName.value = '';
      addYear.value = '';
      addRating.value = '';
//      en.value = '';
      // Dislay the new list
      displayMovies();
   }
      // });
  });
};
/*
  var edButton = document.getElementById('edB');
var edialog = document.getElementById('editdialog');
edButton.addEventListener('click', function() {
  edialog.showModal();
   edialog.returnValue;
});*/

  //var canButton = document.getElementById('canButton');
  //canButton.addEventListener('click', function(){
  //  adialog.close();
  //});

  function editMovie(item) {
    var editName = document.getElementById('edit-name');
    var editYear = document.getElementById('edit-year');
    var editRating = document.getElementById('edit-rating');
    // Display value in the field
    editName.value = movietitle[item];
    editYear.value = movieyear[item];
    editRating.value = movierating[item];
    // Display fields
    document.getElementById('editdialog').showModal();

    document.getElementById('editdialog').onsubmit = function() {
      // Get value
      var movie = editName.value;
      var year = editYear.value;
      var rating = editRating.value;
      if (movie && year && rating) {
        // Edit value
        movietitle.splice(item, 1, movie.trim());
        movieyear.splice(item, 1, year.trim());
        movierating.splice(item, 1, rating.trim());
        // Display the new list
        displayMovies();
        // Hide fields
    //    CloseInput();
      }
    }
  };

var ddialog = document.getElementById("deletedialog");
var dButton =  document.getElementById('delButton');

   function deleteMovie(item){
    // Display value in the field
      ddialog.showModal();
    // Delete the current row

    dButton.addEventListener('click', function() {

    movietitle.splice(item, 1);
    movieyear.splice(item,1);
    movierating.splice(item,1);
    // Display the new list
    displayMovies();

});
}

window.onload = function(){
displayMovies();
}
//}

/*function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}*/

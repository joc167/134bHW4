
//var app = new function() {
//  var mot = document.getElementById('movtitle');
//  var moy = document.getElementById('movyear');
//  var mor = document.getElementById('movrating');

  //create three arrays for movie title, year, and ratings
  var movietitle = ['Star Wars', 'The Empire Strikes Back', 'The Revenge of the Jedi', 'The Matrix'];
  var movieyear = ['1977', '1980', '1983', '2000'];
  var movierating = ['PG','PG', 'PG', 'PG'];

//SET the arrays in local storage to movietitle, movieyear, and movie rating
localStorage.setItem("movietitle", JSON.stringify(null));
localStorage.setItem("movieyear", JSON.stringify(null));
localStorage.setItem("movierating", JSON.stringify(null));

  //counter  function to check the number of movies in the list
  function countF(datacount) {

    //declare counter for checking number of movies
    var countdata = document.getElementById('counter');
    var name = 'movie';
    var year = 'year';
    var rating = 'rating';

    //create counter
    if (datacount) {
      //check to see if movie count is greater than 0
      if (datacount > 0) {
        //if count is greater than 0, don't display anything
        countdata.innerHTML = '';
      }
    }
    else{
      //else if there are no movies in the list, show no current movies
      countdata.innerHTML = 'No current movies listed';
    }
}


   function displayMovies(){

     //call the local storage arrays and set them to local vars
    var storedtitle = JSON.parse(localStorage.getItem("movietitle"));
    var storedyear = JSON.parse(localStorage.getItem("movieyear"));
    var storedrating = JSON.parse(localStorage.getItem("movierating"));
    ;
    //if local storage array is null, set to empty array
    if (storedtitle == null)
    {
      storedtitle = [];
    }
    //if local storage array is null, set to empty array
    if (storedyear == null)
    {
      storedyear = [];
    }
    //if local storage array is null, set to empty array
    if (storedrating == null)
    {
      storedrating = [];
    }

    //clear data
    var data = '';
    //local varaible for the movie list in crud.html
    var mlists = document.getElementById('movieList');

    //if there is more than one movie
    if (storedtitle.length > 0) {

        // get the data from the local storage and set them equal to data
      //for loop to loop through all movies in array then update data fields
      for (i = 0; i < storedtitle.length; i++) {
        data += '<li>';
        data +=  storedtitle[i];
       data +=  " (" + storedyear[i] + ") " + ' ';
       data +=  "-Rated: " + storedrating[i] + ' ';
        data += '<button onclick="editMovie(' + i + ')">Edit</button>';
        data += '<button onclick="deleteMovie(' + i + ')">Delete</button>';
        data +=  '</li>';
      }
    }
    //console.log(movietitle.length);
    countF(storedtitle.length);

    //display the data of movielists
    return mlists.innerHTML = data;
  }


    //create button to prompt the user to add in a new movie to the list
    var adButton = document.getElementById('adB');

    //pop up dialog for adding movie fields
    var adialog = document.getElementById('adDialog');

    //on click, pop up dialog
    adButton.addEventListener('click', function() {
      adialog.showModal();
       adialog.returnValue;
    });

      //close the dialog
      var canButton = document.getElementById('cancedButton');
      cancedButton.addEventListener('click', function(){
        adialog.close();
      });

  // function addMovie() {

    //button to prompt users to add movies
    var saveButton = document.getElementById('addsave');

      // function for the add movies button
      saveButton.addEventListener('click', function(){

        //read in movie information from add dialog
      var addName = document.getElementById('add-name');
      var addYear = document.getElementById('add-year');
      var addRating = document.getElementById('add-rating');

      // Get the value of the input fields
      var movie1 = addName.value;
      var year1 = addYear.value;
      var rating1 = addRating.value;

      //purify the movies and the inputfields the user has entered.
      movie= DOMPurify.sanitize(movie1);
      year= DOMPurify.sanitize(year1);
      rating= DOMPurify.sanitize(rating1);
      //if the add movie information has been filled out
    if (movie && year && rating) {

      // Add the new movie to the list
    //  movietitle.push(movie.trim());
    //  movieyear.push(year.trim());
    //  movierating.push(rating.trim());

      //SET the arrays in local storage to movietitle, movieyear, and movie rating
      var storedtitle = JSON.parse(localStorage.getItem("movietitle"));
      var storedyear = JSON.parse(localStorage.getItem("movieyear"));
      var storedrating = JSON.parse(localStorage.getItem("movierating"));
      //if arrays are set to null then create an empty array
      if (storedtitle == null)
      {
        storedtitle = [];
      }
      //if arrays are set to null then create an empty array
      if (storedyear == null)
      {
        storedyear = [];
      }
      //if arrays are set to null then create an empty array
      if (storedrating == null)
      {
        storedrating = [];
      }

      //push new movies to the local variable that will be set into the local storage
      storedtitle.push(movie.trim());
      storedyear.push(year.trim());
      storedrating.push(rating.trim());

      //store the updated array as the local storage array
      localStorage.setItem("movietitle", JSON.stringify(storedtitle));
      localStorage.setItem("movieyear", JSON.stringify(storedyear));
      localStorage.setItem("movierating", JSON.stringify(storedrating));
      // Reset input value
//      addName.value = '';
//      addYear.value = '';
//      addRating.value = '';

      // Dislay the new list
      displayMovies();
   }
      // });
  });

    //global variable for index to be deleted
    var editindex = 0;
    //dialog to prompt the user to edit
    var edialog = document.getElementById("editdialog");
    // close edit dialg button
    var closeedit = document.getElementById("closeEdit");

      closeedit.addEventListener('click',function() {
      edialog.close();
    });
    //button to execute edit movie
    var eButton =  document.getElementById("editsave");
    eButton.addEventListener('click', function() {
      //reads in movie input information from dialog input
      var editName1 = document.getElementById('edit-name');
      var editYear1 = document.getElementById('edit-year');
      var editRating1 = document.getElementById('edit-rating');

      // Display edit movie fields with current movie information

    //  editName.value = movietitle[item];
    //  editYear.value = movieyear[item];
    //  editRating.value = movierating[item];

      var movie1 = editName1.value;
      var year1 = editYear1.value;
      var rating1 = editRating1.value;

      //purify the value of the fields the use inputted
      movie= DOMPurify.sanitize(movie1);
      year= DOMPurify.sanitize(year1);
      rating= DOMPurify.sanitize(rating1);
      //if movie information fields are filled out
      if (movie && year && rating) {
        // Edit value of current movie

        //retrieve local storage array into a local variable for this function
        var storedtitle = JSON.parse(localStorage.getItem("movietitle"));
        var storedyear = JSON.parse(localStorage.getItem("movieyear"));
        var storedrating = JSON.parse(localStorage.getItem("movierating"));

        //edit the local array function before updating the local storage array
        storedtitle.splice(editindex, 1, movie.trim());
        storedyear.splice(editindex, 1, year.trim());
        storedrating.splice(editindex, 1, rating.trim());

        //update the local storage array with the newly updated array
        localStorage.setItem("movietitle", JSON.stringify(storedtitle));
        localStorage.setItem("movieyear", JSON.stringify(storedyear));
        localStorage.setItem("movierating", JSON.stringify(storedrating));
        // Display the new list
      }
        displayMovies();
        // Hide fields
    //    CloseInput();
  });
      //edit movie function
      function editMovie(item) {
        editindex = item;
        edialog.showModal();

    //button that executes the edit function
  //  document.getElementById('editdialog').onsubmit = function() {
      // Get value of the edited movie fields from dialog
  }

//dialog to prompt the user to delete
var ddialog = document.getElementById("deletedialog");

//button to execute delete movie
var dButton =  document.getElementById('delButton');

var index = 0;
dButton.addEventListener('click', function() {

  //retrieve the local storage array
  var storedtitle = JSON.parse(localStorage.getItem("movietitle"));
  var storedyear = JSON.parse(localStorage.getItem("movieyear"));
  var storedrating = JSON.parse(localStorage.getItem("movierating"));

//movietitle.splice(index, 1);
//movieyear.splice(index, 1);
//movierating.splice(index, 1);

//remove movie from the local array that will be set to the local storage array
storedtitle.splice(index, 1);
storedyear.splice(index, 1);
storedrating.splice(index, 1);

//store the local array into the local storage array
localStorage.setItem("movietitle", JSON.stringify(storedtitle));
localStorage.setItem("movieyear", JSON.stringify(storedyear));
localStorage.setItem("movierating", JSON.stringify(storedrating));

  //display the list of movies
    displayMovies();

});

    //delete function to be called
   function deleteMovie(item){

     //set global variable index to current item, index will be called by delete
     index = item;
    // Display value in the field
      ddialog.showModal();
    // Delete the current row

    //delete button to the movies

}

//load the function to display movie when page is loaded
window.onload = function(){
displayMovies();
}
//}

/*function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}*/

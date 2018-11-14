(function() {

  //create buttons for alert and alert dialog
  var aButton = document.getElementById('alertButton');
  var alertDialog= document.getElementById('alertDialog');

  //create buttons for confirm, cancel, confirm dialog and output
  var cButton = document.getElementById('confirmButton');
  //create button for opening the confirm dialog
  var confirmDialog = document.getElementById('confirmDialog');
  //create confirm button to confrim and output true
  var confButton = document.getElementById('confButton');
  //create the cancel button to return output false
  var cancButton = document.getElementById('cancButton');
  //create the output box for the output
  var outputBox = document.getElementById("output");

  //create buttons for prompt, confirm, cancel, and dialog
  var pButton = document.getElementById('promptButton')
  var promptDialog = document.getElementById('promptDialog');
  var conButton = document.getElementById('conButton');
  var canButton = document.getElementById('canButton');


//create an onclick to alert users with a modal window
  aButton.addEventListener('click', function() {
    //alert in the window
    alertDialog.showModal();
    //return value
     alertDialog.returnValue;
  });

  //create an onclick button to pop up confirm dialog
  cButton.addEventListener('click',function() {
    //show the confri mdialog window
    confirmDialog.showModal();
    //return value
    confirmDialog.returnValue;
    //when clicked, turn off the output box and output
    document.getElementById("output").style.display="none";
  });

    //create an onclick button for the confirm button to out true if user prompts true
  confButton.addEventListener('click', function() {
    //output true in the output box
    output.innerHTML = " Confirm result : true ";
    //turn off the output box and output when button is clicked
    document.getElementById("output").style.display="inline-block";
  });
  //create a cancel button to prompt false if user click this onclick button
  cancButton.addEventListener('click', function() {
    //output false when clicked
    output.innerHTML = " Confirm result : false ";
    //close previous output and output box
    document.getElementById("output").style.display="inline-block";
  });

  //create a prompt dialog for user to prompt what they need to answer
  pButton.addEventListener('click', function() {
    //create prompt dialog
    promptDialog.showModal();
    //return value
     promptDialog.returnValue;
     //turn off the output box and output previously
     document.getElementById("output").style.display="none";
  });

  //create a confirm to prompt the user input and set it equal to the prompt output
  //use an input field, then output the prompted user inline into a block
  conButton.addEventListener('click', function() {
    var inpField =  document.getElementById('nameId').value;
   var cleaninp = DOMPurify.sanitize(inpField);
  //  document.getElementById("demo").innerHTML = inpField;
  //output the prompt results
    output.innerHTML = " Prompt result : " + cleaninp ;
    //close the previous output
    document.getElementById("output").style.display="inline-block";
  });
  //create a cancel button if user doesn't enter anything in the prompt field
  canButton.addEventListener('click', function() {
    //output that nothing was entered
    output.innerHTML = " Prompt result: User didn't enter anything ";
    //close the previous output
    document.getElementById("output").style.display="inline-block";
  });


})();

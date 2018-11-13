(function() {

  var aButton = document.getElementById('alertButton');
  var alertDialog= document.getElementById('alertDialog');

  var cButton = document.getElementById('confirmButton');
  var confirmDialog = document.getElementById('confirmDialog');
  var confButton = document.getElementById('confButton');
  var cancButton = document.getElementById('cancButton');
  var outputBox = document.getElementById("output");

  var pButton = document.getElementById('promptButton')
  var promptDialog = document.getElementById('promptDialog');
  var conButton = document.getElementById('conButton');
  var canButton = document.getElementById('canButton');



  aButton.addEventListener('click', function() {
    alertDialog.showModal();
     alertDialog.returnValue;
  });

  cButton.addEventListener('click',function() {
    confirmDialog.showModal();
    confirmDialog.returnValue;
    document.getElementById("output").style.display="none";
  });

  confButton.addEventListener('click', function() {
    output.innerHTML = " Confirm result : true ";
    document.getElementById("output").style.display="inline-block";
  });
  cancButton.addEventListener('click', function() {
    output.innerHTML = " Confirm result : false ";
    document.getElementById("output").style.display="inline-block";
  });

  pButton.addEventListener('click', function() {
    promptDialog.showModal();
     promptDialog.returnValue;
     document.getElementById("output").style.display="none";
  });

  conButton.addEventListener('click', function() {
    var inpField =  document.getElementById('nameId').value;
  //  document.getElementById("demo").innerHTML = inpField;
    output.innerHTML = " Prompt result : " + inpField ;
    document.getElementById("output").style.display="inline-block";
  });
  canButton.addEventListener('click', function() {
    output.innerHTML = " Prompt result: User didn't enter anything ";
    document.getElementById("output").style.display="inline-block";
  });


})();

function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#blah')
              .attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
  }
}


////  modal control 



// Get the modals
var modals = document.querySelectorAll(".modal");

// Get the button that opens the modal
var btn = document.querySelectorAll(".prodect-play");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.forEach(element => {
  element.addEventListener("click", function (e) {
    // e.preventDefault();
    // Get Element id 
    var id = element.getAttribute('id');
    // Get the modal
    var modal = document.getElementById("MyModal" + id.replace('btn', ''));
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modals.forEach(element => {
    element.style.display = "none";
  });
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  modals.forEach(element => {
    if (event.target == element) {
      element.style.display = "none";
    }
    });
});
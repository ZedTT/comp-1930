// Get the modal
      var modal = document.getElementById("myModal");
      
      // Get the button that opens the modal
      var signUpButton = document.getElementById("signUp");
      
      
      // When the user clicks on the button, open the modal 
      signUpButton.onclick = function() {
      modal.style.display = "block";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
      if (event.target == modal) {
      modal.style.display = "none";
      }
      }
      
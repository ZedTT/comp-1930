        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                document.getElementById("signedUpButton").style.display = "block";
                document.getElementById("signUpButton").style.display = "none";

                var email_id = user.email;
                document.getElementById("signedUpButton").innerHTML = "Welcome Back " + email_id;
                document.getElementById("logOutButton").innerHTML = "Logout";

            } else {
                // No user is signed in.

                document.getElementById("signedUpButton").style.display = "none";
                document.getElementById("signUpButton").style.display = "block";

                document.getElementById("logOutButton").innerHTML = "Sign-In";
                document.getElementById("signedUpButton").innerHTML = "Sign-Up";

            }
        });

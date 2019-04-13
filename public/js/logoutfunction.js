        function logout() {
            firebase.auth().signOut();
            firebase.auth().onAuthStateChanged(user => {
                if (!user) {
                    window.location =
                        'signInPage.html'; //After successful logout, user will be redirected to signInPage.html
                }
            });
        }

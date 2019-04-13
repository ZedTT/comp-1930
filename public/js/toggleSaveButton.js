function favFunc(event) {
            if (!$(event.target).hasClass('fav-btn-faved')) {
                $(event.target).addClass('fav-btn-animating')

                setTimeout(function () {
                    $(event.target).removeClass('fav-btn-animating').addClass('fav-btn-faved');
                }, 1000);
            } else {
                    $(event.target).removeClass('fav-btn-faved');
            }

            var target = event.target;
            var uid = firebase.auth().currentUser.uid;
            console.log(firebase.auth().currentUser.uid);
            firebase.database().ref("users/" + uid + "/favorites").update({
                "fav":"target"
            });

            console.log(event.target);
        }

        function testFunc() {
            $('.fav-btn').toggleClass('fav-btn-animating');
        };
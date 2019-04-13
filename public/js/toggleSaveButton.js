function favFunc(event) {
    if (!$(event.target).hasClass('fav-btn-faved')) {
        $(event.target).addClass('fav-btn-animating')

        setTimeout(function () {
            $(event.target).removeClass('fav-btn-animating').addClass('fav-btn-faved');
        }, 1000);
    } else {
        $(event.target).removeClass('fav-btn-faved');


        setTimeout(function () {
            $(event.target).removeClass('fav-btn-reverse-animating').removeClass('fav-btn-faved');
        }, 1000);
    }

    var target = event.target;
    var uid = firebase.auth().currentUser.uid;
    console.log(firebase.auth().currentUser.uid);
    firebase.database().ref("users/" + uid + "/favorites").update({
        "fav": "target" // TODO: Add to a list in the database to keep track of favorited listings
    });

    console.log(event.target); // Will also need to check which listings are favorited on page load.
}

function testFunc() {
    $('.fav-btn').toggleClass('fav-btn-animating');
};
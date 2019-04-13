        // Read
        var output = document.getElementById("toyCount");
        var dbRef = firebase.database().ref().child("Counter");
        dbRef.on("value", function (snap) {
            output.innerText = snap.val();
        });

        var dbref = firebase.database().ref("/");
        var counterRef = dbref.child("Counter");
        var count;
        $('#listingsContainer').click(function () {
            counterRef.once("value", function (snap) {
                count = snap.val();
            }).then(dbref.update({
                "Counter": count + 1
            }));

        })

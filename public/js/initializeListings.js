// An array of all the listings on the page
var listings = document.getElementsByClassName("toyListing");
// A locator for the container that holds the listings
var listingsContainer = document.getElementById("listingsContainer");

// this function adds a single listing to the page
// the parameter snap is a snaphot of the database
// the snap in this case actually only contains a snapshot of a SINGLE toy
// this function is called by the filter function
function createListing(snap) {

    // The key of the toy, used only as a back up if the name field is missing
    var thisToy = snap.key;
    // Grabbbing values from the snap
    var nameVal = snap.child("Name").val();
    var priceVal = snap.child("Price").val();
    var ageMaxVal = snap.child("Age_Max").val();
    var ageMinVal = snap.child("Age_Min").val();
    var picturePath = snap.child("Picture").val();
    var descriptionVal = snap.child("Description").val();

    // Create the html that will contain out listing and all it's information
    var thisListing = elm("div", listingsContainer, "", "toyListing ageOk priceOk searchOk");
    var title = elm("div", thisListing, "", "listingTitle");
    var price = elm("div", thisListing, "", "listingPrice");
    var ageRange = elm("div", thisListing, "", "listingAgeRange");
    var description = elm("div", thisListing, "", "description");

    // create the picture for the listing
    var picture = $('<img/>', {
        class: 'listingPicture',
        alt: 'picture not available',
        //can get rid of .jpg if we add jpg to all files in database
        src: "Pictures/" + picturePath + '.jpg',
    }).appendTo(thisListing);

    // check that each value exists before adding it
    // if the value is null, display an error instead
    if (nameVal) {
        title.innerText = nameVal
    } else {
        title.innerText = "Error: " + thisToy
    }

    if (priceVal || priceVal == 0) {
        price.innerText = "Price: $" + priceVal
    } else {
        price.innerText = "Error: no pricing data"
    }

    if (!!ageMinVal.toString() && !!ageMaxVal.toString()) {
        ageRange.innerHTML = "Age Range: " + ageMinVal + "-" + ageMaxVal;
    } else {
        ageRange.innerHTML = "Age range not available";
    }

    if (descriptionVal) {
        description.innerHTML = "Description: <br>" + descriptionVal;
    } else {
        description.innerHTML =
            "Description: <br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
    }

    console.log(picturePath);

    var $favContainer = $("<div/>", {
        class: "fav-btn-container"
    }).html("").appendTo(title).css({
        display: "inline-block",
        height: '12pt',
        float: 'right',
    });

    var star = $("<button/>", {
        class: "fav-btn"
    }).html("").appendTo($favContainer).css({
        border: 0,
        outline: 0
    });

};

(function initializeListings() {
    // this is the reference to our datadase, specifically the toys
    dbRef = firebase.database().ref().child("Toys");
    // this runs once whenever initializeListings is called and grabs the data from the database
    dbRef.once('value', function (snapshot) {
        listingsContainer.innerHTML = "";
        // a loop for each toy
        snapshot.forEach(function (snap) {
            createListing(snap);
        });
    });
})();
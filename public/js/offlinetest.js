// For testing offline only
// If the browser is offline, creates test listings to help with development
// This code should be removed before production, but theoretically it would never be shown unless firebase is down and our website is not
if (!navigator.onLine) {
    for (i = 0; i < 5; i++) {
        var thisListing = elm("div", listingsContainer, "", "toyListing");
        var title = elm("div", thisListing, "", "listingTitle");
        title.innerHTML = "You are offline";
        var price = elm("div", thisListing, "", "listingPrice");
        price.innerHTML = "Price: cannot connect";
        var ageRange = elm("div", thisListing, "", "listingAgeRange");
        ageRange.innerHTML = "Age Range: to-firebase";
    }
}
// create the sliders
jQuery(function ($) {
    $('.priceSlider').asRange({
        range: true,
        value: [0, 100],
        format(value) {
            return "$" + value;
        }
    });
});

jQuery(function ($) {
    $('.ageSlider').asRange({
        range: true,
        value: [0, 20],
        format(value) {
            return value;
        }
    });
});

// this script tag contains filters
// slider filters
$('.priceSlider').on('asRange::change', function (e) {
    var price = $('.priceSlider').asRange('val');
    $(".toyListing").filter(function () {
        var listingsPrice = $(this.getElementsByClassName("listingPrice")[0]).text().split(
            ': $')[1];
        if (listingsPrice >= price[0] && listingsPrice <= price[1]) {
            $(this).addClass("priceOk").removeClass("priceNo");
        } else {
            $(this).removeClass("priceOk").addClass("priceNo");
        };
    });
    $(".ageOk.searchOk.priceNo").hide();
    $(".ageOk.searchOk.priceOk").show();
});

$('.ageSlider').on('asRange::change', function (e) {
    var age = $('.ageSlider').asRange('val');
    $(".toyListing").filter(function () {
        var listingsAgeRange = $(this.getElementsByClassName("listingAgeRange")[0]).text()
            .split(
                ': ')[1];
        var listingsMinAge = listingsAgeRange.split('-')[0];
        var listingsMaxAge = listingsAgeRange.split('-')[1];
        if (listingsMinAge <= age[1] && listingsMaxAge >= age[0]) {
            $(this).addClass("ageOk").removeClass("ageNo");
        } else {
            $(this).removeClass("ageOk").addClass("ageNo");
        };
    });
    $(".priceOk.searchOk.ageNo").hide();
    $(".priceOk.searchOk.ageOk").show();
});
// search bar
$(document).ready(function () {
    $(".searchBar").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".priceOk.ageOk").filter(function () {
            // $(this).toggle($(this.getElementsByClassName("listingTitle")[0]).text().split(': ')[1].toLowerCase().indexOf(value) > -1);
            var listingTitle = $(this.getElementsByClassName("listingTitle")[0])
                .text();
            // .split(': ')[1];

            if (listingTitle.toLowerCase().indexOf(value) > -1) {
                $(this).addClass("searchOk").removeClass("searchNo");
            } else {
                $(this).removeClass("searchOk").addClass("searchNo");
            };
        });
        $(".ageOk.priceOk.searchNo").hide();
        $(".ageOk.priceOk.searchOk").show();
    });
});
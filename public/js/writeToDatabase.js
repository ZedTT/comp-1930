var dbref = firebase.database().ref("/");

function getToyName() {
    if ($('#enterName').val().length > 0) {
        return $('#enterName').val();
    } else {
        return "DefaultListingNameError";
    }

};
$('#submitInfo').click(function () {
    dbref.child("Toys/" + getToyName()).update({
        Name: $('#enterName').val(),
        Age_Max: $('#enterMax').val(),
        Age_Min: $('#enterMin').val(),
        Price: $('#enterPrice').val(),
        Description: $('#enterDescription').val()
    });
})
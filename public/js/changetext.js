var infoArray = [
    "<b>90%</b> of all toys on the market are made of plastic, and barely any is being recycled.</p>" +
    "<p>Donate Today.",
    "In 2014, Americans generated about 33 million tons of plastic. The year before, only" +
    "<b> 9.5 </b>" + "percent of plastics were recycled.",
    "About 8 million tonnes of plastic enters the sea every year. We face a future with more plastic than fish by 2050.",
    "Small pieces of plastic are eaten by fish, turtles and seabirds. Animals and birds can also become tangled up in plastic debris, leading to death",
    "Global plastics consumption is predicted to grow dramatically.</p>" + "<p>Please reuse!"
];

// Keeps track of where we are in the loop
var changeTextI = 0;

function changeText2() {
    // identify our target div and set a delay
    $("#message").delay(5500).animate({
        // Fade out
        opacity: 0
        // Then...
    }, function () {
        // display the next piece of text from the array in the div
        $(this).html(
            "<p>" + infoArray[changeTextI] + "</p>").animate({
            // Fade back in with the new text
            opacity: 1
        }, function () {
            // If we still have more text to loop through,
            // add one to our variable and start again.
            // Else restart at 0 then start again.
            if (changeTextI < infoArray.length - 1) {
                changeTextI++;
            } else {
                changeTextI = 0;
            }
            changeText2();
        });
    });
}
changeText2();
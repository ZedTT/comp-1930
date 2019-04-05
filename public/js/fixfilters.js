// make the filters move along with us as we scroll
// avoids "position: fixed;"

// When we scroll, call scroll function (below)
$(() => {
    window.onscroll = () => {
        scrollFunction();
    };

    function scrollFunction() {
        // get chrome and edge to play along nicely with each other
        var scrollVal = Math.max($('html, body').scrollTop(), ($('body').scrollTop()));

        // transform the filters down by the scroll value.
        $('#filtersContainer').css({
            transform: 'translate(0, ' + scrollVal + 'px)',
        })

        // console.log(scrollVal);

    };

});
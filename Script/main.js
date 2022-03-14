function changeStarColor(ratingArg) {
    let rating = ratingArg;
    for (let i = 1; i <= rating; i++) {
        $(`.st-${i}`).attr("id", "hover");
    }
    for (let i = rating + 1; i <= 5; i++) {
        $(`.st-${i}`).attr("id", "unselected");
    }
    $(".autoRating > span").html(rating);
}

let selectedRating = 0;

$("i").hover(function () {
    let starClass = parseInt($(this).attr("class").split("st-")[1]);
    changeStarColor(starClass);
}, function () {
    if (selectedRating == 0) {
        changeStarColor(0);
        $(".autoRating > span").html("0");
    } else {
        changeStarColor(selectedRating);
    }
});

$("i").click(function () {
    let starClass = parseInt($(this).attr("class").split("st-")[1]);
    changeStarColor(starClass);
    selectedRating = starClass;
});
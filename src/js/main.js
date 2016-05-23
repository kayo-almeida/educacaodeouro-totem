$(function () {

    if(typeof(Storage) === "undefined") {
        alert("Esse navegador nao pode rodar esse sistema. Desculpe.");
    }

    var timeOut;

    // === CLEAR
    // localStorage.removeItem("checks");
    // localStorage.removeItem("likes");
    // localStorage.removeItem("dislikes");
    // return false;

    // === Debug
    // console.log(localStorage.getItem("checks"));
    // console.log(localStorage.getItem("likes"));
    // console.log(localStorage.getItem("dislikes"));
    // return false;

    if( !localStorage.getItem("checks") )
        localStorage.setItem("checks", 0);
    if( !localStorage.getItem("likes") )
        localStorage.setItem("likes", 0);
    if( !localStorage.getItem("dislikes") )
        localStorage.setItem("dislikes", 0);

    updateCount();

    $(document).on("click", "#check-in", function (e) {
        e.preventDefault();
        checkIn();
    });

    $(document).on("click", "#like", function (e) {
        e.preventDefault();
        like();
    });

    $(document).on("click", "#dislike", function (e) {
        e.preventDefault();
        dislike();
    });

    function checkIn() {
        clearTimeout(timeOut);
        $("#check-container").addClass("hidden");
        $("#actions-container").removeClass("hidden");

        var checks = parseInt(localStorage.getItem("checks"));
        localStorage.setItem("checks", checks + 1);

        updateCount();

        timeOut = setTimeout(function () {
            clearTimeout(timeOut);
            $("#actions-container").addClass("hidden");
            $("#check-container").removeClass("hidden");
            thanks();
        }, 8000);
    }

    function like() {
        clearTimeout(timeOut);
        $("#actions-container").addClass("hidden");
        $("#check-container").removeClass("hidden");

        var likes = parseInt(localStorage.getItem("likes"));
        localStorage.setItem("likes", likes + 1);

        updateCount();
        thanks();
    }

    function dislike() {
        clearTimeout(timeOut);
        $("#actions-container").addClass("hidden");
        $("#check-container").removeClass("hidden");

        var dislikes = parseInt(localStorage.getItem("dislikes"));
        localStorage.setItem("dislikes", dislikes + 1);

        updateCount();
        thanks();
    }
    
    function updateCount() {
        $("#count-checks").text(localStorage.getItem("checks"));
        $("#count-likes").text(localStorage.getItem("likes"));
        $("#count-dislikes").text(localStorage.getItem("dislikes"));
    }

    function thanks() {
        $(".thanks-text").removeClass("opacity0").addClass("opacity1");
        setTimeout(function () {
            $(".thanks-text").removeClass("opacity1").addClass("opacity0");
        }, 1000);
    }

});
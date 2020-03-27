function toNews() {
    location.href = "./news.html";
}

function toSNS() {
    location.href = "./sns.html";
}

function toFacebook() {
    location.href = "./facebook.html";
}

function toSet1P3() {
    location.href = "./set1_visual_p3.html";
}

$('#moveToArticle').on('click', function () {
    location.href = "./article.html";
})

/////////////////////////////////////////////

$('#pause').on('click', function () {
    $("#icon_off").addClass("active");
})

$('#p1SecondStart').on('click', function () {
    startVibrations();
    startAnimation();
})

$('#p1Start').on('click', function () {
    startVibrations();
    playAudio();
    startAnimation();
})

var x = document.getElementById("myAudio");

function pauseAudio() {
    x.pause();
}

function playAudio() {
    x.play();
}

function startVibrations() {
    navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);
}

function startVibrations10s() {
    navigator.vibrate([500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500]);
}

function stopVibrations() {
    navigator.vibrate(0);
}

function startAnimation() {
    $('.p1radio').css('display', 'block');
}

/////////////////////////////////////////////

var timeleft = 9;
var downloadTimer = setInterval(function () {
    document.getElementById("countdown").innerHTML = timeleft;
    timeleft -= 1;
    if (timeleft < 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "0"
    }
}, 1000);

/////////////////////////////////////////////

$("#tag2").change(function () {
    if ($(this).is(":checked"))
        $(".tag2").addClass("active");
    else
        $(".tag2").removeClass("active");
});

/////////////////////////////////////////////

$("#korean").change(function () {
    if ($(this).is(":checked"))
        location.href = "./set3_language_koreanP2.html";
});
$("#spanish").change(function () {
    if ($(this).is(":checked"))
        location.href = "./set3_language_spanishP2.html";
});

/////////////////////////////////////////////

$('#set2yes').on('click', function () {
    $("#set2container").addClass("moveLeft");
    $("#set2wrapper").addClass("p2");
    startVibrations10s();
    startTimer();
    changeTitle();
})

function changeTitle() {
    $("h1.title.change").text("P2: Earthquake Approaching");
}

function startTimer() {
    var timeleft = 9;
    var downloadTimer = setInterval(function () {
        document.getElementById("set2countdown").innerHTML = timeleft;
        timeleft -= 1;
        if (timeleft < 0) {
            clearInterval(downloadTimer);
            document.getElementById("set2countdown").innerHTML = "0"
        }
    }, 1000);
}

/////////////////////////////////////////////

var ckbox = $('#set2ndArea');

function changeLink() {
    if (ckbox.prop('checked')) {
        $("#linkTosetAreaP5").attr({
            "href": "./p5.html",
        });
    } else {
        $("#linkTosetAreaP5").attr({
            "href": "./set4_area_p5.html",
        });
    }
}

/////////////////////////////////////////////

$(function () {
    $("input#instaID").focus(function () {
        this.value = 'kbsdemo';
    });
});

function moveToInstaFeeds() {
    if ($('input#instaID').val().length === 0) {
        alert('Add your Instagram ID.');
    } else {
        $("#linkTosetShare").attr({
            "href": "./set5_share_sns.html",
        });
    }
}

/////////////////////////////////////////////

$("div.wrapper").on("swiperight", swiperightHandler);

function swiperightHandler(event) {
    window.history.back();
}
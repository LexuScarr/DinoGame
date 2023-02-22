const dino = document.querySelector(".dino");
const cactus = document.getElementById("cactus");
var scoreText = $(".score")[0];
var score = 0;
var die = false;

setInterval(function () {
  var width = document.documentElement.clientWidth;
  var posX = $(".dino").offset().left;
  var posY = $(".dino").offset().top;

  for (let i = 0; i < $(".cactus").length; i++) {
    var cactusX = $(".cactus").eq(i).offset().left;
    var cactusY = $(".cactus").eq(i).offset().top;
    if (cactusX <= -200) {
      $(".cactus").eq(i).remove();
      score += 10; // Increment score when a cactus is removed
    } else {
      $(".cactus")
        .eq(i)
        .css("right", parseInt($(".cactus").eq(i).css("right")) + 2 + "px");
    }
    if (posX >= cactusX - 90 && posX <= cactusX + 90 && posY >= cactusY - 45) {
      $(".dino").eq(0).remove();
      die = true;
    }
  }

  if (die) {
    $("#restart").show();
  }
  scoreText.innerHTML = "Score: " + score;
}, 1);

setInterval(function () {
  $(".cactusArea")[0].innerHTML += '<div class="cactus"></div>';
}, 1500);

var can = true;
$(document).keyup(function (e) {
  if (e.which == 32 && can) {
    $(".dino")[0].classList.add("jump");
    can = false;
    setTimeout(function () {
      $(".dino")[0].classList.remove("jump");
      can = true;
    }, 700);
  }
});

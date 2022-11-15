var button = document.getElementById("button");
// let view = document.getElementById("view")
// let autoclick = document.getElementById("autoclick");
let autoclicker = 10;
let cpc = 0;



let cookieAmount = 0;
let clicks = 1;
let upgradeclicker = 20

button.onclick = resetScore;

function addcookie() {
  cookieAmount += clicks;
  document.getElementById("cookietxt").innerHTML = cookieAmount + " flappy";
}

function upgradeClicks() {
  if (cookieAmount >= upgradeclicker) {
    cookieAmount -= upgradeclicker;
    upgradeclicker *= 2;
    cookietxt.innerHTML = cookieAmount + " flappy";
    document.getElementById("upclicker").innerHTML = "Upgrade clicks (" + upgradeclicker + " flappy)";
    clicks += 1;
  } else {
    alert("click sur le putain de flappy bird!!!")
  }
}

function resetScore() {
  clicks = 0;
  score.innerHTML = clicks;
}

function auto() {
  if (cookieAmount >= autoclicker) {
    cookieAmount -= autoclicker;
    cpc += 1;
    autoclicker *= 2
    document.getElementById("autoclick").innerHTML = "autoclicker ( " + autoclicker + " flappy)";
  setInterval( function () {
      cookieAmount += cpc;
      document.getElementById("cookietxt").innerHTML = cookieAmount + " flappy";
    }, 1000);
}}

  






//     let add_score_auto = function () {
//       score = score + click_increment_auto;
//       view.innerHTML = score;
//     };
//     score = score - price_auto;
//     price_auto = price_auto * 3;
//     setInterval(add_score_auto, 200);
//     click.addEventListener("click", add_score_auto);
//     price_autoclick.value = price_auto;
//   }
// };



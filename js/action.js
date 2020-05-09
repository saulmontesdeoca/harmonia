function randomKey() {
  return 110 * Math.pow(Math.pow(2, 1 / 12), Math.ceil(Math.random() * 15));
}
function activate() {
  Tone.context.creategit();
}

var keyBase = randomKey();

const synth = new Tone.Synth().toMaster();

var div = document.createElement("div");
div.style.height = "100%";
div.style.lineHeight = "0";
div.style.float = "left";
div.style.overflow = "hidden";
div.style.backgroundColor = "white";

var sqPx = window.innerWidth / 30;

var randColorBase = Math.random() * (100 - 1) + 1;
if (randColorBase < 20) randColorBase = 1582206;
else if (randColorBase > 20 && randColorBase < 40) randColorBase = 8110424;
else if (randColorBase > 40 && randColorBase < 60) randColorBase = 6751750;
else if (randColorBase > 60 && randColorBase < 80) randColorBase = 16774532;
else if (randColorBase > 80) randColorBase = 16753920;

for (i = 0; i < window.innerWidth; i += sqPx) {
  for (j = 0; j < window.innerHeight; j += sqPx) {
    var randColorStr =
      "#" + Math.floor(Math.random() * 255 + randColorBase).toString(16);
    var block = document.createElement("div");
    block.style.position = "relative";
    //block.style.border = "1px solid";
    block.style.borderRadius = "0%";
    block.style.display = "inline-block";
    block.style.margin = "0px";
    block.style.padding = "0px";
    block.style.float = "left";
    block.style.width = sqPx + "px";
    block.style.height = sqPx + "px";
    block.style.zIndex = "1";

    if (Math.random() > 0.8) {
      block.style.zIndex = 5;
      block.style.backgroundColor =
        "#" + Math.floor(Math.random() * 255 + randColorBase).toString(16);
      block.addEventListener("mouseover", function () {
        if (this.style.background != "transparent") {
          keyBase = randomKey();
          synth.triggerAttackRelease(
            (((1 / 2) * 4 * keyBase) / 5) * Math.ceil(Math.random() * 6),
            "8n"
          );
        }
        this.style.background = "transparent";
        this.style.zIndex = 1;
      });
    } else {
      block.style.zIndex = 5;
      block.style.backgroundColor = randColorStr;
      block.addEventListener("mouseover", function () {
        if (Tone.context) {
          Tone.context.resume();
        }
        if (this.style.background != "transparent") {
          // random from three octaves of major thirds
          var r = Math.random();
          if (r < 0.33) {
            synth.triggerAttackRelease(
              (((1 / 2) * 4 * keyBase) / 5) * Math.ceil(Math.random() * 6),
              "8n"
            );
          } else if (r > 0.67) {
            synth.triggerAttackRelease(
              (((1 / 2) * 4 * keyBase) / 5) * Math.ceil(Math.random() * 6),
              "8n"
            );
          } else {
            synth.triggerAttackRelease(
              (((1 / 2) * 4 * keyBase) / 5) * Math.ceil(Math.random() * 6),
              "8n"
            );
          }
        }
        this.style.background = "transparent";
        this.style.zIndex = 1;
      });
    }

    div.appendChild(block);
  }
}

document.body.appendChild(div);

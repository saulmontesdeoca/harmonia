var hidden = false;
function action() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById("menu").style.visibility = "hidden";
  } else {
    document.getElementById("menu").style.visibility = "visible";
  }
}
function reset() {
  location.reload();
}
function randomKey() {
  return 110 * Math.pow(Math.pow(2, 1 / 12), Math.ceil(Math.random() * 15));
}
function activate() {}

var keyBase = randomKey();

const synth = new Tone.Synth().toMaster();
const polySynth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
const strings = new Tone.PolySynth(4, Tone.FMSynth).toMaster();
const beat = new Tone.MembraneSynth().toMaster();
polySynth.volume.value = -20;
strings.volume.value = -14;
beat.volume.value = -14;
var randomize;

var div = document.createElement("div");
div.style.height = "100%";
div.style.lineHeight = "0";
div.style.float = "left";
div.style.overflow = "hidden";
// div.style.backgroundColor = "white";

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
          randomize = Math.random();
          if (randomize > 0.9) {
            polySynth.triggerAttackRelease("C4", "8n");
          } else if (randomize > 0.75) {
            polySynth.triggerAttackRelease("D4", "8n");
          } else if (randomize > 0.65) {
            polySynth.triggerAttackRelease("E4", "8n");
          } else if (randomize > 0.4) {
            polySynth.triggerAttackRelease("F4", "8n");
          } else if (randomize > 0.3) {
            polySynth.triggerAttackRelease("G4", "8n");
          } else if (randomize > 0.2) {
            polySynth.triggerAttackRelease("A4", "8n");
          } else if (randomize > 0) {
            polySynth.triggerAttackRelease("B4", "8n");
          }
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
          var r = Math.random();
          randomize = Math.random();
          if (r < 0.33) {
            if (randomize > 0.9) {
              strings.triggerAttackRelease("C4", "8n");
            } else if (randomize > 0.75) {
              strings.triggerAttackRelease("D4", "8n");
            } else if (randomize > 0.65) {
              strings.triggerAttackRelease("E4", "8n");
            } else if (randomize > 0.4) {
              strings.triggerAttackRelease("F4", "8n");
            } else if (randomize > 0.3) {
              strings.triggerAttackRelease("G4", "8n");
            } else if (randomize > 0.2) {
              strings.triggerAttackRelease("A4", "8n");
            } else if (randomize > 0) {
              strings.triggerAttackRelease("B4", "8n");
            }
          } else if (r > 0.67) {
            if (randomize > 0.9) {
              synth.triggerAttackRelease("C4", "8n");
            } else if (randomize > 0.75) {
              synth.triggerAttackRelease("D4", "8n");
            } else if (randomize > 0.65) {
              synth.triggerAttackRelease("E4", "8n");
            } else if (randomize > 0.4) {
              synth.triggerAttackRelease("F4", "8n");
            } else if (randomize > 0.3) {
              synth.triggerAttackRelease("G4", "8n");
            } else if (randomize > 0.2) {
              synth.triggerAttackRelease("A4", "8n");
            } else if (randomize > 0) {
              synth.triggerAttackRelease("B4", "8n");
            }
          } else {
            if (randomize > 0.9) {
              beat.triggerAttackRelease("C4", "8n");
            } else if (randomize > 0.75) {
              beat.triggerAttackRelease("D4", "8n");
            } else if (randomize > 0.65) {
              beat.triggerAttackRelease("E4", "8n");
            } else if (randomize > 0.4) {
              beat.triggerAttackRelease("F4", "8n");
            } else if (randomize > 0.3) {
              beat.triggerAttackRelease("G4", "8n");
            } else if (randomize > 0.2) {
              beat.triggerAttackRelease("A4", "8n");
            } else if (randomize > 0) {
              beat.triggerAttackRelease("B4", "8n");
            }
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

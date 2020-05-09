// let loopBeat;

// function setup() {
//   bassSynth = new Tone.MembraneSynth().toMaste();

//   loopBeat = new Tone.Loop(song, "4n");
//   Tone.Tranposrt.start();
//   loopBeat.start(0);
// }

// function song(time) {
//   bassSynth.triggerAttackRealease("C4", "8n", time);
//   console.log(time);
// }
// //create a synth and connect it to the master output (your speakers)
// const synth = new Tone.Synth().toMaster();

// //play a middle 'C' for the duration of an 8th note
// function note(note) {
//   synth.triggerAttackRelease(note, "8n");
// }

// random note between A2 and A4 (whole steps only)
function randomKey() {
  return 110 * Math.pow(Math.pow(2, 1 / 12), Math.ceil(Math.random() * 15));
}

var keyBase = randomKey();

const synth = new Tone.Synth().toMaster();

var div = document.createElement("div");
div.style.height = "100%";
div.style.lineHeight = "0";
div.style.float = "left";
div.style.overflow = "hidden";
div.style.backgroundColor = "#333";

var sqPx = window.innerWidth / 48;

var randColorBase = Math.random() * 16777215;
if (randColorBase < 2236962) randColorBase = 2236962;
else if (randColorBase > 14540253) randColorBase = 14540253;

for (i = 0; i < window.innerWidth; i += sqPx) {
  for (j = 0; j < window.innerHeight; j += sqPx) {
    var randColorStr =
      "#" + Math.floor(Math.random() * 255 + randColorBase).toString(16);

    var block = document.createElement("div");
    block.style.position = "relative";
    block.style.display = "inline-block";
    block.style.margin = "0px";
    block.style.padding = "0px";
    block.style.float = "left";
    block.style.width = sqPx + "px";
    block.style.height = sqPx + "px";
    block.style.zIndex = "1";

    if (Math.random() > 0.97) {
      block.style.zIndex = 5;
      block.style.backgroundColor = "white";
      block.addEventListener("mouseover", function () {
        if (this.style.background != "transparent") {
          keyBase = randomKey();
          synth.triggerAttackRelease(keyBase, "8n");
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
            synth.triggerAttackRelease(keyBase, "8n");
          } else if (r > 0.67) {
            synth.triggerAttackRelease(keyBase, "8n");
          } else {
            synth.triggerAttackRelease(keyBase, "8n");
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

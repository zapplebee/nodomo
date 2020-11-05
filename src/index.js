#!/usr/bin/env node
const child_process = require("child_process");
const path = require("path");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function loop() {
  play();
  console.log("20 minutes");

  await delay(1000 * 60 * 20);
  play();
  console.log("3 minutes  (break)");
  await delay(1000 * 60 * 3);

  play();
  console.log("20 minutes");
  await delay(1000 * 60 * 20);
  play();
  console.log("3 minutes  (break)");
  await delay(1000 * 60 * 3);

  play();
  console.log("20 minutes");
  await delay(1000 * 60 * 20);
  play();
  console.log("3 minutes  (break)");
  await delay(1000 * 60 * 3);

  play();
  console.log("20 minutes");
  await delay(1000 * 60 * 20);
  play();
  console.log("30 minutes (break)");
  await delay(1000 * 60 * 30);
}

const NOTES = {
  A: 440.0,
  As: 466.1638,
  Bf: 466.1638,
  B: 493.8833,
  C: 523.2511,
  Cs: 554.3653,
  Df: 554.3653,
  D: 587.3295,
  Ds: 622.254,
  Ef: 622.254,
  E: 659.2551,
  F: 698.4565,
  Fs: 739.9888,
  Gf: 739.9888,
  G: 783.9909,
  Gs: 830.6094,
  Af: 830.6094,
};

function chime(freq, duration) {
  child_process.execSync(
    `ffplay -f lavfi -i "sine=frequency=${freq}:duration=${duration}" -autoexit -nodisp -loglevel quiet`
  );
}

function play() {
  chime(NOTES.C, 0.1);
  chime(NOTES.A, 0.1);
  chime(NOTES.D, 0.1);
}

async function main() {
  while (true) {
    await loop();
  }
}

main();

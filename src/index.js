const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function loop() {
  console.log("\u0007");
  console.log("20 minutes");
  await delay(1000 * 60 * 20);
  console.log("\u0007");
  console.log("3 minutes  (break)");
  await delay(1000 * 60 * 3);

  console.log("\u0007");
  console.log("20 minutes");
  await delay(1000 * 60 * 20);
  console.log("\u0007");
  console.log("3 minutes  (break)");
  await delay(1000 * 60 * 3);

  console.log("\u0007");
  console.log("20 minutes");
  await delay(1000 * 60 * 20);
  console.log("\u0007");
  console.log("3 minutes  (break)");
  await delay(1000 * 60 * 3);

  console.log("\u0007");
  console.log("20 minutes");
  await delay(1000 * 60 * 20);
  console.log("\u0007");
  console.log("30 minutes (break)");
  await delay(1000 * 60 * 30);
}

async function main() {
  while (true) {
    await loop();
  }
}

main();

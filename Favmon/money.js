let money = 1;
let timer;

function pressMoney() {
  money++;
  console.log(`You now have $${money}`);
  // clearInterval(timer);
}

// timer = setInterval(() => {
console.log(`Press money! (type 'press' to earn $${money})`);
// }, 1000);

process.stdin.setEncoding("utf-8");
process.stdin.on("data", (input) => {
  if (input.trim().toLowerCase() === "press") {
    pressMoney();
  }
});

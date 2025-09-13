const getDisplay = document.getElementById("display");
let incClick = document.getElementById("incClick");
let deClick = document.getElementById("deClick");
let num;
let clickofdecrease;
let clickofincrease;

function decre() {
  num = Number(getDisplay.innerText);
  num--;
  clickofdecrease = Number(deClick.innerText);
  clickofdecrease++;
  deClick.innerText = clickofdecrease;
  // deClick.classList.add('decr')
  getDisplay.innerText = num;
  if (num <= 0) {
    getDisplay.innerText = 0;
  }



  // let getDisplay.innerText = 0

  //   getDisplay.innerText = eval(Number(getDisplay.innerText) * Number(num));
  //   //   getDisplay.innerText
}

function incre() {
  num = Number(getDisplay.innerText);
  num++;
  clickofincrease = Number(incClick.innerText);
  clickofincrease++;
  incClick.innerText = clickofincrease;

  getDisplay.innerText = num;
  if (num >= 11) {
    getDisplay.innerText = 0;
  }
  // let getDisplay.innerText = 0

  //   getDisplay.innerText = eval(Number(num) + Number(getDisplay.innerText));
  //   getDisplay.innerText
}

function test() {
  // let num =
}

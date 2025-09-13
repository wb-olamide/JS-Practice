const networkInp = document.querySelector("#network-select");
const amountInp = document.getElementById("amount-select");
const generatePin = document.querySelector("#codegenerate");
const PinInp = document.querySelector("#inputPin");
const cardDisplay = document.querySelector("#display");

// four displays
// const numberList = document.querySelector("#number");
// const networkList = document.querySelector("#network");
// const amountList = document.querySelector("#amount");
// const pinList = document.querySelector("#pin");

const rechargeArray = [];
let Status;
let StatusNot;

savebtn.addEventListener("click", () => {
  let idValue = rechargeArray.length + 1;
  let date = new Date().toISOString().slice(0, 10);
  let Delete = "delete";
  Status = "Used";
  StatusNot = "Not Used";
  let dateUsed = new Date().toISOString().slice(0, 10);
  if (
    networkInp.value == "" &&
    amountInp.value == "" &&
    generatePin.value == ""
  ) {
    alert("Error: Select all Fields");
  } else if (networkInp.value == " ") {
    alert("select Network");
  } else if (amountInp.value == "") {
    alert("select Airtime Amount");
  } else if (generatePin.value == "") {
    alert("Generate Recharge Code");
  } else {
    rechargeArray.push({
      id: idValue,
      network: networkInp.value,
      amount: amountInp.value,
      generatePin: generatePin.value,
      rechCode: `*123*${generatePin.value}#`,
      dateCreated: date,
      delete: Delete,
      status: Status,
      statusNot: StatusNot,
      dateUsed: dateUsed,
    });
  }
  // if (PinInp.value == rechargeArray.rechCode) {
  //   rechargeArray.status = statusNot;
  //   console.log(rechargeArray.rechCode);
  //   console.log(rechargeArray);

  // }

  displayArray();

  clearFields();
  console.log(rechargeArray);
});

// console.log(d.toISOString().slice(0, 10));
// let tdStatus;
function displayArray() {
  cardDisplay.innerHTML = "";
  rechargeArray.forEach((value, index) => {
    const tr = document.createElement("tr");

    let tdValue = document.createElement("td");
    tdValue.textContent = index + 1;
    tdValue.className = "px-3 py-2 text-xl font-medium";
    tr.appendChild(tdValue);

    let tdNetwork = document.createElement("td");
    tdNetwork.textContent = value.network;
    tdNetwork.className = "px-3 py-1 text-xl font-medium";
    tr.appendChild(tdNetwork);

    let tdAmount = document.createElement("td");
    tdAmount.textContent = value.amount;
    tdAmount.className = "px-3 py-1 text-xl font-medium";
    tr.appendChild(tdAmount);

    let tdPin = document.createElement("td");
    tdPin.textContent = value.generatePin;
    tdPin.className = "px-3 py-1 text-xl font-medium";
    tr.appendChild(tdPin);

    let tdrechCode = document.createElement("td");
    tdrechCode.textContent = value.rechCode;
    tdrechCode.className = "px-3 py-1 text-xl font-medium";
    tr.appendChild(tdrechCode);

    let tdStatus = document.createElement("td");
    tdStatus.textContent = value.statusNot;
    tdStatus.className = "px-3 py-1 text-xl font-medium";
    tr.appendChild(tdStatus);

    cardRecharge.onclick = () => {
      // rechar(value);
      if (PinInp.value || value.rechCode == value.rechCode) {
        alert("recharge succesfull");
        tdStatus.textContent = value.status;
      tdUsed.textContent = value.dateUsed;

      } else {
        alert("Invalid Recharge Code");
      }
      // displayArray();
    };

    // if (PinInp.value == value.rechCode) {
    //   tdStatus.textContent = value.status;
    // } else {
    //   alert("Invalid Recharge Code");
    // }

    let tdCreated = document.createElement("td");
    tdCreated.textContent = value.dateCreated;
    tdCreated.className = "px-3 py-1 text-xl font-medium";
    tr.appendChild(tdCreated);

    let tdUsed = document.createElement("td");
    // tdUsed.textContent = value.dateUsed;
    tdUsed.className = "px-3 py-1 text-xl font-medium";
    tr.appendChild(tdUsed);
    // if (PinInp.value && value.rechCode == value.rechCode) {
    //   // tdUsed.textContent = value.dateUsed;
    // }

    let tdDelete = document.createElement("button");
    tdDelete.textContent = value.delete;
    tdDelete.className =
      "px-3 my-2 bg-red-700 mx-2 text-center rounded-xl py-1 text-xl font-medium";
    tr.appendChild(tdDelete);

    tdDelete.onclick = () => {
      clearArray(index);
    };

    // console.log(tdDelete);
    // console.log(value.rechCode);

    cardDisplay.appendChild(tr);
    console.log(cardDisplay);
  });
}

function clearFields() {
  networkInp.value = "";
  amountInp.value = "";
  generatePin.value = "";
}

function generateRand(min, max) {
  generatePin.value = Math.floor(Math.random() * (max - min));
}

function clearArray(index) {
  rechargeArray.splice(index, 1);
  displayArray();
}

// function rechar(value) {
//   if (PinInp.value == value.rechCode) {
//     tdStatus.textContent = value.status;
//     alert("recharge succesfull");
//   } else {
//     alert("Invalid Recharge Code");
//   }
//   displayArray();
// }
// cardRecharge.addEventListener("click", rechar);



// cardRecharge.addEventListener("click", () => {
//   const enteredPin = PinInp.value;
//   const card = rechargeArray.find((c) => c.rechCode === enteredPin);

//   if (card) {
//     if (card.status === "Used") {
//       alert("This card has already been used!");
//     } else {
//       card.status = "Used";
//       card.dateUsed = new Date().toISOString().slice(0, 10);
//       alert("Recharge successful!");
//     }
//   } else {
//     alert("Invalid Pin!");
//   }

//   displayArray();
// });
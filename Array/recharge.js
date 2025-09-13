const networkInp = document.querySelector("#network-select");
const amountInp = document.getElementById("amount-select");
const generatePin = document.querySelector("#codegenerate");
const PinInp = document.querySelector("#inputPin");
const cardDisplay = document.querySelector("#display");

const rechargeArray = [];

savebtn.addEventListener("click", () => {
  // let idValue = rechargeArray.length + 1;
  let date = new Date().toISOString().slice(0, 10);
  let networkLine = {
    MTN: "*555*",
    Glo: "*123*",
    Airtel: "*126*",
    "9mobile": "*999*",
  };
  // let Delete = "delete";

  if (
    networkInp.value == "" &&
    amountInp.value == "" &&
    generatePin.value == ""
  ) {
    alert("Error: Select all Fields");
  } else if (networkInp.value == "") {
    alert("select Network");
  } else if (amountInp.value == "") {
    alert("select Airtime Amount");
  } else if (generatePin.value == "") {
    alert("Generate Recharge Code");
  } else {
    rechargeArray.push({
      // id: idValue,
      network: networkInp.value,
      amount: amountInp.value,
      generatePin: generatePin.value,
      rechCode: `${networkLine[networkInp.value]}${generatePin.value}#`,
      // rechCode() {
      //   if (this.nework === "MTN") {
      //     return `*555*${this.generatePin}#`;
      //     console.log(`*555*${this.generatePin}#`);

      //   } else if (this.nework === "GLO") {
      //     return `*123*${this.generatePin}#`;
      //   } else if (this.nework === "Airtel") {
      //     return `*126*${this.generatePin}#`;
      //   } else if (this.nework === "9Mobile") {
      //     return `*236*${this.generatePin}#`;
      //   }
      // },

      dateCreated: date,
      delete: "delete",
      status: "Not Used",
      dateUsed: "",
    });

    // let networkLine = {
    //   "MTN": "*555*",
    //   "GLO": "*555*",
    //   "Airtel": "*555*",
    //   "9mobile": "*555*"

    // }
  }

  // let networkLine = {
  //   MTN: "*555*",
  //   Glo: "*123*",
  //   Airtel: "*126*",
  //   "9mobile": "*999*",
  // };
  // console.log(`${networkLine[networkInp.value]}${generatePin.value}#`);

  // if (networkInp.value === "MTN") {
  //   console.log(`${networkLine[]}${generatePin.value}#`);

  // }else if (networkInp.value === "GLO") {
  //   console.log(`${networkLine.GLO}${generatePin.value}#`);

  // }

  // network: networkInp.value,
  //     amount: amountInp.value,
  //     generatePin: generatePin.value,
  //     rechCode: `*123*${generatePin.value}#`,
  //     dateCreated: date,
  //     delete: "delete",
  //     status: "Not Used",
  //     dateUsed: "",

  displayArray();

  clearFields();
  console.log(rechargeArray);
});

function displayArray() {
  cardDisplay.innerHTML = "";
  rechargeArray.forEach((value, index) => {
    const tr = document.createElement("tr");
    tr.className = "border";

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
    tdStatus.textContent = value.status;
    tdStatus.className = "px-3 py-1 text-xl font-medium";
    tr.appendChild(tdStatus);
    // if (PinInp.value == value.rechCode) {
    //   tdStatus.textContent = value.status;
    // }

    let tdCreated = document.createElement("td");
    tdCreated.textContent = value.dateCreated;
    tdCreated.className = "px-3 py-1 text-xl font-medium";
    tr.appendChild(tdCreated);

    let tdUsed = document.createElement("td");
    // tdUsed.textContent = value.dateUsed;
    tdUsed.textContent = value.dateUsed;
    tdUsed.className = "px-3 py-1 text-xl font-medium";
    tr.appendChild(tdUsed);
    // if (PinInp.value == value.rechCode) {
    //   tdUsed.textContent = value.dateUsed;
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
  generatePin.value = Math.floor(Math.random() * (max - min)) + min;
}

function clearArray(index) {
  rechargeArray.splice(index, 1);
  displayArray();
}

cardRecharge.addEventListener("click", () => {
  inputPin = PinInp.value;

  funcCard = rechargeArray.find((num) => num.rechCode === inputPin);
  console.log(funcCard);

  if (funcCard) {
    if (funcCard.status == "Used") {
      alert("Card has already been used!");
    } else {
      alert("Recharge succesful!");
      funcCard.status = "Used";
      funcCard.dateUsed = new Date().toISOString().slice(0, 10);
    }
  } else {
    alert("Invalid Recharge Code!!!");
  }

  displayArray();
});

// console.log(Math.trunc(Math.random() * 100000000000));

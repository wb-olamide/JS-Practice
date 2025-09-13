const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const searchInput = document.getElementById("searchInput");
const detailsDisplay = document.getElementById("detailsDisplay");
let studentInfoArray = [];

addBtn.addEventListener("click", () => {
  let studentCase =
    nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1);

  studentInfoArray.push({
    StudentName: studentCase,
    phoneNumber: phoneInput.value,
    Delete: "Delete",
  });

  displayArray();
});

function displayArray() {
  detailsDisplay.innerHTML = "";

  studentInfoArray.forEach((studentInfo, index) => {
    const tr = document.createElement("tr");
    tr.className = "font-medium mb-2 border";
    tr.innerHTML = `
    <td class="px-5 text-center py-2">${index + 1} </td>
    <td class="px-5 py-2">${studentInfo.StudentName} </td>
    <td class=" px-5 py-2">${studentInfo.phoneNumber} </td>
    <button onClick= "deleteList(${index})" class="rounded-lg px-8 text-white py-3 bg-red-800">${
      studentInfo.Delete
    }</button>
    `;
    detailsDisplay.appendChild(tr);
  });
}

function deleteList(number) {
  studentInfoArray.splice(number, 1);
  displayArray();
}

function searchBar() {
  
  let search = searchInput.value;

  let searchedStudent = studentInfoArray.filter((studentInfo, index) => {
    return studentInfo.StudentName.includes(search);
  });

  console.log(searchedStudent);
  detailsDisplay.innerHTML = "";
  searchedStudent.forEach((studentInfo, index) => {
    const tr = document.createElement("tr");
    tr.className = "font-medium mb-2 border";
    tr.innerHTML = `
    <td class="px-5 text-center py-2">${index + 1} </td>
    <td class="px-5 py-2">${studentInfo.StudentName} </td>
    <td class=" px-5 py-2">${studentInfo.phoneNumber} </td>
    <button onClick= "deleteSearch('${
      studentInfo.StudentName
    }')" class="rounded-lg px-8 text-white py-3 bg-red-800">${
      studentInfo.Delete
    }</button>
    `;
    detailsDisplay.appendChild(tr);
  });
}

function deleteSearch(number) {
  const del = studentInfoArray.findIndex((test) => {
    test.StudentName == number;
    console.log(test.StudentName);
  });
  studentInfoArray.splice(del, 1);
  detailsDisplay.innerHTML = "";
  detailsDisplay.innerHTML = "";
  
}
// searchInput.addEventListener("input")

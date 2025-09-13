// API = Application Programming Interface
// Fetch = Used to get data from an API

const productDisplay = document.getElementById("display");
const baseUrl = "https://fakestoreapi.com";

async function getProducts() {
  const response = await fetch(`${baseUrl}/products`);
  const data = await response.json();
  console.log(data);

  data.forEach((ele) => {
    productDisplay.innerHTML += `
        <div class= "mb-5">
    <img class = "w-[200px] h-[100px]" src="${ele.image}" alt="">
    <h3>${ele.title}</h3>
    <p >$${ele.price}</p>
        </div>
        `;
  });
}

// async function getSingleProducts() {
//   const response = await fetch(`${baseUrl}/products/1`);
//   const data = await response.json();
//   console.log(data);
// }
// getSingleProducts();
getProducts();

let newProducts = {
  id: 4,
  title: "Diamond Jewelry",
  description: "This is a nice jewelry",
  price: 8.6,
  category: "fashion",
  image:
    "https://tse2.mm.bing.net/th/id/OIP.RIfxJJLAkPL90FeIRa-hBQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
};
const addProduct = async (id) => {
  const result = await fetch(`${baseUrl}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(newProducts),
    headers: {
      "Content-Type": "application/json",
      // Accept: "application/json",
    },
  });
  const newData = await result.json();
  console.log(newData);
};
addProduct(4);

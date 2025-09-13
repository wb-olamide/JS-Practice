// API => Application Programminggg Interface
// CRUD OPERATION
// Create Read Update Delete

// REQUEST URL

// METHODS: POST GET PATCH/PUT DELETE
// HEADERS
// BODY


// try, catch, FINALLY BLOCKS

// fetch(requestUrl, {method})
const baseUrl = "https://fakestoreapi.com";

const product = {
  id: 76,
  title: "Diamond Jewelry",
  description: "This is a nice jewelry",
  price: 8.6,
  category: "fashion",
  image:
    "https://tse2.mm.bing.net/th/id/OIP.RIfxJJLAkPL90FeIRa-hBQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
};

const addProduct = async () => {
  // const formData = new FormData()
  // formData.append("image", "/skjs")

  const response = await fetch(`${baseUrl}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json", //multipart/form-data
      Accept: "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};
addProduct();



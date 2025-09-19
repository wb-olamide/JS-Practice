const token = localStorage.getItem("token");
const usernameEl = document.getElementById("username");
const feedsEl = document.getElementById("feeds");
const submitBtn = document.getElementById("submitBtn");
const caption = document.getElementById("caption");
const image = document.getElementById("image");
const formEl = document.getElementById("formEl");
const logoutBtn = document.getElementById("logout-btn");

const localDiv = document.getElementById("localDiv");
const localimageImp = document.getElementById("local-imageImp");
const imgPreview = document.getElementById("img-preview");
let clicker;

localDiv.addEventListener("change", (e) => {
  clicker = URL.createObjectURL(e.target.files[0]);
  imgPreview.setAttribute("src", clicker);
  console.log(clicker);
});

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
usernameEl.textContent = `${user.firstName}`;
const savedPosts = JSON.parse(localStorage.getItem("savedPosts")) || [];
console.log(savedPosts);

if (!token) {
  alert("Session Expired! Redirecting to login");
  window.location.href = "./login.html";
}

// const checkLogin = () => {
//   console.log(user);

//   if (!token || !user) {
//     window.location.href = "./login.html";
//   } else {
//     usernameEl.textContent = `${user[0].firstName} ${user[0].lastName}`;
//     console.log(user[0].firstName);
//   }
// };
// checkLogin();

// // logoutBtn.addEventListener("click", () => {
// //   localStorage.removeItem("token");
// //   window.location.href = "./login.html";
// // });

// // FETCH FEEDS
// // const getFeeds = () => {
// //   const feeds = JSON.parse(localStorage.getItem("feeds")) || [];
// //   console.log(feeds);

// //   feedsEl.innerHTML = "";
// //   feeds.forEach((ele) => {
// //     feedsEl.innerHTML += `
// //              <div class="post">
// //         <div class="post-header">
// //           <img src="https://picsum.photos/500/400?random=1" alt="${ele.caption}" class="profile-pic">
// //           <span class="username">${ele.author}</span>
// //         </div>
// //         <img src="${ele.image}" alt="${ele.caption}" class="post-img">
// //         <div class="post-actions">
// //           ❤️ 120 likes
// //         </div>
// //         <div class="caption">
// //           <span class="username">${ele.author}</span> ${ele.caption}
// //         </div>
// //         <div class="time">${ele.date}</div>
// //       </div>
// //         `;
// //   });
// // };

// // getFeeds();
// submitBtn.addEventListener("click", () => {
//   let postIt = {
//     author: auth,
//     caption: caption.value,
//     Image: image.value,
//     date: new Date().toLocaleString(),
//     likes: 0,
//   };
//   console.log(postIt);

//   const feeds = JSON.parse(localStorage.getItem("feeds")) || [];
//   feeds.unshift(post);
//   localStorage.setItem("feeds", JSON.stringify(feeds));
// });

logoutBtn.onclick = () => {
  localStorage.removeItem("token");
  alert("Redirecting to login");
  window.location.href = "./login.html";
};
const postContent = () => {
  postObj = {
    author: `${user.firstName} ${user.lastName}`,
    caption: caption.value,
    image: clicker,
    date: new Date().toLocaleTimeString(),
  };
  console.log(clicker);

  savedPosts.unshift(postObj);
  localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
  window.location.href = "./dashboard.html";
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  postContent();
});

savedPosts.forEach((post, index) => {
  feedsEl.innerHTML += `
 <div class="bg-white border border-gray-300 rounded-md shadow">
          <div class="flex items-center gap-3 p-3">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="user"
              class="rounded-full w-8 h-8"
            />
            <span class="font-bold text-sm">${post.author}</span>
          </div>
          <img
            src="${post.image}"
            alt="post"
            class="w-full h-auto"
          />
          <div class="p-3 font-semibold text-sm">❤️ 95 likes</div>
          <div class="px-3 pb-2 text-sm">
            <span class="font-bold mr-2">${post.author}:</span> ${post.caption}
          </div>
          <div class="px-3 pb-3 text-xs uppercase text-gray-500">
           ${post.date}
          </div>
        </div>
      </div>
`;
});

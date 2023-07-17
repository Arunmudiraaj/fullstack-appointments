const button = document.querySelector("#btn");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const list = document.querySelector("#list");

button.addEventListener("click", addUser);
getAllData();
function addUser() {
  const nameTxt = name.value;
  const phoneTxt = phone.value;
  const emailTxt = email.value;
  if (!nameTxt || !phoneTxt || !emailTxt) {
    alert("enter all fields");
    return;
  }
  console.log(nameTxt, phoneTxt, phoneTxt);
  // list.innerHTML =
  //   list.innerHTML +
  //   `
  // <div><span>${nameTxt} - ${phoneTxt} - ${emailTxt} - </span> <button class="delete-btn" onclick="delItem('${emailTxt}')">Delete</button></div>
  // `;
  const url = "http://localhost:8080/appointments/add-appointment";
  const data = { name: nameTxt, phone: phoneTxt, email: emailTxt };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const { name, phone, email, id } = data;
      list.innerHTML =
        list.innerHTML +
        `
  <div id='${id}'><span>${name} - ${phone} - ${email} - </span> <button class="delete-btn" onclick="delItem('${id}')">Delete</button></div>
  `;
    })
    .catch((err) => {
      console.log("error " + err);
    });
}
function delItem(id) {
  console.log(id);
  const url = "http://localhost:8080/appointments/del/" + id;
  fetch(url, { method: "POST" })
    .then((response) => {
      console.log(response);
      const divElement = document.getElementById(id);
      list.removeChild(divElement);
    })
    .catch((err) => {
      console.log(err);
    });
}
function getAllData() {
  const url = "http://localhost:8080/appointments/all";
  fetch(url, {
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (const item of data) {
        list.innerHTML =
          list.innerHTML +
          `
      <div id='${item.id}'><span>${item.name} - ${item.phone} - ${item.email} - </span> <button class="delete-btn" onclick="delItem('${item.id}')">Delete</button></div>
      `;
      }
    });
}

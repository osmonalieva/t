let name = document.querySelector(".name");
let lastname = document.querySelector(".lastname");
let image = document.querySelector(".imgURL");
let create = document.querySelector(".create");
let list = document.querySelector(".list");
let input = document.querySelectorAll("input");

readContact();

create.addEventListener("click", () => {
  
  let newObj = {
    name: name.value,
    lastname: lastname.value,
    image: image.value,
  };

  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.push(newObj);
  localStorage.setItem("contact", JSON.stringify(data));
  for (let i of input) {
    i.value = "";
  }

  readContact();
});

function readContact() {
  let newdata = JSON.parse(localStorage.getItem("contact")) || [];
  list.innerHTML = "";
  newdata.forEach((el,index) => {
    let infoBox = document.createElement("div");
    let info = document.createElement("div");
    let img = document.createElement("img");
    let p_name = document.createElement("p");
    let p_lastname = document.createElement("p");
    let btn_delete = document.createElement("button");

    //? classList
    infoBox.classList.add("infobox");
    //? classList

    image.src = el.image;
    p_name.innerText = el.name;
    p_lastname.innerText = el.lastname;
    btn_delete.innerHTML = `<ion-icon name="trash"></ion-icon>`;
    info.append(p_name);
    info.append(p_lastname);
    infoBox.append(img);
    infoBox.append(info);
    infoBox.append(btn_delete);
    list.append(infoBox);

    btn_delete.addEventListener("click", () => {
      deleteContact(index);
    });
  });
}
function deleteContact(id) {
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.splice(id, 1);
  localStorage.setItem("contact", JSON.stringify(data));
  readContact();
}

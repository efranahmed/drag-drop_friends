data = [
  {
    name: "Dinar Mahamud",
    role: "Web Developer",
    img: "dinar.jpg",
  },
  {
    name: "Mahabub Mosarof",
    role: "Web Developer",
    img: "maruf.jpg",
  },
  {
    name: "Sadia Afrin",
    role: "Web Developer",
    img: "sadia.jpg",
  },
  {
    name: "Rumi Akter",
    role: "Web Developer",
    img: "rumi.jpg",
  },
  {
    name: "Efran Ahmed",
    role: "Web Developer",
    img: "efran.jpg",
  },
];
let ul = document.querySelector("ul");

efran = () => {
  ul.innerHTML = "";
  data.forEach((data, e) => {
    let li = document.createElement("li");
    li.setAttribute("number", e);
    li.innerHTML = `
    <div class="friends">
      <img src="img/${data.img}" alt="/" />
      <div class="friend_text">
        <h3>${data.name}</h3>
        <p>${data.role}</p>
      </div>
    </div>
    <h1 class="icon">&#10978;</h1>
  `;
    ul.appendChild(li);
  });
  eventListen();
};
efran();

function eventListen() {
  let list = ul.querySelectorAll("li");
  let startNum;
  let dropNum;
  for (let li of list) {
    li.draggable = true;

    li.ondragstart = function () {
      ul.style.height = ul.clientHeight + "px";
      startNum = this.getAttribute("number");
      setTimeout(() => {
        this.style.display = "none";
      }, 0);
      ul.style.height = ul.clientHeight - this.clientHeight + "px";
    };
    li.ondragend = function () {
      this.style.display = "flex";
      for (active_list of list) {
        active_list.classList.remove("active");
      }
    };
    li.ondragenter = () => li.classList.add("active");
    li.ondragleave = () => li.classList.remove("active");
    li.ondragover = (e) => {
      e.preventDefault();
    };
    li.ondrop = function (e) {
      e.preventDefault;
      dropNum = this.getAttribute("number");

      ul.style.height = ul.clientHeight + this.clientHeight + "px";
      data.splice(dropNum, 0, data.splice(startNum, 1)[0]);

      efran();
    };
  }
}

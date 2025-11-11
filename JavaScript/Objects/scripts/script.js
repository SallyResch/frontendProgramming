function Mammal(name, lifespan, group, food, description, length, weight, found) {
  this.name = name,
    this.lifespan = lifespan,
    this.group = group,
    this.food = food,
    this.description = description,
    this.length = length,
    this.weight = weight,
    this.found = found;
}

let echidna = new Mammal("Echidna", 50, "mammals",
  "insects such as ants and termites, beetles larvae and worms",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque numquam doloremque iste dolorem ad architecto at ab assumenda, libero totam vero quidem voluptas! Ducimus sequi unde, culpa vitae nobis expedita!",
  76, 10, "Throughout Australia");

let tasmanianDevil = new Mammal(
  "Tasmanian Devil",
  5,
  "mammals",
  "Predator, eat meats from wallabies and wombats",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque numquam doloremque iste dolorem ad architecto at ab assumenda, libero totam vero quidem voluptas! Ducimus sequi unde, culpa vitae nobis expedita!",
  70,
  10,
  "Tasmania");

let quokka = new Mammal(
  "Quokka",
  10,
  "mammals",
  "Planteater, they munch on shrubs and grasses",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque numquam doloremque iste dolorem ad architecto at ab assumenda, libero totam vero quidem voluptas! Ducimus sequi unde, culpa vitae nobis expedita!",
  50,
  3,
  "Rottnes Island and few places on mainland in Western Australia");

const mammalArray = [echidna, tasmanianDevil, quokka];

let mainContent = document.querySelector(".main-content");

mammalArray.forEach(mammal => {
  let mammalContainer = document.createElement("div");
  mammalContainer.textContent = `${mammal.name}`;
  mammalContainer.classList.add(mammal.name.toLowerCase().replace(" ", "-"))
  mainContent.appendChild(mammalContainer);
})
// This function is provided to shake an image.  Use it every time the user clicks on a pokemon.
// Feel free to delete this function and include it as a method within your classes...
const toggleShake = function(element) {
  // Animations only occur when a new class is added to the element.
  // Since we want this to happen every time, we can switch between two different animations
  if (element.classList.contains("shake1")) {
    element.classList.remove("shake1");
    element.classList.add("shake2")
  } else {
    element.classList.remove("shake2");
    element.classList.add("shake1")
  }
}

const main = document.querySelector("main");

// Your Code Here
class evolvingFlower {
  constructor() {
    this.navigateToImage = [
      "images/flower/flower0.png",
      "images/flower/flower1.png",
      "images/flower/flower2.png"
    ];
    this.currentIndex = 0;
    this.imgElement = document.createElement("img");
    this.imgElement.src = this.navigateToImage[this.currentIndex];
    this.imgElement.addEventListener("click", this.handleClick.bind(this));
    main.appendChild(this.imgElement);
  }

  handleClick() {
    if (this.currentIndex < this.navigateToImage.length - 1) {
      this.currentIndex++;
      this.imgElement.src = this.navigateToImage[this.currentIndex];
      toggleShake(this.imgElement);
    }
  }
}

const flower1 = new evolvingFlower();
const flower2 = new evolvingFlower();

class Pokemon {
  constructor(navigateToImage, maxFormIndex) {
    this.navigateToImage = navigateToImage;
    this.currentEvolution = 0;
    this.imgElement = document.createElement("img");
    this.imgElement.src = this.navigateToImage[this.currentEvolution];
    this.imgElement.addEventListener("click", this.evolve.bind(this));
    main.appendChild(this.imgElement);
  }

  evolve() {
    if (this.currentEvolution < this.navigateToImage.length - 1) {
      const maxIndex = this.navigateToImage.length - 1;
      const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
      this.currentEvolution = randomIndex;
      this.imgElement.src = this.navigateToImage[this.currentEvolution];
      toggleShake(this.imgElement);
    }
  }
}

const charmander1 = new Pokemon(
  [
    "images/pokeball.png",
    "images/charmander/charmander0.png",
    "images/charmander/charmander1.png",
    "images/charmander/charmander2.png"
  ],
  3
);

const charmander2 = new Pokemon(
  [
    "images/pokeball.png",
    "images/charmander/charmander0.png",
    "images/charmander/charmander1.png",
    "images/charmander/charmander2.png"
  ],
  3
);

const eevee1 = new Pokemon(
  [
    
    "images/pokeball.png",
    "images/eevee/eevee0.png",
    "images/eevee/eevee1.png",
    "images/eevee/eevee2.png",
    "images/eevee/eevee3.png",
    "images/eevee/eevee4.png",
    "images/eevee/eevee5.png",
    "images/eevee/eevee6.png",
    "images/eevee/eevee7.png",
    "images/eevee/eevee8.png"
  ],
  8
);

const eevee2 = new Pokemon(
  [
    "images/pokeball.png",
    "images/eevee/eevee0.png",
    "images/eevee/eevee1.png",
    "images/eevee/eevee2.png",
    "images/eevee/eevee3.png",
    "images/eevee/eevee4.png",
    "images/eevee/eevee5.png",
    "images/eevee/eevee6.png",
    "images/eevee/eevee7.png",
    "images/eevee/eevee8.png"
  ],
  8
);
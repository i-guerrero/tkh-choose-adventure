function adventure() {
  console.log("entered function");
  // create prompts
  let weapon;
  let path;
  let animal;
  let count = 0;
  let hp = 100;

  // Choice 1 - weapon to lowerCase
  weapon = prompt(
    "Welcome to CYOA! You have a journey of fun ahead. Choose your weapon: (Type 'axe' or 'spear')"
  ).toLowerCase();

  if (weapon === "axe") {
    window.alert(`You chose ${weapon}, not bad.`);
  } else if (weapon === "spear") {
    window.alert(`You chose ${weapon}, nifty!`);
  }

  // Choice 2 - path to lowerCase
  path = prompt(
    "You've arrived at a fork in the path. Choose wisely: (Type 'left' or 'right')"
  ).toLowerCase();

  if (path === "left") {
    window.alert(`You chose ${path}, the forrest has gone dark.`);
  } else if (path === "right") {
    window.alert(`You chose ${path}, you've entered the desert.`);
  }

  // Choice 3 - animal to lowerCase
  animal = prompt(
    "Magically, You're met with a wild animal. Which do you want to fight off first? Choose wisely: (Type 'boar' or 'reindeer')"
  ).toLowerCase();

  if (animal === "boar") {
    window.alert(
      `You chose ${animal}, the ${animal} has attacked and you lose 20 hp.`
    );
    hp -= 20;
  } else if (animal === "reindeer") {
    window.alert(
      `You chose ${animal}, the ${animal} has decided you are not worthy to be Santa and flew away.`
    );
  }

  // 8 Outcomes
  if (weapon === "axe") {
    if (path === "left") {
      if (animal === "boar") {
        window.alert(`Not too shabby. HP = ${hp}`);
      } else if (animal === "reindeer") {
        window.alert(`Totally rad. HP = ${hp}`);
      }
    } else if (path === "right") {
      if (animal === "boar") {
        window.alert(`Not bad human. HP = ${hp}`);
      } else if (animal === "reindeer") {
        window.alert(`You chose the path least traveled. HP = ${hp}`);
      }
    }
  } else if (weapon === "spear") {
    if (path === "left") {
      if (animal === "boar") {
        window.alert(`You make good choices. HP = ${hp}`);
      } else if (animal === "reindeer") {
        window.alert(`Better luck next time. HP = ${hp}`);
      }
    } else if (path === "right") {
      if (animal === "boar") {
        window.alert(`Really? This is the path you chose? HP = ${hp}`);
      } else if (animal === "reindeer") {
        window.alert(`You've reached level 9000. HP = ${hp}`);
      }
    }
  }
}

let button = document.querySelector(".btn");
button.addEventListener("click", adventure);

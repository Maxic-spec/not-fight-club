document.addEventListener("DOMContentLoaded", () => {
  const item = document.querySelector(".knopka");
  const iterm = document.querySelector(".startWindow");
  const sig = document.querySelector(".wrap");
  const rec = document.querySelector(".fight");
  const rec1 = document.querySelector(".fight1");
  const rec2 = document.querySelector(".fight2");
  const rec3 = document.querySelector(".fight3");
  const rec4 = document.querySelector(".fight4");
  const input = document.getElementById("myInput");
  const settings = document.querySelector(".windowOfSettings");
  const name = document.querySelector(".name");
  const tt = document.querySelector(".tt");
  const ddButtons = document.querySelectorAll(".dd");
  const character = document.querySelector(".character")
  const fight = document.querySelector(".fighter")
  const ydar = document.querySelector(".sit")
  const dinamic = document.querySelector(".containerForDinamicOfFight")
  const shop = document.querySelector(".shop")
  const multiplayer = document.querySelector(".multiplayer")
  const item1 = document.querySelector(".knopka1")
  const input1 = document.getElementById("myInput1")
  const centrifuga = document.querySelector(".centrifuga")
  const fii = document.querySelector(".fighter1")

  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.1)";
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1.0)";
  });

  input.addEventListener("input", () => {
    const value = input.value.trim();
    item.disabled = value === "";
  });

  item.addEventListener("click", () => {
    const value = input.value.trim();
    if (value !== "") {
      iterm.style.display = "none";
      sig.style.display = "flex";
      name.innerHTML = `<input type='text' id='nameInput' value='${value}'>`;
      tt.textContent = "Приветствуем вас, " + value;

      const nameInput = document.getElementById("nameInput");
      nameInput.addEventListener("input", () => {
        tt.textContent = "Приветствуем вас, " + nameInput.value.trim();
      });
    } else {
      alert("Введите текст перед продолжением!");
    }
  });


  const fightButtons = [rec, rec1, rec2, rec3];
  fightButtons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.1)";
      btn.style.backgroundColor = "rgba(228, 199, 130, 1)";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1.0)";
      btn.style.backgroundImage = "url('images/1686975476_kartin-papik-pro-p-kartinki-perelivanie-tsvetov-45.png')";
    });

    btn.addEventListener("click", () => {
      sig.style.display = "none";
    });
  });

  rec1.addEventListener("click", () => {
    sig.style.display = "none";
    shop.style.display = "flex";
  })

  rec4.addEventListener("mouseover", () => {
    rec4.style.transform = "scale(1.1)";
    rec4.style.backgroundColor = "rgba(228, 199, 130, 1)";
  });

  rec4.addEventListener("mouseout", () => {
    rec4.style.transform = "scale(1.0)";
    rec4.style.backgroundImage = "url('images/1686975476_kartin-papik-pro-p-kartinki-perelivanie-tsvetov-45.png')";
  });

  rec4.addEventListener("click", () => {
    sig.style.display = "none";
    settings.style.display = "flex";
  });

  rec3.addEventListener("click", () => {
    sig.style.display = "none";
    multiplayer.style.display = "flex";
  })

  ddButtons.forEach(dd => {
    dd.addEventListener("click", () => {
      sig.style.display = "flex";
      settings.style.display = "none";
      character.style.display = "none";
    });
  });

  function playAudioOnce() {
    const audio = document.getElementById("myAudio");
    if (audio) {
      audio.play();
    }
    document.removeEventListener("click", playAudioOnce);
  }

  document.addEventListener("click", playAudioOnce);

  rec2.addEventListener("click", () => {
    character.style.display = "flex";
    sig.style.display = "none;"
  })

  rec.addEventListener("click", () =>{
    fight.style.display = "flex";
    sig.style.display = "none;"
    character.style.display = "none";
  })

  const checkboxes = document.querySelectorAll('input[name="zones[]"]');
  const hitButton = document.querySelector(".sit");

  function updateHitButtonState() {
    const selected = document.querySelectorAll('input[name="zones[]"]:checked');
    hitButton.disabled = selected.length !== 2;
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", updateHitButtonState);
  });


  updateHitButtonState();

  
  const characterImages = document.querySelectorAll(".character .imge img");
  const tete = document.querySelector(".character .tete");
  const fighterImage = document.querySelector(".fighter .class");

  let currentIndex = 0;

  characterImages.forEach((img, index) => {
    img.style.display = index === currentIndex ? "block" : "none";
  });


  tete.textContent = `Вы выбрали: ${characterImages[currentIndex].dataset.name}`;

  
  fighterImage.src = characterImages[currentIndex].src;

  document.querySelector(".imge").addEventListener("click", () => {
    
    characterImages[currentIndex].style.display = "none";

    currentIndex = (currentIndex + 1) % characterImages.length;

    characterImages[currentIndex].style.display = "block";

    const selectedName = characterImages[currentIndex].dataset.name;
    tete.textContent = `Вы выбрали: ${selectedName}`;

    fighterImage.src = characterImages[currentIndex].src;
  });
  const fr = document.querySelector(".fr")
  fr.textContent = "Выбери своего персонажа, " + input.value

  ydar.addEventListener("mouseover", () => {
    ydar.style.transform = "scale(1.1)";
  });

  ydar.addEventListener("mouseout", () => {
    ydar.style.transform = "scale(1.0)";
  });

  const fightButton = document.querySelector('.sit');
  const attackForm = document.querySelector('.inn');
  const blockForm = document.querySelector('.in');
  const resultContainer = document.querySelector('.containerForDinamicOfFight');
  const wons = document.querySelector(".wins");
  const looses = document.querySelector(".loses");
  const fightScreen = document.querySelector(".fighter");
  const characterScreen = document.querySelector(".character");

  const enemies = [
    {
      name: "Орк",
      hp: 100,
      image: "https://i.ytimg.com/vi/kiTq8S3oLDU/maxresdefault.jpg"
    },
    {
      name: "Голый",
      hp: 120,
      image: "https://avatarko.ru/img/kartinka/1/Gollum_Middle-earth.jpg"
    },
    {
      name: "Назгул",
      hp: 140,
      image: "https://avatarko.ru/img/kartinka/30/Middle-earth_nazgul_29179.jpg"
    },
    {
      name: "Сарумян",
      hp: 160,
      image: "https://i.pinimg.com/736x/63/df/6e/63df6ecc2acd302892f8ca4ee592bbf8.jpg"
    },
    {
      name: "Балрог",
      hp: 180,
      image: "https://as1.ftcdn.net/jpg/06/06/62/68/1000_F_606626889_gsg1dXdF6HB0mWDEqZUI5kx4coCxrMDV.webp"
    },
    {
      name: "Саурон",
      hp: 200,
      image: "https://yt3.googleusercontent.com/ytc/AIdro_nMsrFq3MpEOTO_wu5lNRqx27JjyrbZtEdeZ3WWiahDkQ=s900-c-k-c0x00ffffff-no-rj"
    }
  ];

  let playerHP = 170;
  let wins = 0;
  let loses = 0;
  let currentLevel = 0;
  let botHP = enemies[currentLevel].hp;

  function updateEnemyDisplay() {
    const enemy = enemies[currentLevel];
    document.querySelector(".lala").src = enemy.image;
    resultContainer.innerHTML = `
      <p style="font-family: Lastfunk Street">Уровень ${currentLevel + 1}: ${enemy.name}</p>
      <p style="font-family: Lastfunk Street">HP противника: ${botHP}</p>
    `;
  }  

  document.querySelector(".fight").addEventListener("click", () => {
    fightScreen.style.display = "flex";
    characterScreen.style.display = "none";
    updateEnemyDisplay();
  });

  fightButton.addEventListener('click', () => {
    const selectedAttack = attackForm.querySelector('input[name="target"]:checked');
    const selectedBlocks = blockForm.querySelectorAll('input[name="zones[]"]:checked');

    if (!selectedAttack || selectedBlocks.length !== 2) {
      resultContainer.innerHTML = `<p style="color:red;">Выберите одну цель атаки и ровно две зоны блока!</p>`;
      return;
    }

    const playerAttack = selectedAttack.parentElement.textContent.trim();
    const playerBlocks = Array.from(selectedBlocks).map(cb => cb.parentElement.textContent.trim());

    const zones = ['Head', 'Neck', 'Body', 'Belly', 'Legs'];
    const botAttack = zones[Math.floor(Math.random() * zones.length)];

    const botBlocks = [];
    while (botBlocks.length < 2) {
      const zone = zones[Math.floor(Math.random() * zones.length)];
      if (!botBlocks.includes(zone)) {
        botBlocks.push(zone);
      }
    }

    let playerAttackResult;
    if (botBlocks.includes(playerAttack)) {
      playerAttackResult = `Вы атаковали бота в "${playerAttack}", но он заблокировал ваш удар. HP бота: ${botHP}`;
    } else {
      botHP -= 10;
      playerAttackResult = `Вы атаковали бота в "${playerAttack}" — попадание! HP бота: ${botHP}`;
    }

    let botAttackResult;
    if (playerBlocks.includes(botAttack)) {
      botAttackResult = `Бот атаковал вас в "${botAttack}", но вы заблокировали удар! HP игрока: ${playerHP}`;
    } else {
      playerHP -= 10;
      botAttackResult = `Бот атаковал вас в "${botAttack}" — попадание! HP игрока: ${playerHP}`;
    }

    resultContainer.innerHTML = `
      <p class="fafa">${botAttackResult}</p>
      <p class="fafa">${playerAttackResult}</p>
    `;

    if (botHP <= 0) {
      wins++;
      currentLevel++;
      if (currentLevel < enemies.length) {
        botHP = enemies[currentLevel].hp;
        playerHP = 150;
        fightButton.disabled = false;
        updateEnemyDisplay();
      } else {
        resultContainer.innerHTML += `<p style="color:gold;">🎉 Вы победили всех врагов!</p>`;
        fightButton.disabled = true;
      }
    }

    if (playerHP <= 0) {
      loses++;
      resultContainer.innerHTML += `<p style="color:red;">💀 Вы проиграли!</p>`;
      fightScreen.style.display = "none";
      characterScreen.style.display = "flex";
      botHP = enemies[currentLevel].hp;
      playerHP = 150;
      fightButton.disabled = false;
      updateEnemyDisplay();
    }

    wons.textContent = "Wins: " + wins;
    looses.textContent = "Loses: " + loses;

    attackForm.reset();
    blockForm.reset();
  });

  const minus = document.querySelector(".--");

  minus.addEventListener("click", () => {
    if (wins > 0) {
      wins = Math.max(0, wins - 1);
      wons.textContent = "Wins: " + wins;
      playerHP += 10;

    if (wins === 0) {
      minus.disabled = true;
    }
    } else {
      alert("У вас нет побед, которые можно обменять на здоровье!!!");
    }
  });

  item1.addEventListener("mouseover", () => {
    item1.style.transform = "scale(1.1)";
  });

  item1.addEventListener("mouseout", () => {
    item1.style.transform = "scale(1.0)";
  });

  input1.addEventListener("input", () => {
    const znac = input1.value.trim();
    item1.disabled = znac === "";
  });

  item1.addEventListener("click", () => {
    const znach = input1.value.trim();
    if (znach !== "") {
      centrifuga.style.display = "none";
      fii.style.display = "flex";
    } else {
      alert("Введите текст перед продолжением!");
    }
  });


});

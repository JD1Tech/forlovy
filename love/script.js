let cheClickCount = 0;

function updateMessage(text, imagePath = "", buttons = []) {
  document.getElementById("message").textContent = text;

  const imageContainer = document.getElementById("image-container");
  if (imagePath) {
    imageContainer.innerHTML = `<img src="${imagePath}" alt="Image" style="width:150px; margin-top:10px;" />`;
  } else {
    imageContainer.innerHTML = "";
  }

  const buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = ""; // clear existing buttons

  buttons.forEach(({ text, onClick }) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = onClick;
    buttonsDiv.appendChild(btn);
  });
}

function cheClicked() {
  cheClickCount++;

  if (cheClickCount === 1) {
    updateMessage(
      "Ang ganda mo lalo pag nagsusungit ka",
      "",
      [
        { text: "Che!", onClick: cheClicked },
        { text: "Syempre!", onClick: helloClicked }
      ]
    );
  } else if (cheClickCount === 2) {
    updateMessage(
      "Isa pang che, kikiss na kita!",
      "",
      [
        { text: "Che!", onClick: kissGift },
        { text: "Ok!", onClick: showFlowers }
      ]
    );
  }
}

function helloClicked() {
  updateMessage(
    "Why you are so beautiful every single day?",
    "",
    [
      { text: "Che!", onClick: cheClicked },
      { text: "Thank you!", onClick: thankyouClicked }
    ]
  );
}

function thankyouClicked() {
  updateMessage(
    "Smile ka lang palagi ah?",
    "",
    [
      { text: "No!", onClick: cheClicked },
      { text: "Always!", onClick: showFlowers }
    ]
  );
}

function showFlowers() {
  updateMessage(
    "For you, my love 💐",
    "gift/flower.gif",
    
  );
}

function kissGift() {
  updateMessage(
    "Mwah! 😘",
    "gift/kiss.gif",
    [
      { text: "Love you!", onClick: showFlowers }
    ]
  );
}

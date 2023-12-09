const commContainer = document.querySelector(".committee__cards");
const makeCardSpeaker = (name, arr) => {
  const a = document.createElement("a");
  if (arr[3]) a.href = arr[3];
  const card = document.createElement("div");
  card.classList.add("committee__card");

  const commImg = document.createElement("img");
  commImg.classList.add("committee__img");
  commImg.src = arr[0];

  const commText = document.createElement("div");
  commText.classList.add("committee__text");

  const commName = document.createElement("p");
  commName.innerText = name;

  const commDesignation = document.createElement("p");
  commDesignation.classList.add("committee__designation");
  commDesignation.innerHTML = `${arr[1]} <br> ${arr[2]}`;
  commDesignation.title = arr[2];

  commText.append(commName);
  commText.append(commDesignation);
  card.append(commImg);
  card.append(commText);
  a.append(card);
  commContainer.append(a);
};

for (k in speakers) {
  makeCardSpeaker(k, speakers[k]);
}

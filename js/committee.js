const commContainer = document.querySelector(".committee__cards");
const makeCard = (name, arr) => {
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
  commDesignation.innerText = `${arr[1]}, ${arr[2]}`;
  commDesignation.title = arr[2];

  commText.append(commName);
  commText.append(commDesignation);
  card.append(commImg);
  card.append(commText);
  commContainer.append(card);
};

for (k in comm) {
  makeCard(k, comm[k]);
}

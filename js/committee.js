const titleGenerator = (title) => {
  const commSectionTitles = document.createElement("h3");
  commSectionTitles.classList.add("committee_titles");
  commSectionTitles.innerText = title;
  return commSectionTitles;
};

const makeCard = (name, arr, container) => {
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
  if (arr[2] == " ") {
    commDesignation.innerText = `${arr[1]}`;
  } else {
    commDesignation.innerHTML = `${arr[1]} ${arr[2]}`;
  }
  commDesignation.title = arr[2];

  commText.append(commName);
  commText.append(commDesignation);
  card.append(commImg);
  card.append(commText);
  container.append(card);
};

const commContainer = document.querySelector(".committee__cards");

const patronsCard = document.querySelector(".comm__patrons");
const gChairCard = document.querySelector(".comm__gchair");
const TPCCard = document.querySelector(".comm__tpc");
const publicationCard = document.querySelector(".comm__publication");
const publicityCard = document.querySelector(".comm__publicity");
const financeCard = document.querySelector(".comm__finance");
const orgcontainer = document.querySelector(".comm__org");
const techcontainer = document.querySelector(".comm__tech");

let commCards = [
  "patrons",
  "gChair",
  "TPC",
  "publication",
  "publicity",
  "finance",
];

const committeePpl = {
  patrons: [patronsCard, patrons, "Patrons"],
  gChair: [gChairCard, GeneralChairs, "General Chairs"],
  TPC: [TPCCard, TPC, "TPC Chairs"],
  publication: [publicationCard, publication, "Publication Chairs"],
  publicity: [publicityCard, publicity, "Publicity Chair"],
  finance: [financeCard, finance, "Finance Committee Chairs"],
};

for (const card of commCards) {
  committeePpl[card][0].append(titleGenerator(committeePpl[card][2]));
  for (const person in committeePpl[card][1]) {
    makeCard(person, committeePpl[card][1][person], committeePpl[card][0]);
  }
  commContainer.append(committeePpl[card][0]);
}

//organsing team
orgcontainer.append(titleGenerator("Organising Committee"));
techcontainer.append(titleGenerator("Technical Program Committee"));

const orglist = document.createElement("ul");
orglist.classList.add("comm__organising");

for (const person of commOrganizing) {
  const orglistItem = document.createElement("li");

  for (const detail of person) {
    if (detail == person[person.length - 1]) {
      orglistItem.innerText += `${detail}`;
      continue;
    }
    orglistItem.innerText += `${detail}, `;
  }

  orglist.append(orglistItem);
}
orgcontainer.append(orglist);
commContainer.append(orgcontainer);

//technical team
const techlist = document.createElement("ul");
techlist.classList.add("comm__technical");
for (const person of commTechnical) {
  const techlistItem = document.createElement("li");

  for (const detail of person) {
    if (detail == person[person.length - 1]) {
      techlistItem.innerText += `${detail}`;
      continue;
    }
    techlistItem.innerText += `${detail}, `;
  }

  techlist.append(techlistItem);
}

techcontainer.append(techlist);
commContainer.append(techcontainer);

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
  commDesignation.innerText = `${arr[1]}, ${arr[2]}`;
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
  gChair: [gChairCard, GeneralChairs, "General Chair"],
  TPC: [TPCCard, TPC, "TPC Chair"],
  publication: [publicationCard, publication, "Publication Chair"],
  publicity: [publicityCard, publicity, "Publicity Chair"],
  finance: [financeCard, finance, "Finance Committee Chairs"],
};

// for (k in comm) {
//   makeCard(k, comm[k]);
// }

// for (const section of commCards) {
//   const title = titleGenerator(committeePpl[section][2]);
//   //   section.append(title);
//   console.log(section);
//   for (const person in committeePpl[section][1]) {
//     makeCard(
//       person,
//       committeePpl[section][1][person],
//       committeePpl[section][0]
//     );
//   }
//   //   commContainer.append(section);
// }
for (const card of commCards) {
  const title = titleGenerator(committeePpl[card][2]);
  committeePpl[card][0].append(title);
  for (const person in committeePpl[card][1]) {
    makeCard(person, committeePpl[card][1][person], committeePpl[card][0]);
  }
  commContainer.append(committeePpl[card][0]);
}

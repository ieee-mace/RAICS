const speakerContainer = document.querySelector(".speaker__container");

function speakerCard(name, speaker) {
  const card = document.createElement("div");
  card.setAttribute("class", "speaker__card");

  const speakerImg = document.createElement("img");
  speakerImg.setAttribute("class", "speaker__img");
  speakerImg.setAttribute("src", speaker[0]);

  const speakerInfoLink = document.createElement("a");
  speakerInfoLink.setAttribute("href", speaker[1]);
  speakerInfoLink.setAttribute("target", "_blank");

  const speakerMoreInfo = document.createElement("img");
  speakerMoreInfo.setAttribute("class", "speaker__moreinfo");
  speakerMoreInfo.setAttribute("title", "Know More About Speaker");
  speakerMoreInfo.setAttribute("src", "images/know_more.png");

  const speakerContent = document.createElement("div");
  speakerContent.setAttribute("class", "speaker__content");

  const speakerInfo = document.createElement("div");
  speakerInfo.setAttribute("class", "speaker__info");

  const speakerTopic = document.createElement("h2");
  speakerTopic.setAttribute("class", "speaker__topic");
  speakerTopic.innerText = speaker[2];

  const speakerName = document.createElement("p");
  speakerName.setAttribute("class", "speaker__name");
  speakerName.innerText = `~ ${name}`;

  // const speakerElaborate = document.createElement("div");
  // speakerElaborate.setAttribute("class", "speaker__elaborate");

  const speakerAbout = document.createElement("p");
  speakerAbout.setAttribute("class", "speaker__about");
  const formattedText = speaker[3].replace(/\n\s*/g, " ");
  speakerAbout.innerHTML = formattedText;

  // speakerElaborate.append(speakerAbout);
  speakerInfo.append(speakerTopic);
  speakerInfo.append(speakerName);
  speakerContent.append(speakerInfo);
  // speakerContent.append(speakerElaborate);
  speakerContent.append(speakerAbout);
  card.append(speakerImg);
  speakerInfoLink.append(speakerMoreInfo);
  card.append(speakerInfoLink);
  card.append(speakerContent);

  speakerContainer.append(card);
}

for (k in speakerInfo) {
  speakerCard(k, speakerInfo[k]);
}

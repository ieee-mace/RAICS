const reviewers = {
    "Dr. Balamurugan S": [
        "./images/metareviewers/Dr. Balamurugan S.jpg",
        "",
        "",
        "",
    ],
    "Dr. Deepa S. N.": [
        "./images/metareviewers/Dr. Deepa S. N..png",
        "",
        "",
        "",
    ],
    "Dr. Deepika M P": [
        "./images/metareviewers/Dr. Deepika M P.jpg",
        "",
        "",
        "",
    ],
    "Dr. Deepthi Sasidharan": [
        "./images/metareviewers/Dr. Deepthi Sasidharan.jpg",
        "",
        "",
        "",
    ],
    "Dr. Kala S.": ["./images/metareviewers/Dr. Kala S.jpeg", "", "", ""],
    "Dr. Karthikeyan V": [
        "./images/metareviewers/Dr. Karthikeyan V.png",
        "",
        "",
        "",
    ],
    "Dr. Manu J Pillai": [
        "./images/metareviewers/Dr. Manu J Pillai.jpg",
        "",
        "",
        "",
    ],
    "Dr. Pinkymol K P": [
        "./images/metareviewers/Dr. Pinkymol K P.jpg",
        "",
        "",
        "",
    ],
    "Dr. Prabu M.": ["./images/metareviewers/Dr. Prabu M..jpg", "", "", ""],
    "Dr. Ragesh G K.": [
        "./images/metareviewers/Dr. Ragesh G K.jpeg",
        "",
        "",
        "",
    ],
    "Dr. Rakesh Warier": [
        "./images/metareviewers/Dr. Rakesh Warier.png",
        "",
        "",
        "",
    ],
    "Dr. Rohit K Mathew": [
        "./images/metareviewers/Dr. Rohit K Mathew.jpg",
        "",
        "",
        "",
    ],
    "Dr. Shihabudheen K V": [
        "./images/metareviewers/Dr. Shihabudheen K V.png",
        "",
        "",
        "",
    ],
    "Dr. Sija Gopinathan.": [
        "./images/metareviewers/Dr. Sija Gopinathan.jpeg",
        "",
        "",
        "",
    ],
    "Dr. Sureka Mariam Varghese.": [
        "./images/metareviewers/Dr. Sureka Mariam Varghese.jpeg",
        "",
        "",
        "",
    ],
    "Dr. Vemparala Seshagiri Rao": [
        "./images/metareviewers/Dr. Vemparala Seshagiri Rao.jpg",
        "",
        "",
        "",
    ],
    "Dr. Vignesh Kumar": [
        "./images/metareviewers/Dr. Vignesh Kumar.png",
        "",
        "",
        "",
    ],
    "Dr. Vishnukumar S.": [
        "./images/metareviewers/Dr. Vishnukumar S..jpg",
        "",
        "",
        "",
    ],
};
const commContainer = document.querySelector(".committee__cards");
const makeCardSpeaker = (name, arr) => {
    // const a = document.createElement("a");
    // if (arr[3]) a.href = arr[3];
    const card = document.createElement("div");
    card.classList.add("committee__card");

    const commImg = document.createElement("img");
    commImg.classList.add("committee__img");
    commImg.src = arr[0];

    const commText = document.createElement("div");
    commText.classList.add("committee__text");
    commText.classList.add("reviewer_text");
    const commName = document.createElement("p");
    commName.innerText = name;

    const commDesignation = document.createElement("p");
    commDesignation.classList.add("committee__designation");
    commDesignation.innerHTML = `${arr[1]}`;
    commDesignation.title = arr[1].replace("<br>", "");

    //     const redirectButton = document.createElement("a");
    //     redirectButton.href = arr[3];
    //     redirectButton.innerHTML = `<button class="know_more">
    //   <img src="images/know_more.png" alt="">
    //   </button>`;
    commText.append(commName);
    commText.append(commDesignation);
    card.append(commImg);
    card.append(commText);
    // card.append(redirectButton);
    // a.append(card);
    commContainer.append(card);
};

for (k in reviewers) {
    makeCardSpeaker(k, reviewers[k]);
}

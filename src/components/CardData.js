function CardData(cardTitle, cardImgID) {
    this.cardID = Math.floor(Date.now() * Math.random());
    this.cardTitle = cardTitle;
    this.cardImgID = cardImgID;
}

let card1 = new CardData("Aladdin", "WUu9EGdSEImJy");
let card2 = new CardData("Beauty and the Beast", "EylN1993xNbsA");
let card3 = new CardData("Princess and the Frog", "TexCnkHmzq13Qs3CXy");
let card4 = new CardData("Hercules", "mWNPTJ1zx6Aj5a7CVx");
let card5 = new CardData("Toy Story", "8QM9DDRan1rzO");
let card6 = new CardData("Encanto", "HG6FHWzOJQiWvNTPjh");
let card7 = new CardData("Wish", "RVrL02zQTfQOr4qlZa");
let card8 = new CardData("Inside Out", "11tTNkNy1SdXGg");
let card9 = new CardData("Pocahontas", "7kHBXCO6Zckak");
let card10 = new CardData("Frozen", "cOmKweWa4w0XS");
let card11 = new CardData("Elemental", "hqAN5OlvkLZJXkjPUe");
let card12 = new CardData("Nightmare Before Christmas", "K4Ov4XqbqUSf6");

let cards = [];
cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);
cards.push(card6);
cards.push(card7);
cards.push(card8);
cards.push(card9);
cards.push(card10);
cards.push(card11);
cards.push(card12);

export { cards };

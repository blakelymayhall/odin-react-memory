import { useState } from "react";

import Card from "./Card";
import { cards } from "./CardData";

import "./styles/cardgrid.css";

function CardGrid({ scoreManager }) {
    const [cardsState, setCards] = useState(cards);
    const [selectedCards, setSelectedCards] = useState([]);

    const shuffle = () => {
        console.log(cardsState);
        console.log("Shuffle");
        let cardsCopy = [...cardsState];
        for (var i = cardsCopy.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = cardsCopy[i];
            cardsCopy[i] = cardsCopy[j];
            cardsCopy[j] = temp;
        }
        setCards(cardsCopy);
        console.log(cardsCopy);
    };

    const handleCardClicked = (cardData) => {
        console.log(selectedCards);
        shuffle();
        if (selectedCards.includes(cardData)) {
            scoreManager.resetScore();
            setSelectedCards([]);
        } else {
            scoreManager.incrementScore();
            setSelectedCards([...selectedCards, cardData]);
        }
    };

    return (
        <>
            <div className="cardGrid">
                {cardsState.map((card) => {
                    return <Card key={card.cardID} handleCardClicked={handleCardClicked} cardData={card}></Card>;
                })}
            </div>
        </>
    );
}

export default CardGrid;

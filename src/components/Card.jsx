import { useState, useEffect, useRef } from "react";

import "./styles/cardgrid.css";

function Card({ handleCardClicked, cardData }) {
    const [img, setImg] = useState(null);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const cached = localStorage.getItem(`giphy_${cardData.cardImgID}`);
        if (cached) {
            console.log("Loaded Gif from Memory");
            setImg(cached);
        } else {
            console.log("Loaded Gif from API");
            fetch(`https://api-proxy.blakely-c-mayhall.workers.dev?q=${cardData.cardImgID}`)
                .then((res) => res.json())
                .then((data) => {
                    let imgURL = data.data.images.original.url;
                    localStorage.setItem(`giphy_${cardData.cardImgID}`, imgURL);
                    setImg(imgURL);
                });
        }
    }, []);

    return (
        <>
            <div
                className="card"
                onClick={() => {
                    handleCardClicked(cardData);
                }}
            >
                <div className="cardImageContainer">
                    <img src={img}></img>
                </div>
                <h2 className="cardTitle">{cardData.cardTitle}</h2>
            </div>
        </>
    );
}

export default Card;

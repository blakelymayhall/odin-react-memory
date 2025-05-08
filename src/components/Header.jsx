import { useState } from "react";
import "./styles/header.css";

function Header() {
    return (
        <>
            <div className="header">
                <h1>Disney Memory Game</h1>
                <h2>Get points by clicking on an image, but don't click on any more than once!</h2>
            </div>
        </>
    );
}

export default Header;

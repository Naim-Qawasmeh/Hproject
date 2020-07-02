import React, { Fragment } from "react";
import Error from './Error'
import ReactDOM from 'react-dom';
import hangman1 from "./images/hangman1.png";
import hangman2 from "./images/hangman2.png";
import hangman3 from "./images/hangman3.png";
import hangman4 from "./images/hangman4.png";
import hangman5 from "./images/hangman5.png";
import hangman6 from "./images/hangman6.png";
import hangman7 from "./images/hangman7.png";
export default function Hangman(props) {
    const hangman = [hangman1, hangman2, hangman3, hangman4, hangman5, hangman6, hangman7]

    return (


        <Fragment>
            <img src={hangman[props.name]} height="200px" />
            {props.name === hangman.length ? ReactDOM.render(<React.StrictMode>
                <Error />
            </React.StrictMode>, document.getElementById('root')) : console.log('')}
        </Fragment>
    );
}
